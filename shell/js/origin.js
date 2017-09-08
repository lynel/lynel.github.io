'use strict';
// \\            \ MATH /                                                    //
// \ \ \ \ RETURN TRUE IF NUMBER IS EVEN / / / / / / / / / / / / / / / / / / //
function isEven( n ){
  return n % 2 === 0;
}
// / / / / RETURN TRUE IF NUMBER IS EVEN \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

//\ \ \ \ \ RETURN TRUE IF NUMBER IS ODD / / / / / / / / / / / / / / / / / / //
function isOdd( n ){
  return Math.abs( n % 2 ) === 1;
}
/// / / / / RETURN TRUE IF NUMBER IS ODD \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\
// //            / MATH \                                                    \\


// \\    \ DOCUMENT OBJECT MODEL /                                           //
//\ \ \ \ \ \ \ \ GET ELEMENT BY ID / / / / / / / / / / / / / / / / / / / / / /
function getById( id ){                   // A Shortcut to save time and space
  return document.getElementById( id );
}
/// / / / / / / / GET ELEMENT BY ID \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

// \ \ \ \ \ \ \ \ GET BY SELECTOR / / / / / / / / / / / / / / / / / / / / / //
function getBySelector( selector ){       // A Shortcut to save time and space
  return document.querySelector( selector );
}
// / / / / / / / / GET BY SELECTOR \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

//\ \ \ \ \ \ \ \ \ REMOVE ELEMENT / / / / / / / / / / / / / / / / / / / / / //
function removeElement( element ){
  element.classList.add( 'dsp-none' );
}
/// / / / / / / / / REMOVE ELEMENT \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

//\ \ \ \ \ \ \ \ \ \ ADD ELEMENT / / / / / / / / / / / / / / / / / / / / / / /
function addElement( element ){
  element.classList.remove( 'dsp-none' );
}
/// / / / / / / / / / ADD ELEMENT \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

// \ \ \ \ \ \ REMOVE ELEMENTS WITH CLASS / / / / / / / / / / / / / / / / / / /
function removeElementsWithClass( classString ){
  var eCollection = document.querySelectorAll( '.' + classString ),
      i;
  
  for( i = 0; i < eCollection.length; i++ ){
    eCollection[ i ].classList.add( 'dsp-none' );
  }
}
// / / / / / / REMOVE ELEMENTS WITH CLASS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

//\ \ \ \ \ \ \ REMOVE CHILDREN OF PARENT / / / / / / / / / / / / / / / / / / /
function removeChildrenOfParent( element ){//Remove children of elements parent
  var parentsChildren = element.parentElement.children,
      i;
  
  for( i = 0; i < parentsChildren.length; i++ ){
    parentsChildren[ i ].classList.add( 'dsp-none' );
  }
}
/// / / / / / / REMOVE CHILDREN OF PARENT \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

//\ \ \ \ \ \ \ UPDATE ANIMATION PROPERTIES / / / / / / / / / / / / / / / / / /
function updateAnimationProperties( element, property, value ){
  var style = element.style,
      animationProperty = 'animation' + property.charAt( 0 ).toUpperCase() + 
                    property.slice( 1 );
  
  if( style[ animationProperty ] === '' ){
    style[ animationProperty ] = value;
  }
  else {
    style[ animationProperty ] += ', ' + value;
  }  
}
/// / / / / / / UPDATE ANIMATION PROPERTIES \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

//\ \ \ \ \ \ \ \ \ \ ADD ANIMATION / / / / / / / / / / / / / / / / / / / / / /
function addAnimation( 
  element, name, duration, delay, timing, fill 
){    
  element.classList.add( 'animation' );
    
  updateAnimationProperties( element, 'name', name ); 
  updateAnimationProperties( element, 'duration', duration );  //default = 1s
  updateAnimationProperties( element, 'delay', delay );  //default = 0s
  updateAnimationProperties( element, 'timing', timing );  //default = ease
  updateAnimationProperties( element, 'fill', fill );  //default = forwards);
}
/// / / / / / / / / / ADD ANIMATION \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \
// //    / DOCUMENT OBJECT MODEL \                                           \\


// \\          \ ARRAYS /                                                    //
//arr = arr.filter(function(entry) { return entry.trim() != ''; }); removeempty

//\ \ \ \ \ \ \ \ \ \ STRING TO ARRAY / / / / / / / / / / / / / / / / / / / / /
function stringToAry( string, seperator ){
  string = string.toString();  //Convert to string if not already.
  return string.split( seperator );
}
/// / / / / / / / / / STRING TO ARRAY \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

// \ \ \ \ \ \ \ \ \ \ ADD DIMENSION / / / / / / / / / / / / / / / / / / / / //
function addDim( stringOrAry, seperator ){  //add dimesnion to array or string.
  var i;
  
  if( Array.isArray( stringOrAry ) ){
    for( i = 0; i < stringOrAry.length; i++ ){
      if( stringOrAry[ i ].length > 1 ){
        stringOrAry[ i ] = stringOrAry[ i ].split( seperator );
      }
    }
    return stringOrAry;
  }
  else{
    return stringToAry( stringOrAry, seperator );
  }
}
// / / / / / / / / / / ADD DIMENSION \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

