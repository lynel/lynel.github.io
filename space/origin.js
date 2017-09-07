// ////////////////////////////////// INTIAL /////////////////////////////// //
'use strict';

var up = document.getElementById( 'up' );
var right = document.getElementById( 'right' );
var left = document.getElementById( 'left' );
var down = document.getElementById( 'down' );

function initAnimation() { 
  var tri = document.getElementById( 'tri' );
      
  setTimeout ( 
    function() { 
      tri.classList.add( 'expand' );
    },
    1000 
  ); 
}

window.upVar = false;

up.onmouseover = function () {
    window.upVar = true;
}

up.onmouseout = function () {
    window.upVar = false;
}
//////////////////////////////////
window.downVar = false;

down.onmouseover = function () {
    window.downVar = true;
}

down.onmouseout = function () {
    window.downVar = false;
}

//////////////////////////////////
window.leftVar = false;

left.onmouseover = function () {
    window.leftVar = true;
}

left.onmouseout = function () {
    window.leftVar = false;
}

//////////////////////////////////
window.rightVar = false;

right.onmouseover = function () {
    window.rightVar = true;
}

right.onmouseout = function () {
    window.rightVar = false;
}

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

requestAnimationFrame(mainLoop);
const keys = {
    ArrowUp : false,
    ArrowDown : false,
    ArrowLeft : false,
    ArrowRight : false,
    Digit1 : true,
    event(e){ 
        if(keys[e.code] !== undefined){ 
            keys[e.code] = event.type === "keydown" ;
            e.preventDefault();
        } 
    },
}
addEventListener("keyup",keys.event);
addEventListener("keydown",keys.event);
const ships = {
    items : [],
    controling : 0,
    add(ship){ this.items.push(ship) },
    update(){
        var i;
        
        for(i = 0; i < this.items.length; i++){
            if(keys["Digit" + (i+1)]){
                if(this.controling !== -1){
                    this.items[this.controling].hasControl = false;
                }
                this.controling = i;
                this.items[i].hasControl = true;
            }
            this.items[i].updateUserIO();
            this.items[i].updatePos();
        }
    }
    
}
const ship = {
    element : null,
    hasControl : false,
    speed : 0,
    speedC : 0,  // chase value for speed limit mode
    speedR : 0,  // real value (real as in actual speed)
    angle : 0,
    angleC : 0,  // as above
    angleR : 0,
    displayAngle : 0, // the display angle
    deltaAngle : 0,
    matrix : null,  // matrix to create when instanciated 
    pos : null,     // position of ship to create when instanciated 
    delta : null,   // movement of ship to create when instanciated 
    checkInView(){
        var bounds = this.element.getBoundingClientRect();
        if(Math.max(bounds.right,bounds.left) < 0 && this.delta.x < 0){
            this.pos.x = innerWidth;
        }else if(Math.min(bounds.right,bounds.left) > innerWidth  && this.delta.x > 0){
            this.pos.x = 0;
        }
        if(Math.max(bounds.top,bounds.bottom) < 0  && this.delta.y < 0){
            this.pos.y = innerHeight;
        }else if( Math.min(bounds.top,bounds.bottom) > innerHeight  && this.delta.y > 0){
            this.pos.y = 0;
        }
        
    },
    controls : {
        oldSchool(){
            if(this.hasControl){
                if( keys.ArrowUp || ( window.upVar === true ) ) {
                    this.delta.x += Math.cos(this.angle) * 0.2;
                    this.delta.y += Math.sin(this.angle) * 0.2;
                  
                    up.style.background = '#fff';
                    setTimeout( function() { 
                      up.style.background = '#f5f5f5';
                    }, 1000 ); 
                }
                if(keys.ArrowDown || ( window.downVar === true ) ){
                    this.delta.x += Math.cos(this.angle) * -0.1;
                    this.delta.y += Math.sin(this.angle) * -0.1;
                  
                    down.style.background = '#fff';
                    setTimeout( function() { 
                      down.style.background = '#f5f5f5';
                    }, 1000 ); 
                }
                if(keys.ArrowLeft || ( window.leftVar === true )  ){
                    this.deltaAngle -= 0.004;
                    
                    left.style.background = '#fff';
                    setTimeout( function() { 
                      left.style.background = '#f5f5f5';
                    }, 1000 ); 
                }
                if(keys.ArrowRight || ( window.rightVar === true )  ){
                    this.deltaAngle += 0.004;
                  
                    right.style.background = '#fff';
                    setTimeout( function() { 
                      right.style.background = '#f5f5f5';
                    }, 1000 ); 
                }
            }
            this.pos.x += this.delta.x;
            this.pos.y += this.delta.y;
            this.angle += this.deltaAngle;
            this.displayAngle = this.angle;
            this.delta.x *= 0.995;
            this.delta.y *= 0.995;
            this.deltaAngle *= 0.9;            
        },
    },
    updateUserIO(){
    },
    updatePos(){
        this.checkInView();
        var m = this.matrix;
        m[3] = m[0] = Math.cos(this.displayAngle);
        m[2] = -(m[1] = Math.sin(this.displayAngle));
        m[4] = this.pos.x;
        m[5] = this.pos.y;
        this.element.style.transform = `matrix(${m.join(",")})`;
    },
    create(shape,container,xOff,yourRide){  // shape is a string
        this.element = document.createElement("div")
        this.element.style.position = "absolute";
        this.element.style.top = this.element.style.left = "0px";
        this.element.style.fontSize = "28px";
        this.element.textContent = shape;
        this.element.style.color  = "green";
        this.element.style.zIndex  = 1;

        container.appendChild(this.element);
        this.matrix = [1,0,0,1,0,0];
        this.pos = { x : innerWidth / 2 + innerWidth * xOff, y : innerHeight / 2 };
        this.delta = { x : 0, y : 0};
        this.updateUserIO = this.controls[yourRide];
        return this;
    }
}
var contain = document.createElement("div");
contain.style.position = "absolute";
contain.style.top = contain.style.left = "0px";
contain.style.width = contain.style.height = "100%";
contain.style.overflow = "hidden";
document.body.appendChild(contain);
window.focus();




ships.add(Object.assign({},ship).create("",contain,-0.4,"oldSchool"));
function mainLoop(){
    ships.update();
    requestAnimationFrame(mainLoop);
}

var div = document.querySelector( 'div div' );

div.id = 'tri-bx';
div.classList.add( 'tri-bx' );

div.innerHTML = '<div id="tri" class="tri blink"></div>';



initAnimation();

function simulate() {


}
