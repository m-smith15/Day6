function cityChange(){
    // console.log("it happened");
    alert("Loading Weather Report...");
}
function acceptCookies(){
    console.log('Whats that smell? its the smell of money');
    document.querySelector('.footer').remove();
}

var highDegreeNums = document.querySelectorAll(".high");
console.log(highDegreeNums);

var lowDegreeNums = document.querySelectorAll(".low");
console.log(highDegreeNums);

function degreeChange(){
    //(C × 9/5) + 32 = F
    currentSelection = document.querySelector('.unitsChange option:checked').innerText
    // console.log(currentSelection);
    // default is F, so first will check F -> C 
    if(currentSelection == "C"){
        for(var x=0;x<highDegreeNums.length;x++){
            highDegreeNums[x].innerText = Math.round((parseInt(highDegreeNums[x].innerHTML,10) - 32) * (5/9));
            lowDegreeNums[x].innerText = Math.round((parseInt(lowDegreeNums[x].innerHTML,10) - 32) * (5/9));
        }
    }
    //added this should the option go to C back to F 
    else{
        for(var x=0;x<lowDegreeNums.length;x++){
            highDegreeNums[x].innerText = Math.round((parseInt(highDegreeNums[x].innerHTML,10) * (5/9)) + 32);
            lowDegreeNums[x].innerText = Math.round((parseInt(lowDegreeNums[x].innerHTML,10) * (5/9)) + 32);
        }
    }
}
