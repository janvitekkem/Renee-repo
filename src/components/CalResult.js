
 export function CalResult(result){
    var data=result
    var ac=countstr(data,'a'),bc=countstr(data,'b'),cc=countstr(data,'c')
    console.log(ac)
    console.log(bc)
    console.log(cc)
        if(ac>bc && bc>=cc || ac>cc && cc>=bc){
            return("Not Depressed")
        }
        else if(bc>ac&&ac>=cc || bc>cc&&cc>=ac ){
            return("Might Depressed")
          }
        else if(cc>ac && ac>=bc || cc>bc && bc>=ac ){            
            return("Depressed")
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
