import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

widthforonerstar=16

@Input() rating=0
starwidth=0
ngOnChanges(): void{
  this.starwidth=this.widthforonerstar*this.rating

}



}
