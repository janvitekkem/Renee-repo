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

// { <div className="wrap ">

            
// <img className="sw1" src="https://cdn4.vectorstock.com/i/thumb-large/59/13/account-or-profile-settings-icon-vector-30285913.jpg">
//     {/* {props.picture} */}

// </img>
// <div className="sw2">
//     {/* {props.story} */}
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamLorem
//      ipsum dolor sit amet, consectetur adipiscing elit.
//      AliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamLo
//      rem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
// </div>

// <div className="sw3">
//     {/* {props.author} */}
//     ~abc
// </div>
// </div> }


// const Swipercard=({slides}) =>{

//     return(
//         <>
//         {Swiperdata.map((slide,index)=>{
//             return(

//                 <div className="wrap">
//                     <img className="sw1" src={slide.picture} alt="image"/>
//                     <div className="sw2">
//                         {slide.story}
//                     </div>
//                     <div className="sw3">
//                         {slide.author}
//                     </div>
//                 </div>
//             )
//         })}
//         </>
//     );
// };