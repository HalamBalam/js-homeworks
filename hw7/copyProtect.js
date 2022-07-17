const disableEvent = (event) => {
    alert('Операция запрещена!');
    event.preventDefault();
}

document.addEventListener('contextmenu', disableEvent);
document.addEventListener('copy', disableEvent);
document.addEventListener('cut', disableEvent);
