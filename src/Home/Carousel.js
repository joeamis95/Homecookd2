import React, { Component } from 'react';
import { Carousel, Image } from 'grommet';


export default class CarouselDisplay extends Component {
  state = {}

  render() {
    return (

        <Carousel play={5000}>
          <Image src='https://cf.ua/m/blog/43b1da4a0a2302806bcc9702d1551645/images/gallery-1447358888-clx110114clkt-59a6da0936811.jpg' />
          <Image src='http://www.zastavki.com/pictures/originals/2015/Food___Bread_rolls_croissants_Christmas_apple_pie_105881_.jpg' />
          <Image src='https://i0.wp.com/blog.hellofresh.com/wp-content/uploads/2017/02/veggies-winter-food-gradient-table-banner-red.jpg?ssl=1' />
        </Carousel>
      
    );
  }
}
