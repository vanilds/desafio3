import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCategoriaComponent } from '../../src/app/consulta/app-lista-categoria/app-lista-categoria.component';
import { ListaLancamentosComponent } from '../../src/app/consulta/app-lista-lancamentos/app-lista-lancamentos.component';
import { ListaMesComponent } from '../../src/app/consulta/app-lista-mes/app-lista-mes.component';
import { LancamentosService } from '../../src/app/service/lancamentos.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroMesPipe } from './filtro-mes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriaComponent,
    ListaLancamentosComponent,
    ListaMesComponent,
    HomeComponent,
    FiltroMesPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LancamentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
