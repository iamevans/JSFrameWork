
namespace A07Interface {

    // Object
    let objOne = {
        name: 'Hong',
        age: 20,
        toString: function() {
            return `${this.name} / ${this.age}`
        }
    }
    console.log(objOne.toString());



    let objTwo = {
        name: 'Hong',
        age: 20,
        toString: function() {
            return `${this.name} / ${this.age}`
        }
    }
    console.log(JSON.stringify(objTwo));


    
    let objThree = {
        'one': 'apple',
        'two': 'banana',
        'three': 'lemon',
    }
    console.log( JSON.stringify(objThree) );


    let objFive = {};
    objFive['one'] = 10;
    objFive['two'] = 20;
    objFive[10] = 30;
    console.log( JSON.stringify(objFive) );


}