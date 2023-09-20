import { Component, OnInit } from '@angular/core';
import { AddcardService } from '../addcard.service';

@Component({
  selector: 'app-rose',
  templateUrl: './rose.component.html',
  styleUrls: ['./rose.component.scss']
})
export class RoseComponent implements OnInit {

  constructor(
    private addcardservice:AddcardService  
  ) { }

  ngOnInit(): void {
  }

roses=[
  {
    image:"./assets/rose/download (1).jpg",
    rating:3.3,
    price:599
  },
  {
    image:"./assets/rose/download (2).jpg",
    rating:4.3,
    price:500
  },
  {
    image:"./assets/rose/download (3).jpg",
    rating:5.3,
    price:500
  },
  {
    image:"./assets/rose/download (4).jpg",
    rating:5.3,
    price:600
  },
  {
    image:"./assets/rose/download (6).jpg",
    rating:3.3,
    price:699
  },
  {
    image:"./assets/rose/download (5).jpg",
    rating:3.2,
    price:599
  },
  {
    image:"./assets/rose/download (7).jpg",
    rating:3.3,
    price:599
  },
  {
    image:"./assets/rose/download (8).jpg",
    rating:5.3,
    price:999
  },
  {
    image:"./assets/rose/download (9).jpg",
    rating:4.3,
    price:699

  },
  {
    image:"./assets/rose/download (10).jpg",
    rating:3.3,
    price:599
  },
  {
    image:"./assets/rose/download (11).jpg",
    rating:3.3,
    price:699
  },
  {
    image:"./assets/rose/download (12).jpg",
    rating:3.3,
    price:699
  },
  {
    image:"./assets/rose/download (13).jpg",
    rating:5.3,
    price:699
  },
  {
    image:"./assets/rose/download.jpg",
    rating:2.3,
    price:499
  },
  {
    image:"./assets/rose/images (1).jpg",
    rating:3.3,
    price:499
  },
  {
    image:"./assets/rose/images (2).jpg",
    rating:2.3,
    price:499


  },
    {
    image:"./assets/rose/images (3).jpg",
    rating:3.3,

    price:599
  },
  {
    image:"./assets/rose/images (4).jpg",
    rating:3.3,
    price:499
  },
  {
    image:"./assets/rose/images (5).jpg",
    rating:3.3,
    price:499
  },
  {
    image:"./assets/rose/images (6).jpg",
    rating:3.4
    ,
    price:599
  },
  {
    image:"./assets/rose/images (7).jpg",
    rating:4.3,
    price:499
  },
  {
    image:"./assets/rose/images (8).jpg",
    rating:3.3,
    price:699
  },
  {
    image:"./assets/rose/images (9).jpg",
    rating:3.3,
    price:699
  },
  {
    image:"./assets/rose/images (10).jpg",
    rating:3.3,
    price:699
  },
]

onclick(){
this.addcardservice.addcard()
}

}
