import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { IndicationComponent } from './component/indication/indication.component';
import { SvgmapComponent } from './component/svgmap/svgmap.component';
import { BookComponent } from './component/book/book.component';
import { HiddenpanelComponent } from './component/hiddenpanel/hiddenpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    IndicationComponent,
    SvgmapComponent,
    BookComponent,
    HiddenpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
