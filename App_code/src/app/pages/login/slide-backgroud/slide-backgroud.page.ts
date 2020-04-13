import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-slide-backgroud',
  templateUrl: './slide-backgroud.page.html',
  styleUrls: ['./slide-backgroud.page.scss'],
})
export class SlideBackgroudPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    autoplay: true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  };

  images = [
    "assets/sliders/1.jpg",
    "assets/sliders/2.jpg",
    "assets/sliders/3.jpg",
    "assets/sliders/4.jpg",
  ]
  email: any;
  password: any;
  constructor(
    private util: UtilService,
  ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {

  }
  goHome() {
    if (this.email == '' || this.password == '') {
      this.util.showWarningAlert('All Fields are Required');
    } else {
      this.util.showToast('Login Success', 'success', 'bottom');
    }
  }
}
