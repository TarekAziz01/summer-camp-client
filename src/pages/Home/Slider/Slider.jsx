import { useState } from "react";
import img1 from "../../../assets/images/slide1.jpg";
import img2 from "../../../assets/images/slide2.jpg";
import img3 from "../../../assets/images/slide3.jpg";
import img4 from "../../../assets/images/slide4.jpg";

const Sld = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="w-full ">
      <div className="relative overflow-hidden rounded-lg">
        <div className="flex">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <img
            className="w-full h-auto"
            src={images[currentSlide]}
            alt={`Slider Image ${currentSlide + 1}`}
          />
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sld;
