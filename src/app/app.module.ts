import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './@core/core.module';
import { Store } from '@ngrx/store';
import { environment } from '../environments/environment';
import { JwtHelperService } from './@core/services/auth/jwt-helper.service';
import { TokenPayload } from './@core/models/token-payload.model';
import { restoreSignIn } from './@core/state/user-context/user-context.actions';

function initializeAppFactory(store: Store, jwtHelper: JwtHelperService): () => void {
  return () => {
    const encoded = localStorage.getItem(environment.tokenKey);

    if (encoded) {
      const payload = jwtHelper.decodeToken<TokenPayload>(encoded);

      if (payload) {
        const date = new Date(payload.exp * 1000);

        if (date.valueOf() > new Date().valueOf()) {
          store.dispatch(restoreSignIn({ encoded, payload }));
        }
      }
    }
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CoreModule.forRoot()],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [Store, JwtHelperService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
