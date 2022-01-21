/*Exercise #1: A Person Object

Create a class called Person which accepts the name of a person 
as a string, and his/her/their age as a number.
The Person class should have a method called Describe which returns
a string with the following syntax: "name, age years old".
For example, if Manny is 19 years old the function Describe of his
 object will return "Manny, 19 years old".
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Describe() {
        return (this.name + ", " + this.age + " old");
    }
}

let myData = new Person("Sofia", 23);
console.log(myData.Describe());




