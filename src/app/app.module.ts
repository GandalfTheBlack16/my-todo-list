import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TaskListComponent } from './component/task-list/task-list.component';
import { APP_CONFIG, AppConfig } from './shared/app.config';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const ENVCONFIG: AppConfig = {
  apiBaseUrl: '',
};
function initializeAppFactory(httpClient: HttpClient): () => Observable<AppConfig> {
  return () =>
    httpClient.get<AppConfig>('assets/config/config.json').pipe(
      tap((config) =>
        Object.assign(ENVCONFIG, config)
      )
    );
}

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: true
    },
    { provide: APP_CONFIG, useValue: ENVCONFIG }
],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
