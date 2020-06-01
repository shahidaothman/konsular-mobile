import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis/apis.service';
import { UisService } from 'src/app/services/uis/uis.service';
import { Logger } from '../../utils/app.util';
import { ObjectAnyType } from '../../interfaces/app.interface';

interface List {
  id: number;
  title: string;
  name: string;
  created_at: string;
  filing_status_id: number;
}

@Component({
  selector: 'app-information-malaysian',
  templateUrl: './information-malaysian.page.html',
  styleUrls: ['./information-malaysian.page.scss'],
})
export class InformationMalaysianPage implements OnInit {
  public items: List[] = new Array();
  public isLoading = true;
  constructor(
    private router: Router,
    private apisService: ApisService,
    private uisService: UisService
  ) {}

  public ngOnInit() {}

  public ionViewWillEnter() {
    this.getRegisteredMalaysianDetail().finally();
  }

  /**
   * open new registration page
   * @method openRegistrationMalaysian
   */
  public openRegistrationMalaysian() {
    this.router.navigateByUrl('/tabs/menu/registration-malaysian').finally();
  }

  /**
   * get already registered malaysian data
   * @method getRegisteredMalaysianDetail
   */
  public async getRegisteredMalaysianDetail() {
    const loader = await this.uisService.setLoader();
    await loader.present();
    this.apisService.registerMalaysianDetails.subscribe(
      async ($: ObjectAnyType) => {
        this.isLoading = false;
        this.items = $.data;
        await loader.dismiss();
      },
      async (err) => {
        Logger.error(err);
        this.isLoading = false;
        await this.uisService.presentToast(err.error, 'warning');
        await loader.dismiss();
      }
    );
  }

  /**
   *  delete Registration
   * @param id user registration id number
   * @method deleteMalaysianRegistration
   */
  public async deleteMalaysianRegistration(id: number) {
    await this.uisService.presentConfirm(
      {
        accept: async () => {
          Logger.log(`delete`);
          const loader = await this.uisService.setLoader();
          await loader.present();
          this.apisService.deleteMalaysianRegistration({ id }).subscribe(
            async ($) => {
              this.items = this.items.filter((item) => item.id !== id);
              await loader.dismiss();
            },
            async ($) => {
              Logger.error($);
              await this.uisService.presentAlert($.error, 'Error');
              await loader.dismiss();
            }
          );
        },
        reject: () => {
          Logger.log(`cancel`);
        },
      },
      'Are you want to delete Good Conduct ?'
    );
  }

  /**
   * editMalaysianRegistration
   * @param id registration id
   */
  public async editMalaysianRegistration(id: number) {
    await this.router.navigate([
      '/tabs/menu/registration-malaysian',
      { formId: id },
    ]);
  }
}
