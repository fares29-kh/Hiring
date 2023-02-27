import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  position: number = 0;
  image: String = './assets/images/1.jpg';
  sliders: String[] = [
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/4.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
    //setInterval(()=> this.changeSlider('previous')  , 5000)
    
  }

  changeSlider(direction: String) {
    //test next , previous
    if (direction == 'previous') {

      if( this.position > 0 ){
        this.image = this.sliders[this.position - 1];
        this.position--;
      }else{
        this.position = this.sliders.length -1
        this.image = this.sliders[this.position]
      }
     
    } else {

      if( this.position < this.sliders.length -1 ){
        this.image = this.sliders[this.position + 1];
        this.position++;
      }else{
        this.position = 0
        this.image = this.sliders[this.position]
      }
      
    }

   
  }
}
