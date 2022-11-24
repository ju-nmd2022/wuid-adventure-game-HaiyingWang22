let bnt = document.getElementById('bnt');
let TEXT = document.getElementById('TEXT').value;
bnt.onclick=function()
{
    if(document.getElementById('TEXT').value==12345)
    {
        window.location.replace("good ending.html");
    }
    else
    {
        window.location.replace("bad ending.html");
    }
}

let T = document.getElementById('tool');
let info = document.getElementById('computer');

info.onclick=function()
{
    if(sessionStorage.getItem("toolicon3")!= null)
    {
        alert( 'Get Info: The password is five digits');
    }
    else
    {
        alert( 'Requires id card verification');
    }
}

let ladder = document.getElementById('ladder');
ladder.onclick=function()
{
    window.location.replace("page2.html");
}

let pass = document.getElementById('password');
let bomb = document.getElementById('bomb');
let X = document.getElementById('X');

if(sessionStorage.getItem("toolicon1")!= null)
{
    var toolicon = new Image;
    toolicon.src = 'tool.png';
    toolicon.className ='tools';
    toolicon.addEventListener("click", function()
    {
        alert( 'Necessary equipment for bomb dispos');
    });
    T.appendChild(toolicon);
    bomb.onclick = function()
    {
        pass.style.display = "block";
    }
    X.onclick = function()
    {
        pass.style.display = "none";
    }
}
else
{
    alert('You will need to carry the necessary bomb disposal tools');
} 

if(sessionStorage.getItem("toolicon2")!= null)
{
    var dice = new Image;
    dice.src = 'dice.png';
    dice.className='dice';
    dice.addEventListener("click", function()
    {
        alert(randomNum(1,6));
    });
    T.appendChild(dice);
} 
if(sessionStorage.getItem("toolicon3")!= null)
{
    var idcard = new Image;
    idcard.src = 'idcard.png';
    idcard.className='ID';
    idcard.addEventListener("click", function()
    {
        alert( 'ID card \nName: Winne. XI \nDate of birth: 15.6.1953  \nGender: Male');
    });
    T.appendChild(idcard);
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
let time = document.getElementById('time');
time.timer=setInterval('Countdown()', 1000);
if(sessionStorage.getItem("Time Record") != null)
{
    var num = sessionStorage.getItem("Time Record");

}
else
{
    num = 60;
}
function Countdown()
{
    if(num>10)
    {
        time.innerHTML=num;
        
    }
    else if(num<=10 && num>0)
    {
        time.innerHTML = num+"seconds left";
    }
    else
    {
        window.location.replace("bad ending.html");
    }
    num--;
    sessionStorage.setItem("Time Record", num);
}
        