function Submit() {
   var inputVal = document.getElementById("firstInput").value;
   var inputVal1 = document.getElementById("secondInput").value;
   var inputVal2 = document.getElementById("thirdInput").value;
   if(inputVal == '') {
    const input1 = document.getElementById("firstInput").style.borderColor = "red";
    const input2 = document.getElementById("secondInput").style.borderColor = "red";
    const input3 = document.getElementById("thirdInput").style.borderColor = "red";

    console.log("Required section is empty! try again.");
   }else{
    //This is for the First Input Box
    var newPage = document.getElementById("containers").style.display = "block";
    var newPage1 = document.getElementById("bdy1").style.display = "none";
    const Text = document.createElement("h3");
    const fatherText = document.getElementById("refInput1");
    const btn = document.getElementById("download").style.display = "block";
    const inputColor  = document.getElementById("input1").style.backgroundColor = "none";
    const doc = document.getElementById("done").style.display = "none";

    const text1 = document.createTextNode(inputVal);
    Text.appendChild(text1);
//displays value from input box to choosen element
    document.getElementById("refInput1").appendChild(Text);

    localStorage.setItem('star', inputVal);
//This is the next Input Box 
    const Text1 = document.createElement("h3");
    const text2 = document.createTextNode(inputVal1);
    Text1.appendChild(text2);

    document.getElementById("refInput2").appendChild(Text1);

    localStorage.setItem('star1', inputVal1);
    
    //This is for the last input box
   
    const Text2 = document.createElement("h3");
    const text3 = document.createTextNode(inputVal2);
    Text2.appendChild(text3);

    document.getElementById("refInput3").appendChild(Text2);

    localStorage.setItem('star2', inputVal2);

   }
}




//To store data on webpage 
function storedDisplay() {
    const storeddata = localStorage.getItem("star");
    const reader = document.getElementById("refInput1");

    if (storeddata) {
        localStorage.removeItem("star");
        reader.textContent = `${storeddata}`;
        const mainreader = document.getElementById("refInput1").style.fontSize = "30px";
        localStorage.removeItem("star");

   

    } else {
        console.log("fuck you");
    }
}

storedDisplay();

function Checkdata() {
    const display = document.getElementById("containers").style.display = "block";
    const display2 = document.getElementById("bdy1").style.display = "none";
}
//This is for input box 2 to store data on webpage
function storedDisplay2() {
   const storeddata1 = localStorage.getItem("star1");
    const reader1 = document.getElementById("refInput2");

    if (storeddata1) {
        localStorage.removeItem("star1");
        reader1.textContent = `${storeddata1}`;
        const mainreader1 = document.getElementById("refInput2").style.fontSize = "25px";
        localStorage.removeItem("star1");
    } else {
        console.log("scared");

    }
}

storedDisplay2();

function storedDisplay3() {
    const storeddata2 = localStorage.getItem("star2");
    const reader2 = document.getElementById("refInput3");

    if (storeddata2) {
        localStorage.removeItem("star2");
        reader2.textContent = `${storeddata2}`;
        const mainreader2 = document.getElementById("refInput3").style.display = "block";
        

        function Done() {
        localStorage.removeItem("star2");
            
        }
    } else {
        console.log("scared");
    }
}

storedDisplay3();


function Downloadbtn() {
    const content = document.getElementById("containers");
    const content1 = document.getElementById("refInput1").value;
    const a= document.createElement("a");

    if(content1 !== '') {
        content.style.fontSize = "100px";
        content.style.textTransform = "capitalize";
       // const styledDownload = '<html>' + document.head.innerHTML + content.outerHTML + '<html>';
        const mainblob = new Blob([content.outerHTML], {type: 'text/html'});
        
        
        a.href = URL.createObjectURL(mainblob);
        a.download = 'downloaded-content.html';

      
        
    } else{
        console.log("wrong");
    }

    a.click();

    
}
     
function Done() {
    alert("You have Done Great!");

}
const  remove = document.getElementById("done");
remove.addEventListener('click', Done);