// \ \ \ \ \ \ \ \ \ \ SUB DIMENSION / / / / / / / / / / / / / / / / / / / / //
function subDim( ary ){ //Take away dimension from array	
  var i,
      comma = /,/g;
  
  for( i = 0; i < ary.length; i++ ){	
    ary[ i ] = ary[ i ].toString();
    ary[ i ] = ary[ i ].replace( comma, '' );
  }
  return ary;
}
// / / / / / / / / / / SUB DIMENSION \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\
// //          / ARRAYS \                                                    \\


// \\           \ MISC /                                                     //
// \\         NUMBER PILLARS                                                 //
// \ \ \ \ \ \ \ \ \ \ CREATE DIGITS / / / / / / / / / / / / / / / / / / / / //
function createDigits(){  //digits 0 - 9
  var digits = [],
      i;
  
  for( i = 0; i < 10; i++ ){
    digits.push( i );
  }
  
  return digits;
}
// / / / / / / / / / / CREATE DIGITS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

//\ \ \ \ \ \ \ \ \ \ \ CREATE PAIRS / / / / / / / / / / / / / / / / / / / / //
function createPairs(){  //pairs 00 - 99. non-sequential
  var pairs = [], 
      x, y, i;

  x = 0; y = -1;
  
  for( i = 0; i < 55; i++ ){
    y++;
    if( y === 10 ){
      x++; y = x;
    }
    x = x.toString();
    pairs.push( x + y );
  }
  
  return pairs;
}
/// / / / / / / / / / / CREATE PAIRS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

// \ \ \ \ \ \ \ \ \ \ \ CREATE SETS / / / / / / / / / / / / / / / / / / / / //
function createSets(){  //sets 000 - 999. non-sequential
  var sets = [],
      x, y, z, i;

  x = 0; y = 0; z = -1;

  for( i = 0; i < 220; i++ ){
    z++;
    if( y === 9 ) {
      x++; y = x - 1;
    }
    if( z === 10 ){
      y++; z = y;
    }
    x = x.toString();
    sets.push( x + y + z );
  }

  return sets;
}
// / / / / / / / / / / / CREATE SETS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

// \ \ \ \ \ \ \ \ \ \ \ CREATE SUMS / / / / / / / / / / / / / / / / / / / / //
function createSums(){
  var sums = [],
      i;

  for( i = 0; i < 28; i++ ){
    i = i.toString();
    sums.push( i );
  }

  return sums;
}
// / / / / / / / / / / / CREATE SUMS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

// \ \ \ \ \ \ \ \ CREATE SEQUENTIAL PAIRS / / / / / / / / / / / / / / / / / //
function createSeqPairs(){  //pairs 00 - 99. Sequential
  var pairs = [],
      x = 0,
      y = -1,
      i;

  for( i = 0; i < 100; i++ ){
    y++;

    if( y > 9 ){
      x++;
      y = 0;
    }

    if( x > 9 ){
      x = 0;
    }

    x = x.toString();
    pairs.push( x +  y );
  }
  return pairs;
}
// / / / / / / / / CREATE SEQUENTIAL PAIRS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

//\ \ \ \ \ \ \ \ \ CREATE SEQUENTIAL SETS / / / / / / / / / / / / / / / / / //
function createSeqSets(){  //pairs 000 - 999. Sequential
  var sets = [],
      x = 0,
      y = 0,
      z = -1,
      i;
  
  for( i = 0; i < 1000; i++ ){
    z++;
    
    if( z > 9 ){
      y++;
      z = 0;
    }
    
    if( y > 9 ){
      x++;
      y = 0;
    }
    
    x = x.toString();
    sets.push( x + y +  z );
  }
  
  return sets;
}
/// / / / / / / / / CREATE SEQUENTIAL SETS \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\

