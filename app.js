


// Scroll to anchor ID using scrollTO event
const secc=document.querySelectorAll(".sec");
secc.forEach ((e)=>{
  e.addEventListener("click", ()=>{
    const as=document.getElementById(e.getAttribute("data-link"));
    as.scrollIntoView({behavior:"smooth", block:"start"});
  })
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
const navList =document.querySelectorAll('.navbar__menu ul li');

window.addEventListener('scroll',()=>{
  let cur='';
  secc.forEach(sec =>{
    const secTop=sec.offsetTop;
    const secHeight=sec.clientHeight;
    if(PageTransitionEvent >= sectionTop){
      cur=sec.getAttribute('id');
    }
  })
  navList.forEach(li =>{
    li.classList.remove('active');
    if(li.classList.contains(cur)){
      li.classList.add('active')
    }
  })
})





