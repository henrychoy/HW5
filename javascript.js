/*jshint esversion: 6 */


const request = new XMLHttpRequest();
request.open('GET', 'https://henrychoy.github.io/HW5/degrees.json');
request.onload = function () {
    const data = JSON.parse(request.responseText);
    console.log(data[0]);
}


request.send();