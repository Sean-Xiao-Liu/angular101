import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { ReuseableUserComponent } from "./components/reuseable-user/reuseable-user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser"; // this is needed when use NgModule

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent], // this is the root component 
    imports: [BrowserModule, HeaderComponent, UserComponent, ReuseableUserComponent, TasksComponent]
})

export class AppModule{
    
}