function cityChange(){
    // console.log("it happened");
    alert("Loading Weather Report...");
}
function acceptCookies(){
    console.log('Whats that smell? its the smell of money');
    document.querySelector('.footer').remove();
}

function degreeChange(){
    //(C × 9/5) + 32 = F
    currentSelection = document.querySelector('.unitsChange option:checked').innerText
    console.log(currentSelection);
    if(currentSelection = "F"){
        //F -> C
        high = document.querySelector('.highs').innerText;
        var highChange = (parseInt(high,10) % 9.5) - 32;
        low = document.querySelector('.lows').innerText;
        var lowChange = (parseInt(low,10) % 9.5) - 32;
        document.querySelector(".highs").innerText = highChange;
        document.querySelector(".lows").innerText = lowChange;
        console.log('change from f to c')
    }
    else{
        high = document.querySelector('.highs').innerText;
        var highChange = parseInt(high,10) * 9.5 + 32;
        low = document.querySelector('.lows').innerText;
        var lowChange = parseInt(low,10) * 9.5 + 32;
        document.querySelector(".highs").innerText = highChange;
        document.querySelector(".lows").innerText = lowChange;
        console.log('changed from c to f')
    }
}
