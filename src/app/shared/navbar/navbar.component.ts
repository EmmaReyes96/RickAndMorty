import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  urls = [
    {link: '/home', name: 'Home'},
    {link: '/characters', name: 'Characters'},
    {link: '/episodes', name: 'Episodes'},
    {link: '/locations', name: 'Locations'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
