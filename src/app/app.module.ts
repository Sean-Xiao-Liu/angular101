import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { ReuseableUserComponent } from "./components/reuseable-user/reuseable-user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { CardComponent } from "./components/shared/card/card.component";
import { TaskComponent } from "./components/tasks/task/task.component";
import { BrowserModule } from "@angular/platform-browser"; // this is needed when use NgModule
import { SharedModule } from "./components/shared/shared.module";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { TasksModule } from "./components/tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, ReuseableUserComponent],
    bootstrap: [AppComponent], // this is the root component 
    imports: [BrowserModule, FormsModule, SharedModule, TasksModule]
})

export class AppModule {

}