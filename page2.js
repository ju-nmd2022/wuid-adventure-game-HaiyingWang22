let T =document.getElementById('tool');           
let C = document.getElementById("Carpet");
let O = 1;
let armchair = document.getElementById("chair");
chair.onclick=function()
{
    if (confirm("Want to sit down for a break?") )
    {
        if (confirm("It looks like there's something under the carpet. Do you want to check?") )
        {
            
            C.timer=setInterval('clear()', 50); //.timer Connecting setInterval to elements
            alert("Found an entrance to the basement. Go down and check it out. \nMaybe the bomb is down there.")
            C.onclick=function()
            {
                window.location.replace("page3.html");
            }
            chair.onclick=function()
            {
                alert('Go see the basement entrance!')
            }
            sessionStorage.setItem("chair1", '1');
        }                        
    }
}
if(sessionStorage.getItem("chair1")!= null) 
{
    C.timer=setInterval('clear()', 50); //.timer Connecting setInterval to elements
    C.onclick=function()
    {
        window.location.replace("page3.html");
    }
    chair.onclick=function()
    {
        alert('Go see the basement entrance!')
    }
}
function clear()
{
    if(O >=0)
    {
        C.style.opacity= O;
        O = O - 0.1;
    }
}                              
function empty()
{
    alert("This box is empty!")
}
function idcard()
{
    let T =document.getElementById('tool');
    let A =document.getElementById('box5');
    var idcard = new Image;
    idcard.src = 'idcard.png';
    idcard.className='ID';
    idcard.addEventListener("click", function()
    {
        alert( 'ID card \nName: Winne. XI \nDate of birth: 15.6.1953  \nGender: Male');
    });
    sessionStorage.setItem("toolicon3", '1');
    T.appendChild(idcard);
    
    A.innerHTML="<button onclick='empty()'></button>"
    
    
}
if(sessionStorage.getItem("toolicon3") != null)
{
    idcard();
}


function Dice()
{
    let T =document.getElementById('tool');
    let A =document.getElementById('box4');
    var dice = new Image;
    dice.src = 'dice.png';
    dice.className='dice';
    dice.addEventListener("click", function()
    {
        alert(randomNum(1,6));
    });
    sessionStorage.setItem("toolicon2", '1');
    T.appendChild(dice);
    
    A.innerHTML="<button onclick='empty()'></button>"
}
if(sessionStorage.getItem("toolicon2") != null)
{
    Dice();
}
function randomNum(minNum,maxNum)
{ 
    switch(arguments.length)
    { 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
            break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
        default: 
            return 0; 
            break; 
    } 
}
if(sessionStorage.getItem("toolicon1")!= null)
{
    var toolicon = new Image;
    toolicon.src = 'tools.png';
    toolicon.className ='tools';
    toolicon.addEventListener("click", function()
    {
        alert( 'Necessary equipment for bomb dispos');
    });
    sessionStorage.setItem("toolicon1", '1');
    T.appendChild(toolicon);
} 
            