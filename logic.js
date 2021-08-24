function unlock() {
    const psw = document.querySelector('input[type="password"]').value;
    const correctPsw = "TrustNo1";
    if (psw !== correctPsw) {



    } else {
        //const rocky = document.querySelector('input[type="button"]').value


        document.querySelectorAll('input[type="checkbox"]').forEach(x => x.disabled = false);
        document.querySelectorAll('input[type="range"]').forEach(x => x.disabled = false)
        document.querySelectorAll('input[type="button"]').forEach(x => x.disabled = true);
    }
}

/*function move(){

    let nul = document.getElementById("checked1").checked;
    let one = document.getElementById("checked2").checked;
    let two = document.getElementById("checked3").checked;
    let three = document.getElementById("checked4").checked;
    let four = document.getElementById("checked5").checked;
    let five = document.getElementById("checked6").checked;
    let range_one = document.getElementById("range1").value;
    let range_two = document.getElementById("range2").value;
    let range_three = document.getElementById("range3").value;
    let range_four = document.getElementById("range4").value;
    let range_five = document.getElementById("range5").value;
    let range_six = document.getElementById("range6").value;
    let y= false;
    let max = "100";

    if (nul === y && range_one === max)  {
         if(one === y && range_two === max){
             if(two === y && range_three === max){
                 if(three === y && range_four === max){
                     if(four === y && range_five === max){
                         if(five === y && range_six === max){
                             //document.querySelectorAll('input[type="button"]').forEach(x => x.disabled = false);
                             let rocket = document.querySelector(".rocket");
                             let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
                             rocket.style.left = 10 + x + "px";
                            }
                        }

                     }


                 }
         }
    }

    //let rocket = document.querySelector(".rocket");
    //let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
    //rocket.style.left = 10 + x + "px";

}*/

function move(){
    let allBoxesAndLevers = true;
    for(let element of boxesAndLevers){
        if(element.type == "checkbox"){
            if(element.checked != true){
                allBoxesAndLevers = false;
            }
        }else {
            if(element.value != element.max){
                allBoxesAndLevers = false;
            }
        }
    }
}
function after() {
    const h = false;
    const x = document.querySelectorAll('input[type="checkbox"]')
    if( x !== h){

    }
    const leve = "80"
    let y = document.querySelectorAll('input[type="range"]')
    if (y !== leve){

    }

}