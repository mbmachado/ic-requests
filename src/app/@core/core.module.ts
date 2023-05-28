import { LOCALE_ID, ModuleWithProviders, NgModule, Optional, SkipSelf, isDevMode } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import localeBr from '@angular/common/locales/pt';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { httpInterceptorProviders } from './interceptors';
import { UserContextEffects } from './state/user-context/user-context.effects';

registerLocaleData(localeBr, 'pt-BR');

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([UserContextEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...httpInterceptorProviders,
        {
          provide: MAT_DATE_LOCALE,
          useValue: 'pt-BR',
        },
        {
          provide: LOCALE_ID,
          useValue: 'pt-BR',
        },
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: { appearance: 'outline' },
        },
      ],
    };
  }
}