// \\              TYPE                                                      //
//\ \ \ \ \ \ \ \ \ \ \ \ GET DOUBLES / / / / / / / / / / / / / / / / / / / ///
function getDoubles( ary ){  //get indexes only with 2 identical digits
  var ary2 = [],
      aryCopy = ary.slice(),
      i;

  if( aryCopy[ 0 ].length === 3 ){
    aryCopy = addDim( aryCopy, '' );
    for( i = 0; i < ary.length; i++ ){
      if( 
        aryCopy[ i ][ 0 ] === aryCopy[ i ][ 1 ] || 
        aryCopy[ i ][ 0 ] === aryCopy[ i ][ 2 ] ||
        aryCopy[ i ][ 1 ] === aryCopy[ i ][ 0 ] || 
        aryCopy[ i ][ 1 ] === aryCopy[ i ][ 2 ] ||
        aryCopy[ i ][ 2 ] === aryCopy[ i ][ 0 ] || 
        aryCopy[ i ][ 2 ] === aryCopy[ i ][ 1 ]
      ){ 
        if(
          !( 
            aryCopy[ i ][ 0 ] === aryCopy[ i ][ 1 ] && 
            aryCopy[ i ][ 0 ] === aryCopy[ i ][ 2 ] 
          )
        ){
          ary2.push( aryCopy[ i ] );  
        }
      }		
    }
    return subDim( ary2 );
  }  
  else{
    aryCopy = addDim( aryCopy, '' );
    for( i = 0; i < aryCopy.length; i++ ){
      if( aryCopy[ i ].length !== undefined ){
        if( aryCopy[ i ][ 0 ] === aryCopy[ i ][ 1 ] ){
          ary2.push( ary[ i ] );
        }		
      }
    } 
    return subDim( ary2 );
  }
}
/// / / / / / / / / / / / GET DOUBLES \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\\

//\ \ \ \ \ \ \ \ \ \ \ \ GET TRIPLES / / / / / / / / / / / / / / / / / / / ///
function getTriples( ary ){  //get indexes only with 3 identical digits
  var ary2 = [],
      aryCopy = ary.slice(),
      i;

  if( aryCopy[ 0 ].length === 3 ){
    aryCopy = addDim( aryCopy, '' );
    for( i = 0; i < ary.length; i++ ){
      if( 
        aryCopy[ i ][ 0 ] === aryCopy[ i ][ 1 ] && 
        aryCopy[ i ][ 0 ] === aryCopy[ i ][ 2 ] 
      ){ 
        ary2.push( aryCopy[ i ] );  
      }
    }		
  }
  return subDim( ary2 );
}
/// / / / / / / / / / / / GET TRIPLES \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \\\
// //           / MISC \                                                     \\


// \\            \ RUN /                                                     //
// \\\\\\\\\\\\\\ START ///////////////////////////////////////////////////////
function start(){
  var footer = getBySelector( 'footer' ),
      paragraph = getById( 'paragraph' ),
      wrapper = getBySelector( '.wrapper' ),
      string,
      i,
      digits,
      pairs,
      sets,
      sums,
      sequentialPairs,
      sequentialSets,
      doubles,
      triples,
      main = getBySelector( 'main' ),
      height;
  
  setTimeout( removeElement, 3000, footer );
  
  addAnimation( footer, 'blur', '100s', '0s', 'ease' );
  addAnimation( footer, 'fade', '2s', '1s' );
  
  height = footer.offsetHeight;
  footer.style.height = height + 'px';
  
  addAnimation( footer, 'contract-ht', '0.5s', '2.5s', 'ease' );
  addAnimation( footer, 'shrink', '20s', '0s', 'ease' );
  addAnimation( footer, 'move-left', '20s', '0s', 'ease' );

  setTimeout(
    function() {
      footer.innerHTML = '';
    },
    2500
  );
  
//  digits = createDigits();
//  pairs = createPairs();
//  sets = createSets();
//  sums = createSums();
//  
//  sequentialPairs = createSeqPairs();
//  sequentialSets = createSeqSets();
//  
//  doubles = getDoubles( pairs );
//  triples = getTriples( sets );
//  
//  main.innerHTML += 'digits<br>' + digits;
//  main.innerHTML += '<br><br>';
//  main.innerHTML += 'pairs<br>' + pairs;
//  main.innerHTML += '<br><br>';
//  main.innerHTML += 'sets<br>' + sets;
//  main.innerHTML += '<br><br>';
//  main.innerHTML += 'sums<br>' + sums;
//  main.innerHTML += '<br><br><br>';
//  
//  main.innerHTML += 'sequential pairs<br>' + sequentialPairs;
//  main.innerHTML += '<br><br>';
//  main.innerHTML += 'sequential sets<br>' + sequentialSets;
//  main.innerHTML += '<br><br><br>';
//  
//  main.innerHTML += 'doubles<br>' + doubles;
//  main.innerHTML += '<br><br>';
//  main.innerHTML += 'triples<br>' + triples;
//  main.innerHTML += '<br><br>';
}
///////////////// START \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

start();
// //            / RUN \                                                     \\

// \\ --- COMMENT TEMPLATE ------------------------------------------------- //
// \\ \\\\\\\\ COMMENT-0 /////////////////////////////////////////////////// //
  // \\ \ \ \ \ \ \ \ COMMENT-1 / / / / / / / / / / / / / / / / / / / / / // //
    // \\ \  \  \  \  \  \  \  COMMENT-2  /  /  /  /  /  /  /  /  /  /  /  / //
      // \\   \   \   \   \   \   \   COMMENT-3   /   /   /   /   /   /  /   //
        // \\  \    \    \    \    \    \    COMMENT-4    /    /    /    /   //
          // \\ \     \     \     \     \     \     COMMENT-5     /     /    //
            // \\      \\      \      \      \      \      COMMENT-6      /  //
