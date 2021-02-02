"use strict";
var A03ReferenceType;
(function (A03ReferenceType) {
    // array
    var numAry = [10, 11, 100];
    var strAry = ['A', 'B', 'C'];
    console.log("Array=> " + numAry + " / " + numAry[0]);
    console.log("strAry=> " + strAry + " / " + strAry[0]);
    // tuple
    var nolbuTp = ['NolBu', 30];
    console.log("tuple=> " + nolbuTp + " / " + nolbuTp[0]);
    // enum
    // Object
    var obj = {
        name: 'Hong',
        age: 20,
        toString: function () {
            return this.name + " / " + this.age;
        }
    };
    console.log(obj.toString());
})(A03ReferenceType || (A03ReferenceType = {}));
//# sourceMappingURL=A03_ReferenceType.js.map