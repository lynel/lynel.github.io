'use strict';
function remove( e ){
  e.classList.add( 'display-none' );
}
function add( e ){
  e.classList.remove( 'display-none' );
}
function start(){
  var phaseOne = document.getElementById( 'grid' ),
      phaseTwo = document.getElementById( 'face-two');
  
//  setTimeout( remove, 1, phaseOne );
//  setTimeout( add, 1, phaseTwo );
}

start();