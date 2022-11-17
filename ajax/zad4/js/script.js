

let endOfThePage = 0;

let preloading = false;

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
    preloading = true;

}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloading = false;

}

const getData = () => {

    if (!preloading) {

        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {

                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);


                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = ` User Id: ${user.id}`;
                    pName.innerText = ` User Name: ${user.name}`;
                    pWebsite.innerHTML = ` User Website: ${user.website}<br>----------`;

                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);

                }

                preloading = false;

                hidePreloader();

                console.log(data);
            })

            .catch(error => {
                console.error(error);
            });

    }
}


const scrollToEndOfPage = () => {

    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`suma: ${sumScrollTopClientHeight}`);

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage += 1;

        console.log(`to koniec strony: ${endOfThePage}`);


        getData();

    };



}

window.addEventListener('scroll', scrollToEndOfPage);