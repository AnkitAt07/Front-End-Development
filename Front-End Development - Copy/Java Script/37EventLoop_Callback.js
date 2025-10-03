console.log("Hii- 1");

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

function greet() {
    console.log("Good Morning:");
}

// greet();

setTimeout(function () {
    console.log("Hello");
}, 0);



console.log("Hii- 2");


function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        let data = { id: 1, name: "Piyush" };
        callback(data);
    }, 3000);
}

function displayData(user) {
    console.log("User Data:", user);
}

fetchData(displayData);
