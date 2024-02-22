const log = console.log;

Array.prototype.bubble_sort = function() {
	var i, j, temp;
  log(this)
  log(this.length)

	for (i = 0; i < this.length - 1; i++)
		for (j = 0; j < this.length - 1 - i; j++)
			if (this[j] > this[j + 1]) {
				temp = this[j];
				this[j] = this[j + 1];
				this[j + 1] = temp;
			}
	return this;
};

var num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
num.bubble_sort();

let result = "";

for (var i = 0; i < num.length; i++) {
  result += num[i] + " ";
}

log(result)
