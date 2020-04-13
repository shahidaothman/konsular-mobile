import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../../components/popinfo/popinfo.component';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController, private util: UtilService) { }

  ngOnInit() {
  }

  async show(event) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false

    });

    await popover.present();
    const { data } = await popover.onWillDismiss();
    console.log('data: ', data);
    this.util.showToast(data.item, 'success', 'bottom');
  }
}
