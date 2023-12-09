let click = 0;
let timer1;
let button=document.getElementById("mybutton");
button.onclick = function() {
        if (click == 0) timer1=setTimeout(showMessage,10000);
        click+=1;
        button.innerHTML= "Clicks: " + click ;



        
}


function showMessage() {
    
    button.disabled=true;
    document.getElementById("p1").innerHTML = `Congratulations! You clicked ${click} times`;
    button.innerHTML= "Clicks: 0"  ;
    

}

document.getElementById("button2").onclick= function () {
    button.disabled=false;
    click=0;
    clearTimeout(timer1);
}

