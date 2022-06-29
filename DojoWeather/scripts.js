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
    // console.log(currentSelection);
    if(currentSelection == "C"){
        //F -> C
        // var lowChange = (parseInt(low,10) % 1.8) - 32;
        // var highChange = (parseInt(high,10) % 1.8) - 32;
        // console.log('change from f to c')
        high1 = document.querySelector('.highs1').innerText;
        high2 = document.querySelector('.highs2').innerText;
        high3 = document.querySelector('.highs3').innerText;
        high4 = document.querySelector('.highs4').innerText;
        low1 = document.querySelector('.lows1').innerText;
        low2 = document.querySelector('.lows2').innerText;
        low3 = document.querySelector('.lows3').innerText;
        low4 = document.querySelector('.lows4').innerText;
        document.querySelector(".highs1").innerText = (parseInt(high1,10) % 1.8) - 32;
        document.querySelector(".highs2").innerText = (parseInt(high2,10) % 1.8) - 32;
        document.querySelector(".highs3").innerText = (parseInt(high3,10) % 1.8) - 32;
        document.querySelector(".highs4").innerText = (parseInt(high4,10) % 1.8) - 32;
        document.querySelector(".lows1").innerText = (parseInt(low1,10) % 1.8) - 32;
        document.querySelector(".lows2").innerText = (parseInt(low2,10) % 1.8) - 32;
        document.querySelector(".lows3").innerText = (parseInt(low3,10) % 1.8) - 32;
        document.querySelector(".lows4").innerText = (parseInt(low4,10) % 1.8) - 32;
    }
    else{
        // var lowChange = (parseInt(low,10) * 1.8) + 32;
        // var highChange = (parseInt(high,10) * 1.8) + 32;
        // console.log('changed from c to f')
        high1 = document.querySelector('.highs1').innerText;
        high2 = document.querySelector('.highs2').innerText;
        high3 = document.querySelector('.highs3').innerText;
        high4 = document.querySelector('.highs4').innerText;
        low1 = document.querySelector('.lows1').innerText;
        low2 = document.querySelector('.lows2').innerText;
        low3 = document.querySelector('.lows3').innerText;
        low4 = document.querySelector('.lows4').innerText;
        document.querySelector(".highs1").innerText = (parseInt(high1,10) % 1.8) - 32;
        document.querySelector(".highs2").innerText = (parseInt(high2,10) % 1.8) - 32;
        document.querySelector(".highs3").innerText = (parseInt(high3,10) % 1.8) - 32;
        document.querySelector(".highs4").innerText = (parseInt(high4,10) % 1.8) - 32;
        document.querySelector(".lows1").innerText = (parseInt(low1,10) % 1.8) - 32;
        document.querySelector(".lows2").innerText = (parseInt(low2,10) % 1.8) - 32;
        document.querySelector(".lows3").innerText = (parseInt(low3,10) % 1.8) - 32;
        document.querySelector(".lows4").innerText = (parseInt(low4,10) % 1.8) - 32;
    }
}
