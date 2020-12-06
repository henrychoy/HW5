/*jshint esversion: 6 */

const displayContainer = document.getElementById("display");
document.getElementById("btn").addEventListener('click', loadDegrees);

function loadDegrees() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://henrychoy.github.io/HW5/degrees.json', true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);


            let htmlString = "";
            for (let i=0; i < data.my_college_degrees.length; i++){
                htmlString += `<tr>
                                <td>${data.my_college_degrees[i].School}</td>
                                <td>${data.my_college_degrees[i].Major}</td>
                                <td>${data.my_college_degrees[i].Type}</td>
                                <td>${data.my_college_degrees[i].Year_Complete}</td>
                               </tr>`
            }

            displayContainer.insertAdjacentHTML("beforeend", htmlString);
            document.getElementById("btn").disabled = true;
        }
        else{
            console.log("Error loading data. Please reach out to Henry Choy.")
        }
    }
    request.send();

}
