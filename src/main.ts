import { enableProdMode, ApplicationRef, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { GetToken } from './app/app.module';
import { environment, config } from './environments/environment';
import { enableDebugTools, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ErrorHandlerModule } from './app/errors/error-handler.module';
import { SharedModule } from './app/shared/shared.module';
import { AppRoutingModule } from './app/app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NetworkStatusService } from './app/services/network-status.service';
import { CartSubjectService } from './app/services/cart.subject.service';
import { FavouriteService, LoginRouteGuardService, AuthService, AdminService, ErrorService, CartService, NotificationService, CanDeactivateGuardService, DialogService, LoadingDialogService, ErrorDialogService } from './app/services';

const moduleServices = [
  FavouriteService,
  LoginRouteGuardService,
  AuthService,
  AdminService,
  ErrorService,
  CartService,
  CartSubjectService,
  NotificationService,
  CanDeactivateGuardService,
  DialogService,
  LoadingDialogService,
  ErrorDialogService,
  NetworkStatusService
]
const moduleImports = [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
        config: {
            tokenGetter: GetToken,
            allowedDomains: ['localhost:10001', 'storerestservice.azurewebsites.net']
        }
    }),
    AppRoutingModule,
    SharedModule,
    ErrorHandlerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
    })
]



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(...moduleImports),
        ...moduleServices
    ]
})
.then(moduleRef => {
	const applicationRef = moduleRef.injector.get(ApplicationRef);
	const componentRef = applicationRef.components[0];
	// allows to run `ng.profiler.timeChangeDetection();`
	enableDebugTools(componentRef);
})
.catch(err => console.log(err));

