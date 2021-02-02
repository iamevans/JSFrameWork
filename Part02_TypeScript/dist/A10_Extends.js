"use strict";
var A10Extends;
(function (A10Extends) {
    var Jumsu = /** @class */ (function () {
        // 생성자.
        function Jumsu(name, kor, eng) {
            this._total = 0;
            this._avg = 0;
            this._name = name;
            this._kor = kor;
            this._eng = eng;
        }
        Jumsu.prototype.onTotal = function () {
            this._total = this._kor + this._eng;
            return this._total;
        };
        Jumsu.prototype.onAvg = function (num) {
            this._avg = this._total / num;
            return this._avg;
        };
        Jumsu.prototype.display = function () {
            return this._name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this._total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this._avg + "\uC785\uB2C8\uB2E4.";
        };
        return Jumsu;
    }());
    // Jumsu Class를 상속받아 사용.
    var JumsuThree = /** @class */ (function () {
        function JumsuThree() {
        }
        return JumsuThree;
    }());
    var nolbu = new Jumsu('놀부', 100, 80);
    nolbu.onTotal();
    nolbu.onAvg(2);
    console.log(nolbu.display());
})(A10Extends || (A10Extends = {}));
//# sourceMappingURL=A10_Extends.js.map