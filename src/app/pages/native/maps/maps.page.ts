import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  /**
   * For more https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
   */
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  ionViewDidLoad() {

  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      //// Uncommit this for additional styles
      // styles: [
      //   { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      //   { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      //   { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      //   {
      //     featureType: 'administrative.locality',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#d59563' }]
      //   },
      //   {
      //     featureType: 'poi',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#d59563' }]
      //   },
      //   {
      //     featureType: 'poi.park',
      //     elementType: 'geometry',
      //     stylers: [{ color: '#263c3f' }]
      //   },
      //   {
      //     featureType: 'poi.park',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#6b9a76' }]
      //   },
      //   {
      //     featureType: 'road',
      //     elementType: 'geometry',
      //     stylers: [{ color: '#38414e' }]
      //   },
      //   {
      //     featureType: 'road',
      //     elementType: 'geometry.stroke',
      //     stylers: [{ color: '#212a37' }]
      //   },
      //   {
      //     featureType: 'road',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#9ca5b3' }]
      //   },
      //   {
      //     featureType: 'road.highway',
      //     elementType: 'geometry',
      //     stylers: [{ color: '#746855' }]
      //   },
      //   {
      //     featureType: 'road.highway',
      //     elementType: 'geometry.stroke',
      //     stylers: [{ color: '#1f2835' }]
      //   },
      //   {
      //     featureType: 'road.highway',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#f3d19c' }]
      //   },
      //   {
      //     featureType: 'transit',
      //     elementType: 'geometry',
      //     stylers: [{ color: '#2f3948' }]
      //   },
      //   {
      //     featureType: 'transit.station',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#d59563' }]
      //   },
      //   {
      //     featureType: 'water',
      //     elementType: 'geometry',
      //     stylers: [{ color: '#17263c' }]
      //   },
      //   {
      //     featureType: 'water',
      //     elementType: 'labels.text.fill',
      //     stylers: [{ color: '#515c6d' }]
      //   },
      //   {
      //     featureType: 'water',
      //     elementType: 'labels.text.stroke',
      //     stylers: [{ color: '#17263c' }]
      //   }
      // ]
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>RCAP DESIGNS!</h4>";

    this.addInfoWindow(marker, content);

  }
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
