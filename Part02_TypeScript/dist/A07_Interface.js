"use strict";
var A07Interface;
(function (A07Interface) {
    // Object
    var objOne = {
        name: 'Hong',
        age: 20,
        toString: function () {
            return this.name + " / " + this.age;
        }
    };
    console.log(objOne.toString());
    var objTwo = {
        name: 'Hong',
        age: 20,
        toString: function () {
            return this.name + " / " + this.age;
        }
    };
    console.log(JSON.stringify(objTwo));
    var objThree = {
        'one': 'apple',
        'two': 'banana',
        'three': 'lemon',
    };
    console.log(JSON.stringify(objThree));
    var objFive = {};
    objFive['one'] = 10;
    objFive['two'] = 20;
    objFive[10] = 30;
    console.log(JSON.stringify(objFive));
})(A07Interface || (A07Interface = {}));
//# sourceMappingURL=A07_Interface.js.map