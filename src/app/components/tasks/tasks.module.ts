import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    // every module needs to work on its own, so we need to declare the components that are used in the module
    // and we only need to export the components that are used in other modules/components
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule, BrowserModule, FormsModule] // import modules that are used in task components
})
export class TasksModule {}