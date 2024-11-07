import { Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { PanierComponent } from './component/panier/panier.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { SearchCategoryComponent } from './component/search-category/search-category.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AuthGuardGuard } from './guards/auth.guard';
import { OrdresComponent } from './ordres/ordres.component';
import { AutoGuardService } from './auto-guard.service';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'searchresult/:keyword', component: SearchResultComponent },
  { path: 'category/:category', component: SearchCategoryComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'product/:id', component: DetailproductComponent },
  {
    path: 'ordres',
    component: OrdresComponent,
    canActivate: [AutoGuardService],
  },
];
