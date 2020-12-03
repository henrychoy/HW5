/*jshint esversion: 6 */

document.getElementById("btn").addEventListener('click', loadDegrees);

function loadDegrees() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://henrychoy.github.io/HW5/degrees.json', true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            const degree = data.my_college_degrees;
            console.log(degree);


            let output='';
            for(let i=0; i < degree.length; i++){
                output += '<li>'+JSON.stringify(degree[i])+'</li>'
            }
            document.getElementById("display").innerHTML = output;

        }
    }
    request.send();

}







