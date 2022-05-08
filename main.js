window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(inicio)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
}


function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2
  

  //Para descobrir o topo da seção 

  const sectionTop = section.offsetTop
  

  const sectionHeight = section.offsetHeight
  

    //Passou da Linha???
    const sectionTopReachOrPassedTargetLine =targetLine >= sectionTop 


  //onde termina
  const sectionEndAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo??
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  
  //LIMITES DA SEÇÃO  
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  console.log(sectionBoundaries)

  //Const com o menu
  const id = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${id}]`)


  if(sectionBoundaries) {
    menuElement.classList.add('active')
  } else{
    menuElement.classList.remove('active')
  }
}


























function showNavOnScroll(){
  if(scrollY > 0 ){
    navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 575 ){
    bottomToTopButton.classList.add('show')
    } else {
      bottomToTopButton.classList.remove('show')
    }
}


function onClickopen(){
  document.body.classList.add('menu-expanded')
}

function onClickclose(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 600,
}).reveal(`#inicio,
#inicio img,
 #inicio .stats,
  #services,
   #services header,
    #services .card,
    #about,
    #about header,
    #about content,
    #contact,
    #contact header,
    #contact .content,
    #contact .content img`)