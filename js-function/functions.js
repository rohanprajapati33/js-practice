var x = myFunction(5, 3);

function myFunction(a, b) {
  return a * b;
}
console.log(x);

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  console.log(toCelsius(77));
  
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  } 
  console.log(toCelsius(27))

  const person = {
    firstName : "fiat",
    car : " M-300",
    color : "red"

  }
  console.log(person.firstName)

  const employee = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.id+ this.lastName;
    }
  };
  console.log(employee.fullName());
