import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcardService {

  constructor() { }
  cartvalue:number=0
  cartvalue$=new Subject<number>()
  addcard(){
    this.cartvalue++
    this.cartvalue$.next(this.cartvalue)
  }
  getcartvalue(){
    return this.cartvalue$
  }

}
