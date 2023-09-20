import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddcardService } from '../addcard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
  private cardservise:AddcardService,
  ) { }

  ngOnInit(): void {
    this.cardservise.getcartvalue().subscribe(val=>this.cartvalue=val)
  }

  cartvalue=0
  subscribe!:Subscription
  
}
