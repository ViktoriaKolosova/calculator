function Calc() {
	this.setNumbers = function(a, b) {
		this.a = +prompt('Введите первую цифру', 0);
		this.b = +prompt('Ведите вторую цифру', 0);
	};

	this.sum = function() {
		return this.a + this.b;
	};
	this.mul = function() {
		return this.a * this.b;
	};

	this.div = function() {
		return this.a / this.b;
	};
	this.subst = function() {
		return this.a - this.b;
	}
}
var calculator = new Calc();
calculator.setNumbers();
alert(calculator.sum());
alert(calculator.mul());