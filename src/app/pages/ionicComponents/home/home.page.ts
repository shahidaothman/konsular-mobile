 
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../../providers/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Components: Observable<Components[]>;

  constructor(private menuController: MenuController,
    public dataService: DataService) { }

  ngOnInit() {
    this.Components = this.dataService.getMenuOpts();

  }
  toggleMenu() {
    this.menuController.toggle();
  }

}
