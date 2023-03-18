import React from 'react';
import './Swiper.css';
import Swiperdata from './Swiperdata.js'

const Swipercard=() =>{

    return(
        <>
        {Swiperdata.map((slide,index)=>{
            return(

                <div >
                    <img src={slide.picture} alt="image"/>
                    <div>
                        {slide.story}
                    </div>
                    <div >
                        {slide.author}
                    </div>
                </div>
            )
        })}
        </>
    );
};

export default Swipercard;

