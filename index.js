let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
// intialize the count as 0
let count = 0
// listen for clicks on the increment button
function increment() {
	count += 1
	countEl.innerText = count
	console.log(count)
}
function save() {
	let countStr = count + '-'
	saveEl.innerText += countStr
	// console.log(count)
	countEl.textContent = 0
	count = 0
}
save()
