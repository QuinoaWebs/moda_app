import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledCarousel } from 'reactstrap';
import Foto1 from '../img/slider/images/foto_slider_1.jpg';
import Foto2 from '../img/slider/images/foto_slider_2.jpg';
import Foto3 from '../img/slider/images/foto_slider_3.jpg';

const items = [
  {
    src: Foto1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: Foto2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: Foto3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const SliderFotos = () => <UncontrolledCarousel items={items} />;

export default SliderFotos;