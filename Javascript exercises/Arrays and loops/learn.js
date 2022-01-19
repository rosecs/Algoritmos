// Learn how to use for's
/*
var initialize a global. It could changes whenever it want.
let initialize once and call in its block
const initialize once it could no changes its value
*/

for( var i = 0 ; i < 9; i++){
    n = 0 ; 
    n += i ;
    console.log(n);
}

/*let i = 10;*/

for( let j = 0 ; j < 3; j++){
    console.log(j);
}

//console.log(i) ;

for (let num2 = 0; num2 <= 3; num2++){
    for (let num1 = 0; num1 < 3 ; num1++) {
        console.log( num2 + " " + num1); 
    }
}

for (let num3 = 4; num3 <= 5; num3++){
    for (let num4 = 0; num4 <= 5 ; num4++) {
        console.log( num3 + " " + num4); 
    }
}

for (let num5 = 0; num5 <= 15; num5+=3){
    console.log( num5 );   
}

//learn while's

var n = 0;
var x = 0;

while(n<4){
  n++;
  x += n;
    console.log(x);
  }

while (n++ < 50) {
    x += 2
    console.log(x);
    for (let k = 0; k < 25; k++) {
       console.log(k);
        
    }
}


    
}



