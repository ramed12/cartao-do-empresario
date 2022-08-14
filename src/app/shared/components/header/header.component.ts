import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backgroundImageUrl =
    'url(./assets/images/background-header-public.jpg)';
  @Input() hoverMenuColor = '#f8a916';
  @Input() bgMenuColor = '#06447d';

  isCollapsed = true;

  constructor() {}

  ngOnInit(): void {
    document.documentElement.style.setProperty(
      '--hover-menu-color',
      this.hoverMenuColor
    );
    document.documentElement.style.setProperty(
      '--bg-menu-color',
      this.bgMenuColor
    );
  }
}
