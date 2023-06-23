import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserService } from 'src/services/UserServices.service';
import { NewUserComponent } from './new-user/new-user.component';
import { AddPopUpComponent } from './new-user/add-pop-up/add-pop-up.component';
import { AppRouting } from './app.routing';
import { UserListResolver } from 'src/resolvers/userlist.resolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserListComponent,
    UserDetailComponent,
    NewUserComponent,
    AddPopUpComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	AppRouting
  ],
  providers: [UserService, UserListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
