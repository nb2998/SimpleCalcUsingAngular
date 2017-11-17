import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Simple Calculator';
  num1 : number;
  num2 : number;
  res : number;
  add = function() : void{
    this.res=this.num1 + this.num2;
  }
  sub = function() : void{
    this.res=this.num1 - this.num2;
  }
  mul = function() : void{
    this.res=this.num1 * this.num2;
  }
  divide = function() : void{
    this.res= this.num1/this.num2;
  }
}
