function loadData2() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUser() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(user => displayUser(user));
}

function displayUser(data) {
    console.log(data);
}