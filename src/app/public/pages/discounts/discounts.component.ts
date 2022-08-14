import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Discounts } from '@shared-models';
import { DiscountsService } from '@shared-services';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss'],
})
export class DiscountsComponent implements OnInit, AfterViewInit {
  discounts: Discounts[] = [];
  swiper: any;

  @ViewChild('swiperContainer') swiperContainer: any;

  constructor(private discountsService: DiscountsService) {}

  ngOnInit(): void {
    this.getDiscounts();
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  getDiscounts(): void {
    this.discountsService
      .getDiscounts()
      .subscribe(discounts => (this.discounts = discounts));
  }

  initSwiper(): void {
    this.swiper = new SwiperCore(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
