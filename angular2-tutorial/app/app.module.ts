// importing core dependencies 
import { NgModule }      						from '@angular/core';
import { BrowserModule } 						from '@angular/platform-browser'; // importing bootstrap module
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule } 							from '@angular/http';

// importing app components
import { AppComponent } 						from  './app.component';
import { HomeComponent } 						from './modules/home/home.component';
import { AboutComponent } 						from './modules/about/about.component';
import { NewsComponent } 						from './modules/news/news.component';

// importing routing module
import { ROUTING } 								from './app.routes'

// importing app services
import { Service1 } 							from './_services/service1.service'

@NgModule({
    imports: [
        BrowserModule,
		FormsModule,
        ReactiveFormsModule ,
        HttpModule,
		ROUTING
    ],
    declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		NewsComponent
    ],
    providers: [
		Service1
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }