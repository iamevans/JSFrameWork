"use strict";
var A05OptionalParam;
(function (A05OptionalParam) {
    function calcTaxOne(amount, tax) {
        if (tax)
            return amount * tax;
        else
            return amount * 0.08;
    }
    // console.log(calcTaxOne(1000));
    console.log(calcTaxOne(1000, 0.05));
    console.log('');
    function calcTaxTwo(amount, tax) {
        if (tax === void 0) { tax = 0.08; }
        return amount * tax;
    }
    console.log(calcTaxTwo(1000));
    console.log(calcTaxTwo(1000, 0.05));
    console.log('');
    function objParam(arg) {
        console.log(arg.label);
    }
    objParam({ label: 'middle' });
})(A05OptionalParam || (A05OptionalParam = {}));
//# sourceMappingURL=A05_OptionalParam.js.map