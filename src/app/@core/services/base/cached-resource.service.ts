import { Observable, of, iif } from "rxjs";
import { tap } from "rxjs/operators";
import { BaseResourceModel } from "../../models/base/base.model";
import { SimpleResourceService } from "./simple-resource.service";

export abstract class CachedResourceService<T extends BaseResourceModel> extends SimpleResourceService<T> {
  private isCached = false;
  private resources: T[] = [];

  constructor(
    protected override path: string,
  ) {
    super(path);
  }

  clearCache(): void {
    this.isCached = false;
    this.resources = [];
  }

  override getAll(): Observable<T[]> {
    return iif(() => this.isCached, of(this.resources), super.getAll().pipe(
      tap(resources => {
        this.isCached = true;
        this.resources = resources;
      }),
    ));
  }

  override create(resource: T): Observable<T> {
    return super.create(resource).pipe(
      tap(createdResource => {
        if (this.isCached) {
          this.resources = [createdResource, ...this.resources];
        }
      }),
    );
  }

  override update(resource: T): Observable<T> {
    return super.update(resource).pipe(
      tap(updatedResource => {
        if (this.isCached) {
          this.resources = this.resources.map((object) => {
            return object.id === resource.id ? updatedResource : object;
          });
        }
      }),
    );
  }

  override delete(id: number): Observable<null> {
    return super.delete(id).pipe(
      tap(() => {
        if (this.isCached) {
          this.resources = this.resources.filter((object) => object.id !== id);
        }
      }),
    );
  }
}
