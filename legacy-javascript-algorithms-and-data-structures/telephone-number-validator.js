/**
 *
 * @param { String } str
 * @returns -
 */
function telephoneCheck(str) {
	let format = /^[1 ]*(\d{3}\){0})?(\(\d{3}\))?[-\s]?\d{3}[-\s]?\d{4}$/,
		nums = str.replace(/\W/g, '').split(''),
		len = nums.length
	if (len == 10) {
		return format.test(str)
	} else if (len == 11 && nums[0] == 1) {
		return format.test(str)
	}
	return false
}
