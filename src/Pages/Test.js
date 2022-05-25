import React from  "react";
import '../components/cssfiles/Test.css'
import Testdata from '../components/Testdata.js'
import {CalResult} from '../components/CalResult'


const Test=()=>{

    const [index,setIndex]=React.useState(0)
    const [status,setStatus]=React.useState(true)
    const [result,setResult]=React.useState("")

     
    const handleNext=()=>{
        const indexxx=index+1;
        setIndex(indexxx);
    }
    const handlePrev=()=>{
        const indexxx=index-1;
        setIndex(indexxx);
    }
    function handleResult(e,arg){
        const string =result +arg;
        setResult(string)
        console.log(string)
    }
    const handleSubmit=()=>{
        var message= CalResult(result);
        console.log(message)
    }


    
    return (
    <div className="test-cont"> 
    {
    status ?
    <div className="testbegin">
    <img src="https://i.pinimg.com/originals/59/4d/e0/594de05da3f11c96d2e2c288cf72ff57.gif"/>
    
    <div className="test">
    <h1 className="text12">
         Uncertain about your Mental Health ? 
     </h1>
     <h3 className="text12">
        Take this test to clear your doubts.
        <p>Please Note that this test is not a clinical diagnostic tool.It is based on the close study on active depression cases.
            Psycological diorders can only be cured by professional guidance.This is a simple prediction tool to make you aware of your mental health .
        </p>
     </h3>

     <button onClick={()=>setStatus(false)} className="button3">Start</button>
     </div>
     </div>
    : 
        <div className="testwrap" >

            <h1 className="text11" style={{"font-size":"45px","margin-top":"-200px", }}>{Testdata[index].q}</h1>
                <button onClick ={(e)=>handleResult(e,'a')} className="button1" style={{"margin-top":"-750px","width":"300px","justify-self":"center"}}> Not at all</button><br/>
                <button onClick ={(e)=>handleResult(e,'b')} className="button1"  style={{"margin-top":"-750px", "width":"300px","justify-self":"center"}}> Few times</button><br/>
                <button onClick ={(e)=>handleResult(e,'c')} className="button1"  style={{"margin-top":"-550px", "width":"300px","justify-self":"center"}}> All the time</button>


                {index===0? 
                    <button onClick={handleNext} style={{"margin-top":"-200px","justify-self":"right"}} className="button2">Next</button>
                    : index===(Testdata.length-1) ?
                    <>
                    <button onClick={handlePrev} style={{"margin-top":"-200px","justify-self":"left"}} className="button2">Previous</button>
                    <button onClick={handleSubmit} style={{"margin-top":"-200px","justify-self":"right"}} className="button2">Submit</button></>
                    :
                    <>
                <button onClick={handlePrev} style={{"margin-top":"-200px","justify-self":"left"}} className="button2">Previous</button>
                <button onClick={handleNext} style={{"margin-top":"-200px","justify-self":"right"}} className="button2">Next</button></>
                }
        </div>

        
        }
     </div> );
};

export default Test;



