import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../providers/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];
  searchField = '';
  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbumes().subscribe(data => {
      console.log(data);
      this.albums = data;
    });

  }

  filter(event) {
    // console.log(event);

    this.searchField = event.detail.value;

  }

}
