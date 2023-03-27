import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.sass']
})
export class FooterComponentComponent implements OnInit {
  public socialMediaLinks;

  constructor() {
    this.socialMediaLinks = [
      {name: 'Facebook', url: 'https://www.facebook.com'},
      {name: 'Twitter', url: 'https://www.twitter.com'},
      {name: 'Instagram', url: 'https://www.instagram.com'},
      {name: 'LinkedIn', url: 'https://www.linkedin.com'},
    ]
  }

  ngOnInit(): void {}
}
