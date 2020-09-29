const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#min');
const segundos = document.querySelector('#seg');

function cuentaRegresiva() {
	const newYear = new Date((new Date().getUTCFullYear() + 1), 0, 1, 0, 0, 0);
	const hoy = new Date();
	const falta = (newYear - hoy) / 1000;

	const seg = Math.floor(falta) % 60;
	const min = Math.floor(falta / 60) % 60;
	const hours = Math.floor(falta / 3600) % 24;
	const days = Math.floor(falta / 86400);

	dias.innerHTML = days;
	horas.innerHTML = formatearHora(hours);
	minutos.innerHTML = formatearHora(min);
	segundos.innerHTML = formatearHora(seg);
}

function formatearHora(tiempo) {
	return tiempo < 10 ? `0${tiempo}` : tiempo;
}

cuentaRegresiva();
setInterval(cuentaRegresiva, 1000);