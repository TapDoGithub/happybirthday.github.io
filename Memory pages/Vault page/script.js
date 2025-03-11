let pin = '';
// Set your correct PIN here

function addNumber(number) {
    if (pin.length < 4) {
        pin += number;
        updatePinDisplay();
    }
}

function clearPin() {
    pin = '';
    updatePinDisplay();
}

function submitPin() {
    switch (pin){
        case '1234':
            manualpinchange('Nice try, also try 0188 (clear first)');
            break
        case '0188':
            manualpinchange('Try 4444');
            break
        case '4444':
            manualpinchange('Try 8888');
            break
        case '8888':
            window.location.href = 'Pages/Sweet.html';
            break
        default:
            shakeScreen();
            clearPin();
            break
    }    
        // window.location.href = 'success.html'; // Redirect to success page
}

function manualpinchange (s) {
    document.getElementById('pinDisplay').textContent = s
}

function updatePinDisplay() {
    // Display the actual PIN instead of dots
    document.getElementById('pinDisplay').textContent = pin;
}

function shakeScreen() {
    const container = document.querySelector('.container');
    container.classList.add('shake');

    // Remove the shake class after the animation ends
    setTimeout(() => {
        container.classList.remove('shake');
    }, 500); // Match the duration of the shake animation
}