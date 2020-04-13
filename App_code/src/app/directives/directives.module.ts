import { NgModule } from '@angular/core';
import { HidenavContentDirective } from "./hidenav-content.directive";
import { HidenavHeaderDirective } from "./hidenav-header.directive";
import { HidenavStretchheaderComponent } from './hidenav-stretchheader.component';
import { HidenavShContentDirective } from './hidenav-sh-content.directive';

@NgModule({
    declarations: [
        HidenavContentDirective,
        HidenavHeaderDirective,
        HidenavStretchheaderComponent,
        HidenavShContentDirective,
    ],
    exports: [
        HidenavContentDirective,
        HidenavHeaderDirective,
        HidenavStretchheaderComponent,
        HidenavShContentDirective,
    ]
})
export class DirectivesModule { }