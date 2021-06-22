import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ListaLancamentosComponent } from './consulta/app-lista-lancamentos/app-lista-lancamentos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMesComponent } from './consulta/app-lista-mes/app-lista-mes.component';
import { ListaCategoriaComponent } from './consulta/app-lista-categoria/app-lista-categoria.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'lancamento', component: ListaLancamentosComponent },
  //{ path: 'lancamento/:id', component:  },
  { path: 'mes', component: ListaMesComponent  },
  { path: 'categoria', component: ListaCategoriaComponent  },
  //{ path: 'categoria/:id', component:  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
