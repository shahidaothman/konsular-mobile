import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-ribbon',
  templateUrl: './item-ribbon.page.html',
  styleUrls: ['./item-ribbon.page.scss'],
})
export class ItemRibbonPage implements OnInit {
  public thumbnails: { title: string, image: string, ribbonText: string, class: string }[] = [
    { title: 'Awesome Shoes - $9', image: 'assets/ribbons/shoes.jpg', ribbonText: 'sale', class: 'sale' },
    { title: 'Awesome Team', image: 'assets/ribbons/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
    { title: 'Bad team', image: 'assets/ribbons/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
