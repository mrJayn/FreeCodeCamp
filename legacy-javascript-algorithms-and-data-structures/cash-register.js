/**
 *
 * @param {*} price
 * @param {*} cash
 * @param {*} cid
 * @returns -
 */
function checkCashRegister(price, cash, cid) {
	let currency = [
			['ONE HUNDRED', 100.0],
			['TWENTY', 20.0],
			['TEN', 10.0],
			['FIVE', 5.0],
			['ONE', 1.0],
			['QUARTER', 0.25],
			['DIME', 0.1],
			['NICKEL', 0.05],
			['PENNY', 0.01],
		],
		dueChange = (cash - price).toFixed(2),
		dueChangeCount = cash - price,
		cidSum = 0,
		cidTtb = cid.reverse(),
		allChange = [...currency],
		allChangeSum = 0,
		change = allChange

	//calc - cidSum
	cid.forEach((i) => {
		cidSum += i[1]
	})
	cidSum = cidSum.toFixed(2)
	/* pass cidTtb(Top to Bottom) through currency vals and 
      evaluates which currency type to add */
	for (let i = 0; i < currency.length; i++) {
		let typeNext = cidTtb[i][1] / currency[i][1],
			allChange_val = 0
		while (dueChangeCount.toFixed(2) >= currency[i][1] && typeNext >= 1) {
			dueChangeCount -= currency[i][1]
			allChange_val += currency[i][1]
			typeNext-- // prevents infin. growth // add same type || next type.
		}
		//returns toFixed strings as floats (if floor < val)
		if (allChange_val >= 0) {
			if (allChange_val - Math.floor(allChange_val) !== 0) {
				allChange[i][1] = allChange_val.toFixed(2)
				allChange[i][1] = parseFloat(allChange[i][1])
				allChange[i][1] = allChange_val
			} else {
				allChange[i][1] = allChange_val
			}
		}
	}
	// calc - sum of determined change due
	change = change.filter((i) => Number(i[1]).toFixed(2) > 0)
	for (let j in change) {
		allChangeSum += change[j][1]
		allChangeSum = Math.round(allChangeSum * 100) / 100
	}
	//Final determinations for which obj to return
	if (allChangeSum < dueChange) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] }
	} else if (cidSum == allChangeSum) {
		return { status: 'CLOSED', change: cid.reverse() }
	} else {
		return { status: 'OPEN', change: change }
	}
}
console.log(
	checkCashRegister(3.26, 100, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
)
