import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,   //because of NgIf
        FormsModule,    //because of template drvien form
        RouterModule.forChild([     //AuthRoutingModule could be created instead of this import
            {
                path: '',
                component: AuthComponent
            }       // /auth      
        ]),
        SharedModule    //because of the loading-spinner
    ]
})
export class AuthModule {}