class Person {
  saykind() {
    console.log('i am human');
  }
}
class Men extends Person{
  sayGender() {
    console.log('Male');
  }
}
class Women extends Person {
  sayGender() {
    console.log('Female');
  }
}

const peter = new Men
const billie = new Women
peter.saykind()
billie.saykind()
peter.sayGender()
billie.sayGender()
