'use strict';

document.querySelector('#frmTemperature').addEventListener('submit', (e) => {
    e.preventDefault();

    const temperature = parseFloat(e.target.txtTemperature.value);
    const from = e.target.lstFrom.value;
    const to = e.target.lstTo.value;
    let conversion = '';
    
    switch (from + to) {
        case 'CF': conversion = (temperature * 1.8) + 32;           break;
        case 'CK': conversion = temperature + 273.15;               break;
        case 'FC': conversion = (temperature - 32) / 1.8;           break;
        case 'FK': conversion = (temperature + 459.67) * (5 / 9);   break;
        case 'KC': conversion = temperature - 273.15;               break;
        case 'KF': conversion = (temperature * (5 / 9)) - 459.67;   break;
    }

    if (conversion === '') {
        document.querySelector('#fromText').innerHTML = '';
        document.querySelector('#toText').innerHTML = '';
    } else {
        document.querySelector('#fromText').innerHTML = temperature + '&deg;' + from + ' = ';
        document.querySelector('#toText').innerHTML = conversion.toFixed(2) + '&deg;' + to;
        document.querySelector('#results').classList.add('show');
    }    
});