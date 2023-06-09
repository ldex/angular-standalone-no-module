import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { NotificationComponent } from './notification/notification.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home.component';
import { AdminComponent } from './pages/admin.component';
import { ContactComponent } from './pages/contact.component';
import { LoginComponent } from './pages/login.component';
import { ErrorComponent } from './pages/error.component';
import { TestComponent } from "./pages/test.component";
import { DemoWorkerComponent } from "./pages/demo-worker.component";

const pagesComponents = [
  HomeComponent,
  AdminComponent,
  ContactComponent,
  LoginComponent,
  ErrorComponent,
  TestComponent,
  DemoWorkerComponent
];

@NgModule({
    imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ...pagesComponents,
    LoadingDialogComponent,
    ErrorDialogComponent,
    NotificationComponent
],
    exports: [
        ...pagesComponents,
        LoadingDialogComponent,
        ErrorDialogComponent,
        NotificationComponent
    ],
    entryComponents: [
        LoadingDialogComponent,
        ErrorDialogComponent,
        NotificationComponent
    ]
})
export class SharedModule {}
