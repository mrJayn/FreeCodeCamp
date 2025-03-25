/**
 * Check if the string is a palindrome or not.
 *
 * @param { String } str - the string to check
 * @returns { Boolean } - whether or not the string is a palidrome
 */
function palindrome(str) {
	let pal = str.replace(/[\W_]/gi, '').toLowerCase()
	let check = [...pal].reverse().join('').match(pal)
	return check !== null ? true : false
}
