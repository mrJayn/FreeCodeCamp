/**
 *
 * @param { String } str
 * @returns -
 */
function rot13(str) {
	let coded = str.split(''),
		decoded = [],
		i,
		abc = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		]
	for (i = 0; i < coded.length; i++) {
		let indx = abc.indexOf(coded[i].toUpperCase())
		if (indx - 12 <= 0 && indx != -1) {
			decoded.push(abc[abc.length - (13 - indx)])
		} else if (indx === -1) {
			decoded.push(coded[i])
		} else {
			decoded.push(abc[indx - 13])
		}
	}
	return decoded.join('')
}
