import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor() {}

  accordionItems = [
    {
      title: 'Accordion Item 1',
      content: 'Content of Accordion Item 1',
      isOpen: false,
    },
    {
      title: 'Accordion Item 2',
      content: 'Content of Accordion Item 2',
      isOpen: false,
    },
    {
      title: 'Accordion Item 3',
      content: 'Content of Accordion Item 3',
      isOpen: false,
    },
  ];

  toggleAccordionItem(index: number) {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }

  ngOnInit(): void {
    this.toggleAccordionItem(0);
  }
}
