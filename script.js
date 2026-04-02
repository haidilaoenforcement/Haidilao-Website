const ticket = document.querySelector("#violation-ticket");
const numInput = document.querySelector("#violation-number-input");
const btnGo = document.querySelector("#btn-go");
const unknown = document.querySelector("#unknown-violation");
const ukNum = document.querySelector("#uk-violation-num");
const loading = document.querySelector("#loading-box");

btnGo.addEventListener('click', () => processInput(numInput.value));


function processInput(num) {
	loading.classList.remove("hidden");
	unknown.classList.add("hidden");
	ticket.classList.add("hidden");
	setTimeout(() => {
		loading.classList.add("hidden");
		if (num != '68141933572') {
			showUnknownViolation(num);
			return;
		}

		showTicket(num);
	}, 623);
}

function showUnknownViolation(num) {
	unknown.classList.remove("hidden");
	ukNum.textContent = num;
}


function showTicket(num) {
	if (!unknown.classList.contains("hidden"))
		unknown.classList.add("hidden");

	ticket.classList.remove("hidden");
}