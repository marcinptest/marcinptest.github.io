$(document).ready(function () {

    $('#get-data').click(function () {

        // wariant 1
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                let info = "Wariant 1";
                let pId = $('<p></p>').text(`Post Id: ${data.id}`);
                let pUserId = $('<p></p>').text(`User Id: ${data.userid}`);
                let pTitle = $('<p></p>').text(`Title : ${data.title}`);
                let pBody = $('<p></p>').text(`Body  : ${data.body}`);
                let hr = $('<hr></hr>');

                let jqBody = $('body');

                jqBody.append(info);
                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);

            })

            .fail(function (error) {
                console.error(error);
            });

// wariant 2

$.getJSON('https://akademia108.pl/api/ajax/get-post.php')
.done(function (data) {
    let info = "Wariant 2";
    let pId = $('<p></p>').text(`Post Id: ${data.id}`);
    let pUserId = $('<p></p>').text(`User Id: ${data.userid}`);
    let pTitle = $('<p></p>').text(`Title : ${data.title}`);
    let pBody = $('<p></p>').text(`Body  : ${data.body}`);
    let hr = $('<hr></hr>');

    let jqBody = $('body');

    jqBody.append(info);
    jqBody.append(pId);
    jqBody.append(pUserId);
    jqBody.append(pTitle);
    jqBody.append(pBody);
    jqBody.append(hr);

})

.fail(function (error) {
    console.error(error);
});

});

});