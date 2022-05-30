import React from  "react";
import '../components/cssfiles/Test.css'
import Testdata from '../components/Testdata.js'
import {CalResult} from '../components/CalResult'


const Test=()=>{

    const [index,setIndex]=React.useState(0)
    const [status,setStatus]=React.useState(0)
    const [result,setResult]=React.useState("")
    const[bgclr,setBgclr]=React.useState({one:"rgba(79, 43, 163, 0.8)",two:"rgba(79, 43, 163, 0.8)",three:"rgba(79, 43, 163, 0.8)"})
     
    const handleNext=()=>{
        const indexxx=index+1;
        setIndex(indexxx);
        setBgclr({one:"rgba(79, 43, 163, 0.8)",two:"rgba(79, 43, 163, 0.8)",three:"rgba(79, 43, 163, 0.8)"})
        
    }
    const handlePrev=()=>{
        const indexxx=index-1;
        setIndex(indexxx);
    }
    function handleResult(e,arg){
        const string =result +arg;
        setResult(string)
        console.log(string)
        if(arg==='a'){
        setBgclr({one:'rgb(226, 47, 107)'})
        }
        else if(arg==='b'){
            setBgclr({two:'rgb(226, 47, 107)'})
            }
        else 
        {
                setBgclr({three:'rgb(226, 47, 107)'})
        }
        if(index<((Testdata.length)-1)){
            setTimeout(()=>handleNext(),1000)
        }

    }
    const handleSubmit=()=>{
        setStatus(3)
    }


    
    return (
    <div className="test-cont"> 
    {
    status===0 ?
    <div className="testbegin">
    <img src="https://i.pinimg.com/originals/59/4d/e0/594de05da3f11c96d2e2c288cf72ff57.gif"/>
    
    <div className="test">
    <h1 className="text12">
         Uncertain about your Mental Health ? 
     </h1>
     <h3 className="text12">
        Take this test to clear your doubts.<br/>
        <p>*Please Note that this test is not a clinical diagnostic tool.It is based on the close study on active depression cases.
            Psycological disorders can only be cured by professional guidance.This is a simple prediction tool to make you aware of your mental health .
        </p>
     </h3>

     <button onClick={()=>setStatus(1)} className="button3">Start</button>
     </div>
     </div>
    : 
    status===1?
        <div className="testwrap" >

            <h1 className="text11" style={{"font-size":"45px","margin-top":"-200px", }}>{Testdata[index].q}</h1>
                <button onClick ={(e)=>handleResult(e,'a')} className="button1" style={{ "background": bgclr.one,"margin-top":"-750px","width":"300px","justify-self":"center"}}>{Testdata[index].a}</button><br/>
                <button onClick ={(e)=>handleResult(e,'b')} className="button1"  style={{"background": bgclr.two,"margin-top":"-750px", "width":"300px","justify-self":"center"}}>{Testdata[index].b}</button><br/>
                <button onClick ={(e)=>handleResult(e,'c')} className="button1"  style={{"background": bgclr.three,"margin-top":"-550px", "width":"300px","justify-self":"center"}}>{Testdata[index].c}</button>
                {
                index===0? 
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
        :
        <div className="result">
            <h2>Your test analysis shows that: </h2>
            <p>{CalResult(result)}</p>
        </div>

        }
     </div> );
};

export default Test;



