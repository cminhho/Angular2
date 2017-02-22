// importting core modules
import { Routes, RouterModule } from '@angular/router';

// importting component modules
import { HomeComponent } 		from './modules/home/home.component';
import { AboutComponent } 		from './modules/about/about.component';
import { NewsComponent } 		from './modules/news/news.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'news', component: NewsComponent },
	{
		path: '**',
		redirectTo: '/home'
	}
]

export const ROUTING = RouterModule.forRoot(routes);