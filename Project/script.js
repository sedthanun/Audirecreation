    let requestURL = 'audi.json'; 
    let request = new XMLHttpRequest(); 
    request.onreadystatechange = function () { 
    if (request.readyState == 4 && request.status == 200) {             
        dataReportStatus(request.responseText);            
    } }; 
    request.open("GET", requestURL, true); 
    request.send(); 
    function dataReportStatus(data) { 
        data = JSON.parse(data); 
        document.getElementById("body").innerHTML = "<img src='./image/"+data[0].image[0]+"'>"; 
    }
