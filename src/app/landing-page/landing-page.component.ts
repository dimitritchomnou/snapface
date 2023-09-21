import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  //Injection du router
  constructor(private route: Router) {}

  ngOnInit(): void {}

  clickRedirection() {
    this.route.navigateByUrl('listfacesnaps'); //redirection vers le page /listfacesnaps
  }
}
