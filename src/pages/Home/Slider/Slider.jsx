import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from '../../../assets/images/slide1.jpg'
import img2 from '../../../assets/images/slide2.jpg'
import img3 from '../../../assets/images/slide3.jpg'
import img4 from '../../../assets/images/slide4.jpg'

const Slider = () => {
  return (
    <Carousel >
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
    </Carousel>
  );
};

export default Slider;
