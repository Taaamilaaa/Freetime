'use client'

// import React from 'react';
// import Slider from 'react-slick';
// import { NextArrow, PrevArrow } from 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function HeroSlider () {
//   const settings = {
//     arrows: true,
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: false,
//     nextArrow: <NextArrow className=""/>,
//     prevArrow: <PrevArrow className=""/>,
//   };

//   return (
//     <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
//       <Slider {...settings} className='flex'>
//         <div>
//           <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]' />
//         </div>
//         <div>
//           <img src='/images/1521.jpg' alt="dvslvdis" className='w-[100%] h-[612px]' />
//         </div>
//         <div>
//           <img src='/images/O6OATF0.jpg' alt="dvslvdis" className='w-[100%] h-[612px]' />
//         </div>
//         <div>
//           <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]' />
//         </div>
//         <div>
//           <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]' />
//         </div>
//         <div>
//           <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]' />
//         </div>
//       </Slider>
//     </div>
//   );
// }





import Slider from 'react-slick';
import slickNext from 'react-slick';
import slickPrev from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow() {
  
  return (
    <button
      className={'w-[60px] h-[62px] bg-[url("/images/icons/main-sl-left.png")] bg-no-repeat bg-contain rotate-[180deg] absolute z-[5] right-[60px] top-[215px]'}
     
      onClick={slickNext}
    />
  );
}

function SamplePrevArrow() {
  
  return (
    <button
      className={'w-[60px] h-[62px] bg-[url("/images/icons/main-sl-left.png")] bg-no-repeat bg-contain absolute z-[5] left-[60px] top-[215px]'}
      
      onClick={slickPrev}
    />
  );
}


export default function HeroSlider({}) {
  const settings = {
    arrows: true,
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
 
    
    // autoplay: true,
    // autoplaySpeed:5000,
      
    };

 
  return (
      <div className='absolute top-[0px] left-[0px] w-[100%] h-[100%] z-[-1]'>
       
        <Slider {...settings} className='flex'>
          <div>
             <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]'/>
          </div>
          <div>
             <img src='/images/1521.jpg' alt="dvslvdis" className='w-[100%] h-[612px]'/>
          </div>
          <div>
             <img src='/images/O6OATF0.jpg' alt="dvslvdis" className='w-[100%] h-[612px]'/>
          </div>
          <div>
            <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]'/>
          </div>
          <div>
             <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]'/>
          </div>
          <div>
             <img src='/images/plumber-228010_1920.jpg' alt="dvslvdis" className='w-[100%] h-[612px]'/>
          </div>
        </Slider>
      </div>
    );
}



