import { ContactoComponent } from './componentes/paginas/contacto/contacto.component';
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./componentes/paginas/about/about.component";
import { BlogComponent } from "./componentes/paginas/blog/blog.component";
import { MainComponent } from "./componentes/paginas/main/main.component";

const routes: Routes = [
    {path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    {path: 'blog', component: BlogComponent },
    {path: 'contacto', component: ContactoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'main' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' }
    )],
    exports: [RouterModule]
})

export class AppRoutingModule{}