document.addEventListener('scroll',reveal);
const login = document.querySelector('#login');
const sigin = document.querySelector('#sigin');
function _show()
{
   login.classList.add('show');
   login.classList.remove('hide');

   
}

function _show1()
{
   sigin.classList.add('show');
   sigin.classList.remove('hide');
}

function _hide1()
{
   sigin.classList.remove('show');
   sigin.classList.add('hide');
}

function _hide()
{
   login.classList.remove('show');
   login.classList.add('hide');

  
}

function reveal()
{
    const menuBar = document.querySelector('#navbar');
    const menuBarText = document.querySelectorAll('.txt');
    const reveals = document.querySelectorAll('.section_not_visible');
    menuBar.style.background = "white";
    const h_2 = document.querySelector('#h_2');
    h_2.style.color = "black";

    for(let i = 0; i< menuBarText.length; i++)
    {
        menuBarText[i].style.color = "black";
    }

   
    for(let i = 0; i< reveals.length; i++)
{
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 200;
    document.querySelector(".social").style.display="inline";
    if(revealTop < windowHeight - revealPoint)
    {
     
        reveals[i].classList.add('section_visible');
    }
    else
    {
      
        reveals[i].classList.remove('section_visible');
    }
}
}