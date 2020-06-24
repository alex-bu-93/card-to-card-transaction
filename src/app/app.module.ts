import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { registerLocaleData }      from '@angular/common';
import ru                          from '@angular/common/locales/ru';
import en                          from '@angular/common/locales/en';
import { HttpClientModule }        from '@angular/common/http';
import { NZ_I18N, en_US }          from 'ng-zorro-antd/i18n';
import { WelcomeModule }           from './views/welcome';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';

registerLocaleData(ru); // for russian locale number transform pipe
registerLocaleData(en);

const BROWSER_MODULES = [BrowserModule, BrowserAnimationsModule];

@NgModule({
  imports: [
    WelcomeModule,
    AppRoutingModule,
    HttpClientModule,
    BROWSER_MODULES
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
