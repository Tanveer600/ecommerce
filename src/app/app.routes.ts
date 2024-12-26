import { Routes } from '@angular/router';
import { LoginComponent } from './Website/login/login.component';
import { LayoutComponent } from './Admin/layout/layout.component';
import { ProductsComponent } from './Admin/products/products.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component:ProductsComponent
            }
        ]
    }
];
