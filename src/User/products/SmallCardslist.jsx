




import React from 'react';
import tomato from '../../assets/tomato.png';

const SmallCardList = () => {
  const iconsData = [
    { src: tomato, alt: 'carrot', text: 'Carrot' },
    { src: tomato, alt: 'drumstick bite', text: 'Drumstick' },
    { src: tomato, alt: 'apple', text: 'Apple' },
    { src: tomato, alt: 'fish', text: 'Fish' },
    { src: tomato, alt: 'orange', text: 'Orange' },
   
  ];

  return (
<div className="small_cards icons d-flex flex-wrap justify-content-center align-items-center col-12 p-0">
  {iconsData.map((card, index) => (
    <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 text-center m-2 p-0 d-inline-block">
      {/* Adjust col-* classes based on your preference */}
      <div className="col  p-2 rounded-9" style={{backgroundColor:"#F3F3F3", }} >
        <img
          src={card.src}
          alt={card.alt}
          className="icon-background rounded"
          style={{ width: '70px', height: '70px', margin: '0' }}
        />
        <p className="mt-2">{card.text}</p>
      </div>
    </div>
  ))}
</div>


  
  );
};

export default SmallCardList;