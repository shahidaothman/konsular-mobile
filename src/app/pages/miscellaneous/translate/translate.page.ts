import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
})
export class TranslatePage implements OnInit {
  selectedLanguage: string;

  /**
   * 
   * npm i @ngx-translate/core @ngx-translate/http-loader
   */
  constructor(
    private _translate: TranslateService

  ) {

  }
  ngOnInit() {
  }
  /**
  * Give params language 
  * @param lang recibe idioma en formato de XX.
  */
  translateLang(lang: string) {
    this._translate.use(lang);
  }

}
