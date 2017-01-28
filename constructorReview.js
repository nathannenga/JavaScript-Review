//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  var Animal = function(species,name,legs,color,food){
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;

  };


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender){
  var newObj = {};
 newObj.name = name;
 newObj.age = age;
 newObj.height = height;
 newObj.gender = gender;
 return newObj;
};


//Create a animal array and a person array.

var animalArray = [];
var personArray = [];


//Create two instances of Animal and push those into your animal array

  animalArray.push(new Animal('dog','spot',4,'black',['kibble,treats']));
  animalArray.push(new Animal('cat','butt',4,'white',['fish,treats']));



//Create two instances of person and push those into your person array.

  personArray.push(person('bob',16,6,'m'));
  personArray.push(person('george',20,6,'m'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat(function())


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
// no because there is no prottype


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
