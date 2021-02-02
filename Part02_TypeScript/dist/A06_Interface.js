"use strict";
var A06Interface;
(function (A06Interface) {
    // 타입을 직접 정의하는 경우
    var onPlus = function (x, y) {
        return x + y;
    };
    var onMin = function (x, y) {
        return x - y;
    };
    console.log(onPlus(10, 20));
    console.log(onMin(10, 20));
    var calcTaxOne = function (amount, tax) {
        if (tax)
            return amount * tax;
        else
            return amount * 0.08;
    };
    console.log(calcTaxOne(1000));
    console.log(calcTaxOne(1000, 0.05));
    var calcTaxTwo = function (amount, tax) {
        if (tax === void 0) { tax = 0.08; }
        return amount * tax;
    };
    console.log(calcTaxTwo(1000));
    console.log(calcTaxTwo(1000, 0.05));
    var objParam = function (arg) {
        console.log(arg.label);
    };
})(A06Interface || (A06Interface = {}));
//# sourceMappingURL=A06_Interface.js.map