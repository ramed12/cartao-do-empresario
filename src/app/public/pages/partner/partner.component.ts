import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Partners } from '@shared-models';
import { PartnersService } from '@shared-services/partners.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  dadosPartner: Observable<Partners[]>;
  objBannerAmigo: Observable<Partners[]>;
  objBannerApp: Observable<Partners[]>;

  constructor(
    private router: Router,
    private partnerService: PartnersService
  ) {}

  ngOnInit() {}

  navigateToLoginPage() {
    this.router.navigate(['/entrar']);
  }
}
