$(document).ready(function () {

    $('#button').click(function () {

$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')

.done(function (data) {

    if ($("#dane-programisty").length==0) {
        let divek = document.createElement('div');
        divek.setAttribute('id', 'dane-programisty');
        divek.innerHTML = ` <p> Imię i nazwisko: ${data.imie} ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma: ${data.firma} </p> `;
        document.body.appendChild(divek); 
    } else {
        const divek = document.querySelector("#dane-programisty");
        let divo = document.createElement('p');
        divo.innerHTML = ` <p> Imię i nazwisko: ${data.imie} ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma: ${data.firma} </p> `;
        divek.appendChild(divo); 

    // let daneProgramisty = $('<div id="dane programisty"></div>').html(`Imię i nazwisko: ${data.imie} ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma:${data.firma}`);
    // let jqBody = $('body');
    // jqBody.append(daneProgramisty);
    // // jak w tym dodać <br> ? metoda html lub append

    // let hr = document.createElement('hr');
    // document.body.appendChild(hr);
    
    // let divek = document.createElement('div');
    // divek.setAttribute('id', 'dane-programisty')
    // divek.innerHTML = `Imię i nazwisko: ${data.imie} ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma: ${data.firma} `
    // document.body.appendChild(divek);
    // // jak w tym dodać id do div? attr

    // let daneProgramisty = (`Imię i nazwisko: ${data.imie} ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma:${data.firma}`);
    // document.body.append(daneProgramisty);

    //  divo.innerHTML = `Imię i nazwisko: ${data.imie} ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma: ${data.firma} `;
    //  document.body.divek.append(divo); 
}
})

.fail(function (error) {
    console.error(error);
});

});

});