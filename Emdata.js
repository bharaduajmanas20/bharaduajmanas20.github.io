
function g(val) {
    var str = "";
    str = str + '<table class="table table-bordered">';
    str = str + '<thead>';
    str = str + '<tr><th scope="col">Employee ID</th><th scope="col">Name</th><th scope="col">Place</th><th scope="col">State</th></tr>';
    str = str + '</thead>';
    str = str + '<tbody>';
    if(val=="0") {
        var n = parseInt(document.getElementById("ids").value);
        n = n-101;
        str = str + '<tr><th scope="row">'+ parseInt(101+n)+'</th><td>'+ data[n].Fname +'</td><td>'+ data[n].Place +'<td>'+ data[n].State +'</tr>'     
   
        
    }
   else if(val == "odd")
    {
        for(i=0; i<data.length; i=i+2){
        str = str + '<tr><th scope="row">'+parseInt(101+i)+'</th><td>'+ data[i].Fname +'</td><td>'+ data[i].Place +'<td>'+ data[i].State +'</tr>'
    }
    }
    else if(val=="even")
    {
        for(i=1; i<data.length; i=i+2){
            str = str + '<tr><th scope="row">'+parseInt(101+i)+'</th><td>'+ data[i].Fname +'</td><td>'+ data[i].Place +'<td>'+ data[i].State +'</tr>'
        } 
        
    }
    else 
    {
        for(i=0; i<data.length; i++){
            str = str + '<tr><th scope="row">'+parseInt(101+i)+'</th><td>'+ data[i].Fname +'</td><td>'+ data[i].Place +'<td>'+ data[i].State +'</tr>'
        }  
    }
    str = str + '</tbody>';
    str = str + '</table>';
    console.log(str);
    document.getElementById("show").innerHTML = str;
}

function clearIt() {

    document.getElementById("show").innerHTML = "";

}
var data = [
      {
          "Fname" : "Manas",
          "Lname" : "Bharadwaj",
          "Place" : "Muzaffarpur",
          "State" : "Bihar"
      },
      {
        "Fname" : "Virendra",
        "Lname" : "Sehwag",
        "Place" : "Najafgarh",
        "State" : "Delhi"
    },
    {
        "Fname" : "Jorginho",
        "Lname" : "Luiz",
        "Place" : "Verona",
        "State" : "Alessandria"
    },
    {
        "Fname" : "Ghanshyam",
        "Lname" : "Bhatt",
        "Place" : "Lucknow",
        "State" : "Uttar Pradesh"
    },
    {
        "Fname" : "Udhay",
        "Lname" : "Rockstar",
        "Place" : "Bangalore",
        "State" : "Karnataka"
    },
    {
        "Fname" : "Kevin",
        "Lname" : "Debruyne",
        "Place" : "Antwerp",
        "State" : "Limburg"
    },
    {
        "Fname" : "Raunak",
        "Lname" : "Mishra",
        "Place" : "Muzaffarpur",
        "State" : "Bihar"
    },
    {
        "Fname" : "Preeti",
        "Lname" : "Pallavi",
        "Place" : "Bhubaneshwar",
        "State" : "Odisha"
    },
    {
        "Fname" : "Ishan",
        "Lname" : "Kishan",
        "Place" : "Patna",
        "State" : "Bihar"
    },
    {
        "Fname" : "Prakash",
        "Lname" : "Bharadwaj",
        "Place" : "Bhagalpur",
        "State" : "Bihar"
    }
];