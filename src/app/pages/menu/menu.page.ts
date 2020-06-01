import { Component, OnInit } from '@angular/core';
import { GoodConductDetails } from '../../interfaces/app.interface';
import { UisService } from '../../services/uis/uis.service';
import { ApisService } from '../../services/apis/apis.service';
import { Logger } from '../../utils/app.util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public goodConduct: GoodConductDetails;
  constructor(
    private uisService: UisService,
    private apisService: ApisService
  ) {}

  public ngOnInit() {}

  public ionViewWillEnter() {
    this.getGoodConductStatus().finally();
  }

  /**
   * get good conduct data
   * @method getGoodConductStatus
   */
  private async getGoodConductStatus() {
    const loader = await this.uisService.setLoader();
    await loader.present();

    this.apisService.getConductList().subscribe(
      ($) => {
        this.goodConduct = $.data[0];
        loader.dismiss();
      },
      ($) => {
        Logger.error($);
        this.uisService.presentAlert($.error).finally(() => loader.dismiss());
      }
    );
  }
}
