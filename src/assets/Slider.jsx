import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Your custom CSS file for carousel styling
import model from './user-1.jpg'
import model2 from './user-2.jpeg'
import model3 from './3.jpg'

const data = [
  {
    id: 1,
    title: 'Delicious & variety ',
    description: `Ive tried several items from this site, and Im impressed! The range of options and the taste blew me away. Plus, the delivery was super fast. Highly recommended`,
    image: model,
    star:'⭐⭐⭐⭐'
  },
  {
    id: 2,
    title: ' fantastic service',
    description: `"I'm a huge fan of frozen foods, and this site has become my go-to. The quality of the food is top-notch, and the customer service is excellent. Keep it up!"`,
    image: model2,
    star:'⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: 'Reliable and delicious ',
    description: `"I've been a regular customer for months now, and I can't recommend this site enough. The reliability of the deliveries and the mouthwatering options keep me coming back. 5 stars!"`,
    image: model3,
    star:'⭐⭐⭐⭐'
  },
  {
    id: 4,
    title: 'Delicious & variety ',
    description: `Ive tried several items from this site, and Im impressed! The range of options and the taste blew me away. Plus, the delivery was super fast. Highly recommended`,
    image: model,
    star:'⭐⭐⭐⭐'
  },
  {
    id: 5,
    title: ' fantastic service',
    description: `"I'm a huge fan of frozen foods, and this site has become my go-to. The quality of the food is top-notch, and the customer service is excellent. Keep it up!"`,
    image: model2,
    star:'⭐⭐⭐⭐'
  },
  {
    id: 6,
    title: 'Reliable and delicious ',
    description: `"I've been a regular customer for months now, and I can't recommend this site enough. The reliability of the deliveries and the mouthwatering options keep me coming back. 5 stars!"`,
    image: model3,
    star:'⭐⭐⭐⭐'
  },

];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container  mt-5"> 
      <div className="row">
        <div className="col-lg-12">
          <div className="card_container">
            <div className='heading_div'>
              <h1 className='heading_card'>
              What Our Clients<br></br>
                Say About Us
              </h1>
            </div>
            <Slider {...settings}>
              {data.map((card) => (
                <div key={card.id} className="col-lg-6 mb-4"> 
                  <div className="card">
                    <img className='image_person' src={card.image} alt={card.title} />
                    <h1>{card.title}</h1>
                    <h4>{card.star}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
