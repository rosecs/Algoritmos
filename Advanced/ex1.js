//Exercise #1
//Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.

function largestNumber(){
    alert("Write 5 numbers: ");
    let myArray = [];
    let highest = 0 ;

    //Se piden los datos
    let num1 = parseInt(prompt("Put number 1: "),10);
    let num2 = parseInt(prompt("Put number 2: "),10);
    let num3 = parseInt(prompt("Put number 3: "),10);
    let num4 = parseInt(prompt("Put number 4: "),10);
    let num5 = parseInt(prompt("Put number 5: "),10);

    // agregamos los numeros dados al array creado inicalmente
    myArray.push(num1, num2, num3, num4, num5);


    alert('These are your numbers: ' + myArray);
    //Compara los numeros ingresados para encontrar el mayor
    
    if(myArray[0] > highest ){
         //Si es mayor, se guarda como el numero mayor
        highest = num1;
    
        if(myArray[1] > highest){
            highest = num2;
            if (myArray[2] > highest){
            highest = num3 ;
                if (myArray[3] > highest){
            highest = num4 ;
                    if (myArray[4] > highest){
                        highest = num5 ;
                    }
                }
            }
        }
    } else {
        alert('ERROR!');
    } 
    alert('The highest number is ' + highest);
    return ;

    
  }

alert(largestNumber());

    