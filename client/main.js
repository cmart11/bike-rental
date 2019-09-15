console.log('main js compiled ok.');

const addToCart = async (e) => {
    e.preventDefault();
    // const product = products.filter(el => el.id === event.target.id)[0];
    const res = await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ productId: event.target.name })
    });
    const json = await res.json();
    console.log(json);
}
// const ul = document.getElementById('list');
// const buttons = document.getElementsByTagName('button');

// buttons.addEventListener('click', async e => {
//     e.preventDefault();
//     // const product = products.filter(el => el.id === event.target.id)[0];
//     const res = await fetch('http://localhost:8080/', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ productId: event.target.name })
//     });
//     const json = await res.json();
//     const li = document.createElement('li');
//     li.innerHTML = json.productId;
//     ul.appendChild(li);

// });
