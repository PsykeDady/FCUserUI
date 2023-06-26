import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListResolver } from 'src/resolvers/userlist.resolver';
import { UserService } from 'src/services/UserServices.service';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NewUserComponent } from './new-user/new-user.component';
import { SearchBarComponent } from './user-list/search-bar/search-bar.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddPopupService } from 'src/services/add-popup.service';
import { AddPopupComponent } from './add-popup/add-popup.component';
import { EditUserService } from 'src/services/edit-user.service';
import { SearchService } from 'src/services/search.service';
import { FetchedList } from './user-list/fetched-list/fetched.list.component';
import { SearchList } from './user-list/search-list/search.list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserListComponent,
    UserDetailComponent,
    NewUserComponent,
    AddPopupComponent,
	FetchedList,
	SearchList
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	AppRouting
  ],
  providers: [
		UserService,
		UserListResolver,
		AddPopupService,
		EditUserService,
		SearchService
	],
  bootstrap: [AppComponent]
})
export class AppModule {}
