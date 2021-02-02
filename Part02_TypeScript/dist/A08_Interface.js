"use strict";
var A08Interface;
(function (A08Interface) {
    // 인터페이스에서 정의한 멤버변수는 접근제한자가 public이어야 한다.
    var TestClass = /** @class */ (function () {
        function TestClass(name, check) {
            this.name = name;
            this.check = check;
        }
        TestClass.prototype.onPlus = function (x, y) {
            return x + y;
        };
        TestClass.prototype.toString = function () {
            return "[TestClass] name: " + this.name + ", check: " + this.check;
        };
        return TestClass;
    }());
    var testOne = new TestClass('NolBu', true);
    console.log(testOne.onPlus(10, 20));
    console.log(testOne.toString());
})(A08Interface || (A08Interface = {}));
//# sourceMappingURL=A08_Interface.js.map