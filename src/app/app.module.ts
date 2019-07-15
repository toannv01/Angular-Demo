import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeopleService } from './people.service';

import { AppComponent } from './app.component';
import { HiComponent } from './components/hi/hi.component';
import { HelloComponent } from './components/hello/hello.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    HelloComponent,
    PeopleListComponent,
    PersonDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
