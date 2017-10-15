'use strict';
function transition3() {
  var body = document.body,
      workTab = document.querySelector( '.workTab' ),
      blackout = document.querySelector( '.blackout' ),
      s1 = document.querySelectorAll( '.s1' ),
      s2 = document.querySelectorAll( '.s2' ),
      s3 = document.querySelectorAll( '.s3' ),
      s4 = document.querySelectorAll( '.s4' ),
      s5 = document.querySelectorAll( '.s5' ),
      main = document.querySelector( 'main' ),
      i = 0;
  
  blackout.classList.remove( 'smaller' );
  main.classList.remove( 'black' );
  body.classList.remove( 'black' );
  
  if( !body.classList.contains( 'work-item' ) ){
    body.classList.add( 'work-item' );
    body.classList.remove( 'wk' );
    workTab.classList.remove( 'vis' );
  }
  else {
    body.classList.remove( 'work-item' );
    body.classList.remove( 'wk' );
    workTab.classList.remove( 'vis' );
  }
  
  if( this.id === 'interactive' ){
    for( i; i < s1.length; i++ ){
      s1[ i ].style = "display:flex";
    }
    i = 0;
    for( i; i < s2.length; i++ ){
      s2[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s3.length; i++ ){
      s3[ i ].style = "display:none";
    }    
    i = 0;
    for( i; i < s4.length; i++ ){
      s4[ i ].style = "display:none";
    }     
    i = 0;
    for( i; i < s5.length; i++ ){
      s5[ i ].style = "display:none";
    }     
  }  
  
  if( this.id === 'design' ){
    blackout.classList.add( 'smaller' );
    main.classList.add( 'black' );
    body.classList.add( 'black' );
    for( i; i < s1.length; i++ ){
      s1[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s2.length; i++ ){
      s2[ i ].style = "display:flex";
    }
    i = 0;
    for( i; i < s3.length; i++ ){
      s3[ i ].style = "display:none";
    }    
    i = 0;
    for( i; i < s4.length; i++ ){
      s4[ i ].style = "display:none";
    }       
    i = 0;
    for( i; i < s5.length; i++ ){
      s5[ i ].style = "display:none";
    }      
  }
  
  if( this.id === 'emoji' ){
    for( i; i < s1.length; i++ ){
      s1[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s2.length; i++ ){
      s2[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s3.length; i++ ){
      s3[ i ].style = "display:flex";
    }        
    i = 0;
    for( i; i < s4.length; i++ ){
      s4[ i ].style = "display:none";
    }       
    i = 0;
    for( i; i < s5.length; i++ ){
      s5[ i ].style = "display:none";
    }     
  }
  
  if( this.id === 'ill' ){
    blackout.classList.add( 'smaller' );
    main.classList.add( 'black' );
    body.classList.add( 'black' );
    for( i; i < s1.length; i++ ){
      s1[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s2.length; i++ ){
      s2[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s3.length; i++ ){
      s3[ i ].style = "display:none";
    }        
    i = 0;
    for( i; i < s4.length; i++ ){
      s4[ i ].style = "display:flex";
    }
    i = 0;
    for( i; i < s5.length; i++ ){
      s5[ i ].style = "display:none";
    }     
  }
  
  if( this.id === 'logo' ){
    for( i; i < s1.length; i++ ){
      s1[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s2.length; i++ ){
      s2[ i ].style = "display:none";
    }
    i = 0;
    for( i; i < s3.length; i++ ){
      s3[ i ].style = "display:none";
    }    
    i = 0;
    for( i; i < s4.length; i++ ){
      s4[ i ].style = "display:none";
    }     
    i = 0;
    for( i; i < s5.length; i++ ){
      s5[ i ].style = "display:flex";
    }     
  }    
}
function transition2() {
  var skills = document.getElementById( 'skills' ),
      work = document.getElementById( 'work' ),
      aside = document.querySelector( 'aside' ),
      navy = document.querySelector( '[ src *= "navy"]' ),
      mash = document.querySelector( '[ src *= "mash"]' ),
      skillBox = document.querySelector( '.skillBox' ),
      workTab = document.querySelector( '.workTab' ),
      blackout = document.querySelector( '.blackout' ),
      main = document.querySelector( 'main' ),
      body = document.querySelector( 'body' );
  
  blackout.classList.remove( 'smaller' );
  main.classList.remove( 'black' );
  body.classList.remove( 'black' );
  
  if( !work.classList.contains( 'sel' ) ){
    skills.classList.remove( 'sel' );
    work.classList.add( 'sel' );
    navy.classList.add( 'dark' );
    mash.classList.add( 'dark' );
    mash.classList.remove( 'vis' );
    aside.classList.add( 'alt2' );
    aside.classList.remove( 'vis' );
    skillBox.classList.remove( 'skills' );
    workTab.classList.add( 'vis' );
    body.classList.add( 'wk' );
    body.classList.remove( 'work-item' );
  }
  else if( work.classList.contains( 'sel' ) ) {
    skills.classList.remove( 'sel' );
    work.classList.remove( 'sel' );
    navy.classList.remove( 'dark' );    
    mash.classList.remove( 'dark' );    
    mash.classList.remove( 'vis' );    
    aside.classList.remove( 'alt2' );
    aside.classList.remove( 'vis' );
    skillBox.classList.remove( 'skills' );
    workTab.classList.remove( 'vis' );
    body.classList.remove( 'wk' );
    body.classList.remove( 'work-item' );
  } 
}

function transition() {
  var skills = document.getElementById( 'skills' ),
      work = document.getElementById( 'work' ),
      aside = document.querySelector( 'aside' ),
      navy = document.querySelector( '[ src *= "navy"]' ),
      mash = document.querySelector( '[ src *= "mash"]' ),
      skillBox = document.querySelector( '.skillBox' ),
      workTab = document.querySelector( '.workTab' ),
      blackout = document.querySelector( '.blackout' ),
      main = document.querySelector( 'main' ),
      body = document.body;
  
  blackout.classList.remove( 'smaller' );
  main.classList.remove( 'black' );
  body.classList.remove( 'black' );
  
  if( !skills.classList.contains( 'sel' ) ){
    work.classList.remove( 'sel' );
    skills.classList.add( 'sel' );
    navy.classList.add( 'dark' );
    mash.classList.add( 'vis' );
    aside.classList.add( 'alt' );
    aside.classList.remove( 'alt2' );
    aside.classList.add( 'vis' );
    skillBox.classList.add( 'skills' );
    workTab.classList.remove( 'vis' );
    body.classList.remove( 'work-item' );
  }
  else if( skills.classList.contains( 'sel' ) ) {
    work.classList.remove( 'sel' );
    skills.classList.remove( 'sel' );
    navy.classList.remove( 'dark' );    
    mash.classList.remove( 'vis' );    
    aside.classList.remove( 'alt' );
    aside.classList.remove( 'alt2' );
    aside.classList.remove( 'vis' );
    skillBox.classList.remove( 'skills' );
    workTab.classList.remove( 'vis' );
    body.classList.remove( 'work-item' );
  } 
}

function start() {
  var skills = document.getElementById( 'skills' ),
      work = document.getElementById( 'work' ),
      workTabDivs = document.querySelectorAll( '.workTab > div' ),
      i = 0;
  
  skills.addEventListener( 'click', transition );
  work.addEventListener( 'click', transition2 );
  
  for( i; i < workTabDivs.length; i++ ){
    workTabDivs[ i ].addEventListener( 'click', transition3 );
  }
}
start();
