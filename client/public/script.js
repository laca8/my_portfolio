function toggleMenu() {
  const menu = document.getElementById('menu')
  const header = document.getElementById('header') 
if(menu){
menu.addEventListener('click',function(){
this.classList.toggle('fa-times')
header.classList.toggle('toggle')
})
}
if(window){
window.addEventListener('scroll load',function(){
menu.classList.remove('fa-times')
header.classList.remove('toggle')
})
}
}
toggleMenu()