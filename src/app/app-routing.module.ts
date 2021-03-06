import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  {
    path: 'tutorials',
    loadChildren: './pages/tutorials/tutorials.module#TutorialsPageModule',
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'simple',
    loadChildren: './pages/login/simple/simple.module#SimplePageModule',
  },
  {
    path: 'gradient',
    loadChildren: './pages/login/gradient/gradient.module#GradientPageModule',
  },
  {
    path: 'video-backgroud',
    loadChildren:
      './pages/login/video-backgroud/video-backgroud.module#VideoBackgroudPageModule',
  },
  {
    path: 'slide-backgroud',
    loadChildren:
      './pages/login/slide-backgroud/slide-backgroud.module#SlideBackgroudPageModule',
  },

  {
    path: 'firebase',
    loadChildren: './pages/firebase/firebase.module#FirebasePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'firebase-auth',
    loadChildren:
      './pages/firebase/firebase-auth/firebase-auth.module#FirebaseAuthPageModule',
  },
  {
    path: 'firebase-sign-up',
    loadChildren:
      './pages/firebase/firebase-sign-up/firebase-sign-up.module#FirebaseSignUpPageModule',
  },
  {
    path: 'firebaselist',
    loadChildren:
      './pages/firebase/firebaselist/firebaselist.module#FirebaselistPageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'firecreate',
    loadChildren:
      './pages/firebase/firecreate/firecreate.module#FirecreatePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'firedetails/:id',
    loadChildren:
      './pages/firebase/firedetails/firedetails.module#FiredetailsPageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'fireimage',
    loadChildren:
      './pages/firebase/fireimage/fireimage.module#FireimagePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'fireimage-create',
    loadChildren:
      './pages/firebase/fireimage-create/fireimage-create.module#FireimageCreatePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'fireimage-details/:id',
    loadChildren:
      './pages/firebase/fireimage-details/fireimage-details.module#FireimageDetailsPageModule',
    canActivate: [AuthGuard],
  },

  {
    path: 'advanced',
    loadChildren: './pages/login/advanced/advanced.module#AdvancedPageModule',
  },
  {
    path: 'accordion-list',
    loadChildren:
      './pages/accordion-list/accordion-list.module#AccordionListPageModule',
  },

  {
    path: 'home-ionic',
    loadChildren: './pages/ionicComponents/home/home.module#HomePageModule',
  },
  {
    path: 'alert',
    loadChildren: './pages/ionicComponents/alert/alert.module#AlertPageModule',
  },
  {
    path: 'alerts',
    loadChildren:
      './pages/ionicComponents/alerts/alerts.module#AlertsPageModule',
  },
  {
    path: 'basic-alert',
    loadChildren:
      './pages/ionicComponents/alerts/basic/basic.module#BasicPageModule',
  },
  {
    path: 'form-alert',
    loadChildren:
      './pages/ionicComponents/alerts/form-alert/form-alert.module#FormAlertPageModule',
  },
  {
    path: 'action-sheet',
    loadChildren:
      './pages/ionicComponents/action-sheet/action-sheet.module#ActionSheetPageModule',
  },
  {
    path: 'avatar',
    loadChildren:
      './pages/ionicComponents/avatar/avatar.module#AvatarPageModule',
  },
  {
    path: 'buttons',
    loadChildren:
      './pages/ionicComponents/buttons/buttons.module#ButtonsPageModule',
  },
  {
    path: 'card',
    loadChildren: './pages/ionicComponents/card/card.module#CardPageModule',
  },
  {
    path: 'check',
    loadChildren: './pages/ionicComponents/check/check.module#CheckPageModule',
  },
  {
    path: 'date-time',
    loadChildren:
      './pages/ionicComponents/date-time/date-time.module#DateTimePageModule',
  },
  {
    path: 'fab',
    loadChildren: './pages/ionicComponents/fab/fab.module#FabPageModule',
  },
  {
    path: 'grid',
    loadChildren: './pages/ionicComponents/grid/grid.module#GridPageModule',
  },
  {
    path: 'infinite-scroll',
    loadChildren:
      './pages/ionicComponents/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule',
  },
  {
    path: 'input',
    loadChildren: './pages/ionicComponents/input/input.module#InputPageModule',
  },
  {
    path: 'list',
    loadChildren: './pages/ionicComponents/list/list.module#ListPageModule',
  },
  {
    path: 'list-reorder',
    loadChildren:
      './pages/ionicComponents/list-reorder/list-reorder.module#ListReorderPageModule',
  },
  {
    path: 'loading',
    loadChildren:
      './pages/ionicComponents/loading/loading.module#LoadingPageModule',
  },
  {
    path: 'modal',
    loadChildren: './pages/ionicComponents/modal/modal.module#ModalPageModule',
  },
  {
    path: 'popover',
    loadChildren:
      './pages/ionicComponents/popover/popover.module#PopoverPageModule',
  },
  {
    path: 'progress-bar',
    loadChildren:
      './pages/ionicComponents/progress-bar/progress-bar.module#ProgressBarPageModule',
  },
  {
    path: 'refresher',
    loadChildren:
      './pages/ionicComponents/refresher/refresher.module#RefresherPageModule',
  },
  {
    path: 'searchbar',
    loadChildren:
      './pages/ionicComponents/searchbar/searchbar.module#SearchbarPageModule',
  },
  {
    path: 'segment',
    loadChildren:
      './pages/ionicComponents/segment/segment.module#SegmentPageModule',
  },
  {
    path: 'slides',
    loadChildren:
      './pages/ionicComponents/slides/slides.module#SlidesPageModule',
  },
  {
    path: 'tabs',
    loadChildren: './pages/ionicComponents/tabs/tabs.module#TabsPageModule',
  },
  {
    path: 'dialog',
    loadChildren: './pages/dialog/dialog.module#DialogPageModule',
  },
  {
    path: 'expantable',
    loadChildren: './pages/expantable/expantable.module#ExpantablePageModule',
  },
  {
    path: 'image-gallery',
    loadChildren:
      './pages/image-gallery/image-gallery.module#ImageGalleryPageModule',
  },
  {
    path: 'stepper',
    loadChildren: './pages/stepper/stepper.module#StepperPageModule',
  },
  {
    path: 'app-intro',
    loadChildren: './pages/app-intro/app-intro.module#AppIntroPageModule',
  },
  {
    path: 'charts',
    loadChildren: './pages/charts/charts.module#ChartsPageModule',
  },

  {
    path: 'parallax',
    loadChildren: './pages/parallax/parallax.module#ParallaxPageModule',
  },
  {
    path: 'hide-headers',
    loadChildren:
      './pages/parallax/hide-headers/hide-headers.module#HideHeadersPageModule',
  },
  {
    path: 'header-image',
    loadChildren:
      './pages/parallax/header-image/header-image.module#HeaderImagePageModule',
  },
  {
    path: 'spotify-header',
    loadChildren:
      './pages/parallax/spotify-header/spotify-header.module#SpotifyHeaderPageModule',
  },
  {
    path: 'stretch-header',
    loadChildren:
      './pages/parallax/stretch-header/stretch-header.module#StretchHeaderPageModule',
  },
  {
    path: 'headers',
    loadChildren: './pages/parallax/headers/headers.module#HeadersPageModule',
  },

  {
    path: 'timeline',
    loadChildren: './pages/timeline/timeline.module#TimelinePageModule',
  },
  {
    path: 'item-ribbon',
    loadChildren: './pages/item-ribbon/item-ribbon.module#ItemRibbonPageModule',
  },
  {
    path: 'payments',
    loadChildren: './pages/payments/payments.module#PaymentsPageModule',
  },
  {
    path: 'stripe',
    loadChildren: './pages/payments/stripe/stripe.module#StripePageModule',
  },
  {
    path: 'paypal',
    loadChildren: './pages/payments/paypal/paypal.module#PaypalPageModule',
  },
  {
    path: 'add-new-card',
    loadChildren:
      './pages/payments/add-new-card/add-new-card.module#AddNewCardPageModule',
  },
  {
    path: 'sidemenus',
    loadChildren: './pages/sidemenus/sidemenus.module#SidemenusPageModule',
  },
  {
    path: 'miscellaneous',
    loadChildren:
      './pages/miscellaneous/miscellaneous.module#MiscellaneousPageModule',
  },
  {
    path: 'gallery-layout1',
    loadChildren:
      './pages/image-gallery/gallery-layout1/gallery-layout1.module#GalleryLayout1PageModule',
  },
  {
    path: 'gallery-layout2',
    loadChildren:
      './pages/image-gallery/gallery-layout2/gallery-layout2.module#GalleryLayout2PageModule',
  },
  {
    path: 'gallery-layout3',
    loadChildren:
      './pages/image-gallery/gallery-layout3/gallery-layout3.module#GalleryLayout3PageModule',
  },
  {
    path: 'gallery-layout4',
    loadChildren:
      './pages/image-gallery/gallery-layout4/gallery-layout4.module#GalleryLayout4PageModule',
  },
  {
    path: 'profiles',
    loadChildren: './pages/profiles/profiles.module#ProfilesPageModule',
  },
  {
    path: 'profile-layout/:id',
    loadChildren:
      './pages/profiles/profile-layout/profile-layout.module#ProfileLayoutPageModule',
  },
  { path: 'forms', loadChildren: './pages/forms/forms.module#FormsPageModule' },
  {
    path: 'forms-example1',
    loadChildren:
      './pages/forms/forms-example1/forms-example1.module#FormsExample1PageModule',
  },
  {
    path: 'forms-example2',
    loadChildren:
      './pages/forms/forms-example2/forms-example2.module#FormsExample2PageModule',
  },
  {
    path: 'forms-example3',
    loadChildren:
      './pages/forms/forms-example3/forms-example3.module#FormsExample3PageModule',
  },
  {
    path: 'forms-example4',
    loadChildren:
      './pages/forms/forms-example4/forms-example4.module#FormsExample4PageModule',
  },
  {
    path: 'expantable1',
    loadChildren:
      './pages/expantable/expantable1/expantable1.module#Expantable1PageModule',
  },
  {
    path: 'expantable2',
    loadChildren:
      './pages/expantable/expantable2/expantable2.module#Expantable2PageModule',
  },
  {
    path: 'expantable3',
    loadChildren:
      './pages/expantable/expantable3/expantable3.module#Expantable3PageModule',
  },
  {
    path: 'ck-editor',
    loadChildren:
      './pages/miscellaneous/ck-editor/ck-editor.module#CkEditorPageModule',
  },
  {
    path: 'themes',
    loadChildren: './pages/miscellaneous/themes/themes.module#ThemesPageModule',
  },
  {
    path: 'translate',
    loadChildren:
      './pages/miscellaneous/translate/translate.module#TranslatePageModule',
  },
  {
    path: 'calendars',
    loadChildren:
      './pages/miscellaneous/calendars/calendars.module#CalendarsPageModule',
  },
  {
    path: 'signature-pad',
    loadChildren:
      './pages/miscellaneous/signature-pad/signature-pad.module#SignaturePadPageModule',
  },
  {
    path: 'native',
    loadChildren: './pages/native/native.module#NativePageModule',
  },
  {
    path: 'barcode-scanner',
    loadChildren:
      './pages/native/barcode-scanner/barcode-scanner.module#BarcodeScannerPageModule',
  },
  {
    path: 'maps',
    loadChildren: './pages/native/maps/maps.module#MapsPageModule',
  },
  {
    path: 'google-login',
    loadChildren:
      './pages/native/google-login/google-login.module#GoogleLoginPageModule',
  },
  {
    path: 'facebook-login',
    loadChildren:
      './pages/native/facebook-login/facebook-login.module#FacebookLoginPageModule',
  },
  {
    path: 'coming',
    loadChildren: './pages/coming/coming.module#ComingPageModule',
  },

  { path: 'grids', loadChildren: './pages/grids/grids.module#GridsPageModule' },
  {
    path: 'grid-example/:id',
    loadChildren:
      './pages/grids/grid-example/grid-example.module#GridExamplePageModule',
  },
  {
    path: 'bottom-sheet',
    loadChildren:
      './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule',
  },
  {
    path: 'test',
    loadChildren: './pages/ionicComponents/test/test.module#TestPageModule',
  },
  {
    path: 'register',
    loadChildren:
      './pages/ionicComponents/register/register.module#RegisterPageModule',
  },
  {
    path: 'abroad',
    loadChildren:
      './pages/ionicComponents/abroad/abroad.module#AbroadPageModule',
  },
  {
    path: 'new-home',
    loadChildren:
      './pages/ionicComponents/new-home/new-home.module#NewHomePageModule',
  },
  {
    path: 'stepper',
    loadChildren:
      './pages/ionicComponents/stepper/stepper.module#StepperPageModule',
  },
  {
    path: 'landing-page',
    loadChildren:
      './pages/ionicComponents/landing-page/landing-page.module#LandingPagePageModule',
  },
  {
    path: 'register-user',
    loadChildren:
      './pages/ionicComponents/register-user/register-user.module#RegisterUserPageModule',
  },
  {
    path: 'profile-user',
    loadChildren:
      './pages/ionicComponents/profile-user/profile-user.module#ProfileUserPageModule',
  },
  {
    path: 'geolocation',
    loadChildren:
      './pages/ionicComponents/geolocation/geolocation.module#GeolocationPageModule',
  },
  {
    path: 'near-consular',
    loadChildren:
      './pages/ionicComponents/geolocation/near-consular/near-consular.module#NearConsularPageModule',
  },
  {
    path: 'my-location',
    loadChildren:
      './pages/ionicComponents/geolocation/my-location/my-location.module#MyLocationPageModule',
  },
  {
    path: 'my-location-map',
    loadChildren:
      './pages/ionicComponents/geolocation/my-location/my-location-map/my-location-map.module#MyLocationMapPageModule',
  },
  {
    path: 'near-consular-map',
    loadChildren:
      './pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.module#NearConsularMapPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
