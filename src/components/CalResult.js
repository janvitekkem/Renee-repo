
 export function CalResult(result){
    var data=result
    var ac=countstr(data,'a'),bc=countstr(data,'b'),cc=countstr(data,'c')
    console.log(ac)
    console.log(bc)
    console.log(cc)
        if((ac>bc && bc>=cc) || (ac>cc && cc>=bc) || (bc ===(ac+1)) ){
            return("You are not depressed.Your signs and symptoms show healthy functioning of mind .If you suspect you are in Depression because of your gloomy mood it might indicate just a passing phase of Mood Depression which is temporary .However, it would be advised to seek medical attention in case you find the questioned symptoms possibly growing on you.")
        }
        else if((bc>ac&&ac>=cc) || (bc>cc&&cc>=ac) ){
            return("You might be having Mood Depression and not clinical Depression.This could be a tough phase in your life , a period of sad events one following another. People often confuse depressing period with suffering from depression . Feeling down for more than half the days or nearly every day over the past two weeks suggests depression else it is said to be Mood Depression which is temporary. Sudden change in lifestyle or loss of important people , other factors might push you to edge ,which may not result in depression but a sad phase. It is highly advised to seek medical attention before this turns into serious matter of concern.")
          }
        else if((cc>ac && ac>=bc) || (cc>bc && bc>=ac ) || (bc ===(cc+1)) ){            
            return("You might be in depression.Being in depression is one of the most common mental health disorders in world. There is nothing to worry about. It's completely normal to feel that way ,although talking to someone about it should be your first step of overcoming it. It is highly advised to seek medical attention as soon as possible. Sharing your problem or about your mental state with someone does not make you seem weak of defective but stronger. Know that you are valuable hence, give yourself a chance to happy life again.")
        }
        else if (ac===0 && bc===0 && cc===0 ){
            return("It seems you have not answered any questions of Test")
        }
}

function countstr(word,str){
    var count=0
    for(var i=0;i<word.length;i++){
       if(word[i]===str){
           count=count+1
       }
       else
       continue
    }
    return count
}
