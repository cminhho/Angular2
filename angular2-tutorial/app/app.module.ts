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

@NgModule({
    imports: [
        BrowserModule,
		FormsModule,
        ReactiveFormsModule ,
        HttpModule
    ],
    declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		NewsComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }