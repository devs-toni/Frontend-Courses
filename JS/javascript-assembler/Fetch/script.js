document.getElementById("data").addEventListener('click', doFetch);

let md5 = 'f14bd67e51e6a982a3799ad85ed0d6a6';

function doFetch() {
    fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=068a9b25d9e49d374c0101bee790e361&hash=f14bd67e51e6a982a3799ad85ed0d6a6', {
        method: "GET",
    }).then(res => {
        res.ok ? res.json().then(data => {
            console.log(data.data.results);
  /*           data.forEach(element => {
                console.log(element);
                const list = document.createElement('li');
                list.textContent = element.name;
                document.getElementById('users').appendChild(list);
            }); */
        }) : Promise.reject({
            error: true,
            status: res.status || '00',
            statusText: res.statusText || 'Error!'
        })
    })
}
