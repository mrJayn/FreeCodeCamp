const romans = [
	['M', 1000],
	['CM', 900],
	['D', 500],
	['CD', 400],
	['C', 100],
	['XC', 90],
	['L', 50],
	['XL', 40],
	['X', 10],
	['IX', 9],
	['V', 5],
	['IV', 4],
	['I', 1],
]

/**
 *
 * @param { Number } num
 * @returns - a roman numeral string
 */
function convertToRoman(num) {
	let numeral = []
	romans.forEach((i) => {
		while (num >= i[1]) {
			numeral.push(i[0])
			num -= i[1]
		}
	})
	return numeral.join('')
}
