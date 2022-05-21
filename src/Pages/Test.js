import React from  "react";
import '../components/cssfiles/Test.css'

const Test=()=>{
    return <div className="test-cont"> 
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

     <button className="button3">Start</button>
     </div>
     </div>;
};

export default Test;