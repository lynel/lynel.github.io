'use strict';
function workTabs(){
  var workSections = document.querySelectorAll( '.work > div' ),
      i = 0,
      interactiveTab = document.querySelector( '.interactive-tab' ),
      layoutTab = document.querySelector( '.layout-tab' ),
      logoDesignTab = document.querySelector( '.logo-design-tab' ),
      illustrativeTab = document.querySelector( '.illustrative-tab' ),
      animationTab = document.querySelector( '.animation-tab' ),
      body = document.body,
      footer = document.querySelector( 'footer' ),
      work = document.querySelector( 'nav li:nth-child( 2 )' );
  
  for( i; i < workSections.length; i++ ){
    workSections[ i ].classList.remove( 'dsp-block' );
    workSections[ i ].classList.add( 'dsp-none' );
  }    

  work.setAttribute( 'style', 'color:#f58' );
  body.classList.add( 'scroll' );
  footer.classList.add( 'solid' );
  
  switch( true ){
    case this.classList.contains( 'interactive' ):
      interactiveTab.classList.add( 'dsp-block' );
      break;
    case this.classList.contains( 'layout' ):
      layoutTab.classList.add( 'dsp-block' );
      break;
    case this.classList.contains( 'logo-design' ):
      logoDesignTab.classList.add( 'dsp-block' );
      break;    
    case this.classList.contains( 'illustrative' ):
      illustrativeTab.classList.add( 'dsp-block' );
      break;           
    case this.classList.contains( 'animation' ):
      animationTab.classList.add( 'dsp-block' );
      break;           
  }  
}

function showTab(){
  var body = document.body,
      mainSections = document.querySelectorAll( 'main section' ),
      i = 0,
      skills = document.querySelector( '.skills' ),
      work = document.querySelector( '.work' ),
      contact = document.querySelector( '.contact' ),
      footer = document.querySelector( 'footer' ),
      workSections = document.querySelectorAll( '.work > div' ),
      tiles = document.querySelector( '.tiles' ),
      workTab = document.querySelector( 'nav li:nth-child( 2 )' );
  
  workTab.setAttribute( 'style', 'color:inherit' );
  
  for( i; i < mainSections.length; i++ ){
    mainSections[ i ].classList.remove( 'dsp-block' );
    mainSections[ i ].classList.add( 'dsp-none' );
  }
  
  for( i = 0; i < workSections.length; i++ ){
    workSections[ i ].classList.remove( 'dsp-block' );
    workSections[ i ].classList.add( 'dsp-none' );
  }  

  
  switch( this.textContent ){
    case 'skills':
      body.classList.remove( 'large' );
      body.classList.remove( 'work-tab' );
      body.classList.add( 'scroll' );
      skills.classList.remove( 'dsp-none' );
      skills.classList.add( 'dsp-block' );
      footer.classList.add( 'solid' );
      break;
    case 'work':
      workTab.setAttribute( 'style', 'color:#f58' );
      body.classList.remove( 'large' );
      body.classList.add( 'work-tab' );
      body.classList.remove( 'scroll' );
      work.classList.remove( 'dsp-none' );
      work.classList.add( 'dsp-block' );
      footer.classList.remove( 'solid' );
      tiles.classList.remove( 'dsp-none' )
      break;
    case 'contact':
      body.classList.remove( 'work-tab' );
      body.classList.remove( 'scroll' );
      contact.classList.remove( 'dsp-none' );
      contact.classList.add( 'dsp-block' );
      footer.classList.remove( 'solid' );
      break;      
  }    
}

function start(){
  var navItems = document.querySelectorAll( 'header li' ),
      i = 0,
      tileItems = document.querySelectorAll( '.tiles > div' );
  
  for( i; i < navItems.length; i++ ){
    navItems[ i ].addEventListener( 'click', showTab );
  }
  
  for( i = 0; i < tileItems.length; i++ ){
    tileItems[ i ].addEventListener( 'click', workTabs );
  }  
}
start();