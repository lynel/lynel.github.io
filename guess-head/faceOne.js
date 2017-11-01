document.write(
'<svg' +
'  xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120"' +
'  class="cntr" id="grid"  ' +
'>' +
'  <defs class="defs">' +
'	<style>' +
'	  .head-wrap,' +
'	  .mouth,' +
'	  .teeth {' +
'		stroke: none;' +
'	  }' +
'	  .head-wrap {' +
'		stroke-linecap: round;' +
'		fill: #754;' +
'	  }' +
'	  .eyes-wrap {' +
'		stroke-width: 1.5;' +
'		stroke: #000;' +
'		fill: none;' +
'	  }' +
'	  .mouth {' +
'		fill: #e99;' +
'	  }' +
'	  .teeth {' +
'		fill: #fff;' +
'	  }' +
'	  .eyes-down {' +
'		animation-name: eyes-down;' +
'	  }' +
'	  .mouth-scale {' +
'		animation-name: mouth-scale;' +
'	  }' +
'	  .thicken {' +
'		animation-name: thicken;' +
'	  }' +
'	  .grow {' +
'		animation-name: grow;' +
'	  } ' +
'	  .teeth-up {' +
'		animation-name: teeth-up;' +
'	  }' +
'	  .rotate-left {' +
'		animation-name: rotate-left;' +
'	  }' +
'	  .rotate-right {' +
'		animation-name: rotate-right;' +
'	  }' +
//'	  .blur {' +
//'		animation-name: blur;' +
//'		animation-duration: 1.5s;' +
//'		animation-iteration-count: infinite;' +
//'		animation-fill-mode: backwards;' +
//'	  }' +
'	  .background-color {' +
'		animation-name: background-color;' +
'		animation-duration: 3s;' +
'		animation-iteration-count: 1;' +
'		animation-fill-mode: both;' +
'	  }' +
'	  .intro {' +
'		animation-iteration-count: infinite;' +
'	  }' +
'	  ' +
'	  .snap {' +
'		animation-duration: 2s;' +
'		animation-timing-function: cubic-bezier( 0.25, 0.1, 0, 2 );' +
'	  }' +
'	  ' +
'	  @keyframes background-color {' +
'		0% {' +
'		  background-color: #fff;' +
'		}' +
'		100% {' +
'		  background-color: #eee;' +
'		}' +
'	  }          ' +
'	  @keyframes blur {' +
'		0% {' +
'		  filter: blur( 2rem );' +
'		}' +
'		100% {' +
'		  filter: blur( 0 );' +
'		}' +
'	  }' +
'	  @keyframes eyes-down {' +
'		50% {' +
'		  transform: translateY( 1rem );' +
'		}' +
'	  }' +
'	  @keyframes mouth-scale {' +
'		50% {' +
'		  transform: scale( 0.5, 0.7 ) translate( 0, 10px );' +
'		}' +
'	  }   ' +
'	  @keyframes thicken {' +
'		50% {' +
'		  stroke-width: 1.75;' +
'		}' +
'	  }    ' +
'	  @keyframes grow {' +
'		50% {' +
'		  transform: scale( 1.0125 );' +
'		}' +
'	  }  ' +
'	  @keyframes teeth-up {' +
'		50% {' +
'		  transform: translateY( -5px );' +
'		}' +
'	  }      ' +
'	  @keyframes rotate-left {' +
'		50% {' +
'		  transform: rotate( -10deg );' +
'		}' +
'	  }           ' +
'	  @keyframes rotate-right {' +
'		50% {' +
'		  transform: rotate( 10deg );' +
'		}' +
'	  }            ' +
'	</style>' +
'	' +
'	<clipPath id="mouth">' +
'		<path' +
'		  d="' +
'			M20, 75' +
'			A20, 20' +
'			0,' +
'			0, 1' +
'			80, 75' +
'			Z' +
'		  "' +
'		>' +
'		</path>              ' +
'	</clipPath>         ' +
'  </defs> ' +
'  ' +
'  <g class="drawing">' +
'	<g class="head-wrap animation snap grow intro">' +
'	  <circle cx="50" cy="50" r="50" class="head">' +
'	  </circle>' +
'	  ' +
'	  <g class="mouth animation snap mouth-scale intro">' +
'		<path' +
'		  d="' +
'			M20, 75' +
'			A20, 20' +
'			0,' +
'			0, 1' +
'			80, 75' +
'			Z' +
'		  "' +
'		>' +
'		</path>    ' +
'		' +
'		' +
'		<g clip-path="url( #mouth )">' +
'		  <rect' +
'			x="15" y="40"' +
'			width="70" height="15"' +
'			class="teeth animation snap teeth-up intro"' +
'		  />' +
'		</g>             ' +
'	  </g>   ' +
'	  ' +
'	  <g class="eyes-wrap animation snap eyes-down intro">' +
'		<g class="left-eye animation snap thicken intro">' +
'		  <path' +
'			d="' +
'			  M20, 30' +
'			  A5, 5' +
'			  0,' +
'			  0, 0' +
'			  42.5, 30' +
'			"' +
'			class="animation snap rotate-left intro"' +
'		  >' +
'			<animate' +
'			  attributeName="d"' +
'			  dur="1.5s"' +
'			  begin="1s"' +
'			  repeatCount="indefinite"' +
'			  values="M20, 30' +
'					  A5, 5' +
'					  0,' +
'					  0, 0' +
'					  42.5, 30;' +
'' +
'					  M20, 30' +
'					  A5, 5' +
'					  0,' +
'					  0, 0' +
'					  42.5, 30;' +
'					  ' +
'					  M20, 30' +
'					  A5, 5' +
'					  0,' +
'					  0, 0' +
'					  42.5, 30;"' +
'			  fill="freeze"' +
'			/>                   ' +
'		  </path>' +
'		</g>' +
'		' +
'		<g class="right-eye animation snap thicken intro">' +
'		  <path' +
'			d="' +
'			  M80, 30' +
'			  A5, 5' +
'			  0,' +
'			  0, 1' +
'			  57.5, 30' +
'			"' +
'			class="animation snap rotate-right intro"' +
'		  >' +
'		  </path>              ' +
'		</g>           ' +
'	  </g>          ' +
'	</g>' +
'	' +
'  </g>' +
'</svg>'               
);