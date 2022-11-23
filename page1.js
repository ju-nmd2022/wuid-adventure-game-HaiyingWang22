let T =document.getElementById('tool');
let toolbox = document.getElementById("toolbox");
toolbox.addEventListener("click",function()
{
    var toolicon = new Image;
    toolicon.src = 'tools.png';
    toolicon.className='tools';
    toolicon.addEventListener("click", function()
    {
        alert( 'Necessary equipment for bomb dispos');
    });
    sessionStorage.setItem("toolicon1", '1');
    T.appendChild(toolicon);               
    alert("Successful pick-up of bomb disposal equipment");
    window.location.replace("page2.html");
}); 
      