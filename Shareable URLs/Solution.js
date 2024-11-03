// javascript code goes here

function urlUpdater(){
let display = document.getElementById('url');
let inputname = document.getElementById('name').value; 
let year = document.getElementById('year').value;



    if(inputname && year){
        display.textContent = `https://localhost:8080/?name=${inputname}&year=${year}`
    }else if (inputname){
      display.textContent = `https://localhost:8080/?name=${inputname}`
    }else{
        display.textContent = `https://localhost:8080/?year=${year}`
    }
    

    //using url constructor
    //   let baseUrl = "https://localhost:8080/";
    // let url = new URL(baseUrl);

  
    // if (inputname) {
    //     url.searchParams.append("name", name);
    // }
    // if (year) {
    //     url.searchParams.append("year", year);
    // }

  
    // display.textContent = url.toString();
}
