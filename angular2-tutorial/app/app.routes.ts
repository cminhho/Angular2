// importting core modules
import { ROUTER_DIRECTIVE } 	from '@angular/router';

// importting component modules
import { HomeComponent } 		from './modules/home/home.component';
import { AboutComponent } 		from './modules/about/about.component';
import { NewsComponent } 		from './modules/news/news.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/homes',
		pathMatch: 'full'
	},
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'news', component: NewsComponent }
]