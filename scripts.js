
document.addEventListener('DOMContentLoaded', function(){
  if(window.AOS) AOS.init({duration:700,once:true,offset:120});
  // simple mobile nav toggle (if needed)
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-links');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }
});
