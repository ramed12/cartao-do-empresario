import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Home } from '@shared-models';
import { HomeService } from '@shared-services';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeBannerComponent implements OnInit {
  dadosHome: Observable<Home[]>;
  objBannerAmigo: Observable<Home[]>;
  objBannerApp: Observable<Home[]>;

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit() {
    this.dadosHome = this.homeService.getHome();
    this.objBannerAmigo = this.homeService
      .getHome()
      .pipe(
        map((dados: any[]) =>
          dados.filter(item =>
            item.descricao.toLowerCase().includes('amigo do cartão')
          )
        )
      );
    this.objBannerApp = this.homeService
      .getHome()
      .pipe(
        map((dados: any[]) =>
          dados.filter(item =>
            item.descricao.toLowerCase().includes('aplicativo')
          )
        )
      );
    // this.bannerAmigo = this.dadosHome.filter(e => e.descricao.toLowerCase() = 'amigo do cartão');
  }

  navigateToLoginPage() {
    this.router.navigate(['/entrar']);
  }
}
