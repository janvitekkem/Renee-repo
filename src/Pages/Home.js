import React from "react";
import { GiBrain } from "react-icons/gi";
import {SiGooglechat} from "react-icons/si"
import {FaHandsHelping} from "react-icons/fa"
import {GiJumpAcross} from "react-icons/gi"
import {FiPhoneCall} from "react-icons/fi"
import {GiNightSleep} from "react-icons/gi"
import {MdNoDrinks} from "react-icons/md"
import {MdOutlinePets} from "react-icons/md"
import Carousel from '../carousel/Carousel.js'
import '../components/cssfiles/Home.css';
import {Link } from 'react-router-dom'
import Swipercard from '../carousel/Swipercard.js'



const Home=()=>{
    return (

    <div className="homi">
        <div className="div1">
            <h1 className="text11">DEPRESSED ?</h1>
            <h2 className="text12">Time to get your Mind Healthy ..</h2>
            <div className="text13">
            <h3 className="text13">Depression is a common mental disorder which can occur to anyone .It is not just feeling sad or fed up 
            for a few days, rather it's long lasting and affects ones's daily life cycle.During depression a person feels constant wave of
            saddness, loss of interest in regular activities, has negative thought procedure regarding any or all life events.Cause for depression
            might be psychological, social or ..
            </h3><br/>
            <Link to="about" target="_blank" class="button1" role="button">Read more..</Link>
            </div>
        </div>

        <div className="div2">
        </div>



        <div className="cards">

        <div className="div3">
            <h1 className="text34">In depression or just depressed ? </h1>
            <div className="inline">
            <h2 className="text35"><GiBrain className="icon"/>Test your Mind</h2>
            </div><br/>
            <Link to="test" target="_blank" className="button2">Test your Mind</Link> 
        </div>
        <div className="div4">
        <div class="static-txt">I'm </div>
            <ul class="dynamic-txts">
             <li><span>Healthy...</span></li>
             <li><span>Happy...</span></li>
             <li><span>Important...</span></li>
             <li><span>Valued...</span></li>
            </ul>            
        </div>
        <div className="div34">
            <h1 className="text34">Consult verified Psychiatrists </h1>
            <div className="inline">
            <h2 className="text35"><SiGooglechat className="icon"/>Book a session now</h2>
            <br/>
            <Link to="consult" target="_blank" className="button3">Consult</Link> 
            </div>
        </div>
        </div>

        
        
        <div className="divtip">
            <h1 className="t-tips">Tips to deal with Depression</h1>
            <div className="divtip2">

            <div className="wholetip">
            <div className="combi">
            <FaHandsHelping className="icon2"/>
            <h1 className="tiphead">Seek out for help</h1>
            </div>
            <h2 className="tips">Consulting a Psychiatrists on right time is important </h2>
            </div>

            <div className="wholetip">
            <div  className="combi">
            <GiJumpAcross className="icon2"/>
            <h1 className="tiphead">Stay Active Physically</h1>
            </div>
            <h2 className="tips">Excercise has been proven affective against depression</h2>
            </div>

            <div className="wholetip">
            <div  className="combi">
            <FiPhoneCall className="icon2"/>
            <h1 className="tiphead">Communication is the key </h1>
            </div>
            <h2 className="tips">Don't be embarrassed to talk about your mental health </h2>
            </div>

            <div className="wholetip">
            <div  className="combi">
            <GiNightSleep className="icon2"/>
            <h1 className="tiphead">Sleep Well but not more </h1>
            </div>
            <h2 className="tips">Getting no more than 7-8 hours of sleep is healthy </h2>
            </div>

            <div className="wholetip">
            <div  className="combi">
            <MdNoDrinks className="icon2"/>
            <h1 className="tiphead">Avoid Alcohol </h1>
            </div>
            <h2 className="tips">Alcohol comsumption makes our mind dull and inactive </h2>
            </div>

            <div className="wholetip">
            <div  className="combi">
            <MdOutlinePets className="icon2"/>
            <h1 className="tiphead">Be in company </h1>
            </div>
            <h2 className="tips">It's advised to keep company when feeling depressed </h2>
            </div>

            </div>
        </div>
        
        <div className="div5">


        <div className="div5prt1">

        <div className="circle">
        <a className="center">
            <img src="https://us.123rf.com/450wm/tatianastulbo/tatianastulbo2006/tatianastulbo200600093/148763838-young-sad-and-unhappy-woman-sitting-on-the-ground-and-hugs-her-knees-sadness-and-depression-concept-.jpg?ver=6" alt="sitting girl"/>
        </a>
        <a className="deg0">
            <img src="https://cdn.dribbble.com/users/1065420/screenshots/3762357/gwen-sad.gif" alt="sad "/>
            <h3>
                Feeling Sad
            </h3>
        </a>        
        <a className="deg45">
            <img src="https://cdn.dribbble.com/users/1065420/screenshots/3740789/gary-spitting-tea.gif" alt="throw up "/>
            <h3>Loss of Appetite</h3>
        </a>        
        <a className="deg135">
            <img src="https://cdn.dribbble.com/users/1065420/screenshots/3664490/frustrated-gary.gif" alt="frustrated girl"/>
            <h3>Sleep Deprived</h3>
        </a>        
        <a className="deg180">
            <img src="https://cdn.dribbble.com/users/1065420/screenshots/3685827/overworked-gary.gif" alt="low girl"/>
            <h3>Hopelessness</h3>
        </a>        
        <a className="deg225">
            <img src="https://cdn.dribbble.com/users/1065420/screenshots/3723857/gary-trio-of-emotions.gif" alt="moody girl"/>
            <h3>Mood Swings</h3>
        </a>        
        <a className="deg315">
            <img src="https://cdn.dribbble.com/users/338485/screenshots/2033822/bulbito.gif" alt="suicide girl"/>
            <h3>Suicidal Thoughts</h3>
        </a>
        </div>
        <div className="symp">
        <h2>Symptoms of Depression </h2>
        <p>Signs of depression varies from person to person.Every 
            set of symptoms depict different kinds of mental health issues,
            from clinical depression , MDD(Major depressive disorder) to bipolar 
            depression.Some common sign include --
        </p><br/>
        <Link to="/about" target="_blank" className="button2">Read More..</Link>
        </div>
        </div>


        <div className="div5prt2">
            <Carousel/>
        </div>



        <div className="div5prt3">
        <div className="div5-4">
            Help People Around You ..
        </div>
        <div className="div5-6">
            Those suffering from depression might not always seek out 
            for help. Small act of kindness can make a big difference.
            Start up a conversation and let them know you are there 
            for them .Here lists some ways to help others .

            <br/><br/>
             <Link to="about" target="_blank" className="button1">
            Read More..
             </Link>   
        </div>

        <div className="div5-5">
        </div>
        </div>
        </div>


    </div>);

};

export default Home;