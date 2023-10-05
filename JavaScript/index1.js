


function btn() {

    var li = document.createElement("li");

    const input = document.getElementById("input1").value.trim() ;
    
    const maintext = document.getElementsByClassName("main1");

    const text1 = document.createTextNode(input);
    // maintext.innerHTML = localStorage.getItem("value");

    
    li.appendChild(text1);

    document.getElementById("main1").appendChild(li);
    localStorage.setItem('value', JSON.stringify(input));
    maintext.innerHTML = localStorage.getItem("value");

       //maintext.textContent = localStorage.setItem('value', JSON.stringify(input))


    
    // document.getElementById("main1") = retrievedData;
    
}

// var data = localStorage.getItem('key');

// function btn() {
//     if(data !== null) {
//         var dataInput = document.getElementById("input1");
//         dataInput.value = data;
//     } else{
//         console.log("rubbish fuck you!");
//     }
// }
