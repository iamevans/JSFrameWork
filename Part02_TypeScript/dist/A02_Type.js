"use strict";
var A02Type;
(function (A02Type) {
    // Type
    var name = 'NolBu';
    var age = 30;
    var check = true;
    console.log(name + ", " + age + ", " + check);
    // any type
    var noType = 10;
    // noType = 'Hungbu';
    // noType = true;
    console.log(noType);
    // null, undefined type
    var nullType = null;
    var unType = undefined;
    // let num: number = null;      // "strictNullChecks": false 가능
    // union type
    var address = null;
    var strNum = 'HungBu';
    console.log(address + ", " + strNum);
})(A02Type || (A02Type = {}));
//# sourceMappingURL=A02_Type.js.map