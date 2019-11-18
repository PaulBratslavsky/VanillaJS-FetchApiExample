console.log('Using Fetch');

const button1   = document.getElementById('button1');
const button2   = document.getElementById('button2');
const button3   = document.getElementById('button3');
const output    = document.getElementById('output');


button1.addEventListener('click', getText);
button2.addEventListener('click', getJSON);
button3.addEventListener('click', getAPI);


function getText() {
    console.log('Button 1 Cliked');
    fetch('text.txt')
    .then( response => {
        //console.log(response);
        return response.text();
    })
    .then( data => {
        //console.log(data);
        output.innerHTML= `<p>${data}</p>`;

    })
    .catch( error => {
        console.log(error);
    });
}

function getJSON() {
    console.log('Button 2 Cliked');
    fetch('post.json')
    .then( response => {
        //console.log(response);
        return response.json();
    })
    .then( data => {
        //console.log(data);

        data.map( ( post => {
            const div = document.createElement('div');

            div.innerHTML = `
                <h4 style="margin: 0">${post.title}</h4>
                <p>${post.content}</p>
            `;

            output.appendChild(div);
        }));

    })
    .catch( error => {
        console.log(error)
    });
}

function getAPI() {
    console.log('Button 3 Cliked');
    fetch('https://api.github.com/users')
    .then( response => {
        console.log(response);
        return response.json();
    })
    .then( users => {
        console.log(users);
        let inner = '';
        users.map( user => {
            inner += `<li>${user.login}</li>`
        });
        console.log(inner);
        output.innerHTML = inner;
    })
    .catch( error => {
        console.log(error);
    });
}