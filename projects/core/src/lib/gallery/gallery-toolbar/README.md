# fiv-gallery-toolbar

```html
<fiv-gallery-toolbar position="top">
    <!-- any custom content -->
</fiv-gallery-toolbar>

<fiv-gallery-toolbar position="top">
    <ion-toolbar color="transparent">
        <ion-buttons slot="end">
            <ion-button (click)="gallery.close()">
                <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
        </ion-buttons>
    </ion-toolbar>
</fiv-gallery-toolbar>

<fiv-gallery-toolbar position="bottom">
    <ion-toolbar color="transparent">
        <ion-buttons slot="end">
            <ion-button (click)="gallery.close()">
                Close
            </ion-button>
        </ion-buttons>
    </ion-toolbar>
</fiv-gallery-toolbar>
``