const socket = io();

function validateForm(form) {
	if (form.username.value) {
		return true;
	}
}
