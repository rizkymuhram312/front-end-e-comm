import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80} />
    <img src={https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80} />
    <img src={https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80} />
  
  </Carousel>
);

export default MyCarousel;