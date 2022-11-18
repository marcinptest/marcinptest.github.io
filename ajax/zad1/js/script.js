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

}
})

.fail(function (error) {
    console.error(error);
});

});

});