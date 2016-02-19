var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.sayHi = function() {
  return "Hi! My name is " + this.name;
};

var diane = new Person("Diane", 30);
var robert = new Person("Robert Plant", 67);
var jimmy = new Person("Jimmy Page", 72);

var task1 = {
  description: "Wash the cat",
  priority: "High",
  assignedTo: diane,
};

var task2 = {
  description: "Eat candy.",
  priority: "Low",
  assignedTo: robert,
};

var task3 = {
  description: "End world hunger.",
  priority: "High",
};

var tasks = [task1, task2, task3];
tasks.forEach(function(currentTask){
  console.log(currentTask.description);
  console.log(currentTask.priority);
  console.log(currentTask.assignedTo.sayHi());
});
