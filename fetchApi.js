console.log("working");
// GET Request

// function fetchData() {
//     const url = 'https://reqres.in/api/users?page=2';
//     fetch(url).then(Response => Response.json()).then(data => console.log(data));   
// }
// fetchData();

// POST Request

function fetchData() {
    const url = 'https://reqres.in/api/users';
    let data = `{"name": "BloodHacker","job":"leader"}`
    let params = {
        method: 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: data  //here data should be in string
    }
    
    fetch(url,params).then(response => response.json()).then(data => console.log(data));   
}
fetchData();
