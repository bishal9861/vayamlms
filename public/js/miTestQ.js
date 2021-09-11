
let c=document.getElementsByName("val")
//console.log(c)
let allY=[];
let allN=[];
for(let i=0;i<c.length;i++){
    if(i%2==0){
        allY.push(c[i])
    }else{
        allN.push(c[i])
    }
}

for(let i=0;i<allY.length;i++){
    let chooseresult="no"
    allN[i].disabled=false;
    allY[i].disabled=false;
    allY[i].addEventListener("input",(element)=>{
        if(allY[i].checked){
            chooseresult="yes"
            //console.log("yes choose")
            allN[i].disabled=true;
            //console.log(allN[i].disabled)
        }else{
            allN[i].disabled=false;
        }


    })
    allN[i].addEventListener("input",(element)=>{
        if(allN[i].checked){
            chooseresult="no"
            //console.log("no choose")
            allY[i].disabled=true;
            //console.log(allY[i].disabled)
        }else{
            allY[i].disabled=false;
        }


    })
    
    
    
    
}
