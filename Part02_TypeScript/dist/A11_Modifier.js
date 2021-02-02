"use strict";
var A11Modifier;
(function (A11Modifier) {
    var Jumsu = /** @class */ (function () {
        // 생성자.
        // 접근제한자를 붙이면 지정한 접근제한자를 가진 동일 이름의 멤버변수를 생성해 준다.
        function Jumsu(_name, _kor, _eng, _math) {
            this._total = 0;
            this._avg = 0;
            this._name = _name;
            this._kor = _kor;
            this._eng = _eng;
            this._math = _math;
        }
        Object.defineProperty(Jumsu.prototype, "kor", {
            // Getter / Setter
            get: function () {
                // readonly는 class 내부에서도 참조만 가능하다.
                return this._kor;
            },
            set: function (kor) {
                this._kor = kor;
            },
            enumerable: false,
            configurable: true
        });
        Jumsu.prototype.onTotal = function () {
            this._total = this._kor + this._eng + this._math;
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
    var nolbu = new Jumsu('놀부', 100, 80, 70);
    nolbu.onTotal();
    nolbu.onAvg(3);
    console.log(nolbu.display());
    nolbu.kor = 50;
})(A11Modifier || (A11Modifier = {}));
//# sourceMappingURL=A11_Modifier.js.map