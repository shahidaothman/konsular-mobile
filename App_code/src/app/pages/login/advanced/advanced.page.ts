import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.page.html',
  styleUrls: ['./advanced.page.scss'],
})
export class AdvancedPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;



  loginUser = {
    email: 'test1@gmail.com',
    password: '123456'
  };

  registerUser = {
    email: 'test',
    password: '123456',
    name: 'Rcap Designs',
    avatar: 'av-1.png'
  };
  slideOpts = {
    zoom: false
  };
  constructor(

  ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }
  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
}
