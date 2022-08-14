import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '@public-models/profile.model';
import { UserService } from '@core-services/user.service';
import { ProfileService } from '@private-services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public profile: Profile;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  openLinkNewTab(url: string) {
    window.open(url, '_blank');
  }
}
