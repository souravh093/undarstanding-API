function loadUser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))
}

function displayUser2(user) {

        const ul = document.getElementById('user-lists');
        for (const item of user) {
            const li = document.createElement('li');
            li.innerText = item.name;
            ul.appendChild(li);
        }
    
}


document.getElementById('helloThis').addEventListener('click', function(){
    console.log(this);
})

document.getElementById('helloThis').addEventListener('click', () => console.log(this))

