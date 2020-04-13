


//This File Is Required For Custom Components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { TimelinesComponent } from './timelines/timelines.component';

import { GalleryLayout1Component } from './image-gallery/gallery-layout1/gallery-layout1.component';
import { GalleryLayout2Component } from './image-gallery/gallery-layout2/gallery-layout2.component';
import { GalleryLayout3Component } from './image-gallery/gallery-layout3/gallery-layout3.component';
import { ProfileLayout1Component } from './profile/profile-layout1/profile-layout1.component';
import { ProfileLayout2Component } from './profile/profile-layout2/profile-layout2.component';
import { ProfileLayout3Component } from './profile/profile-layout3/profile-layout3.component';

import { ProfileLayout5Component } from './profile/profile-layout5/profile-layout5.component';
import { Grid1Component } from './grids/grid1/grid1.component';
import { Grid2Component } from './grids/grid2/grid2.component';
import { Grid3Component } from './grids/grid3/grid3.component';
import { Grid4Component } from './grids/grid4/grid4.component';
import { Grid5Component } from './grids/grid5/grid5.component';
import { ExampleComponent } from './example/example.component';


//Five three 
import { MarkdownModule } from 'ngx-markdown';
import {
    FivethreeCoreModule,
    FivIconModule,
    FivBackButtonModule,
    FivGalleryModule
} from '@fivethree/core';


import { LottieAnimationViewModule } from 'ng-lottie';

const components = [
    AvatarSelectorComponent,
    AccordionComponent,
    HeaderComponent,
    PopinfoComponent,
    TimelinesComponent,
    GalleryLayout1Component,
    GalleryLayout2Component,
    GalleryLayout3Component,
    ProfileLayout1Component,
    ProfileLayout2Component,
    ProfileLayout3Component,
    ProfileLayout5Component,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid4Component,
    Grid5Component,
    ExampleComponent
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
        MarkdownModule.forChild(),
        LottieAnimationViewModule,
        FivIconModule,
        FivBackButtonModule,
        FivGalleryModule
    ],
    exports: [
        ...components,
        LottieAnimationViewModule
    ]
})
export class ComponentsModule { }
