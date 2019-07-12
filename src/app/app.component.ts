import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1 [class.with-border]="withBorder"
        [style.color]="textColor"
        (mouseover)="onTextMouseOver()"
        (mouseout)="onTextMouseOut()"
    >
        Hello {{ title }}
    </h1>
    <h1 [ngClass]="{'with-border': withBorder}" >
        Hello {{ title }}
    </h1>
    <img src="{{ imgSrc }}">
    <img [src]="imgSrc"><br/>

    <button (click)="onButtonClick()">{{withBorder ? 'Ẩn' : 'Hiện'}} border </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toán NV ok';
  imgSrc = 'https://toidicodedao.files.wordpress.com/2019/06/img_1984jpg-e1561790037662.jpg?w=360&h=372&crop=1'
  textColor = 'blue';
  backGroundColor = 'violet';

  styleObj = {color: this.textColor, background: this.backGroundColor };

  withBorder = true;

  onButtonClick() {
    console.log('Button Click !!!');
    this.withBorder = !this.withBorder;
  }
  onTextMouseOver() {
    this.textColor = 'dodgerblue';
  }
  onTextMouseOut() {
    this.textColor = 'violet';
  }
}
