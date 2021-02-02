// Using Promise resolve and reject functions

function fetching(){
    return new Promise(function(resolve, reject){
        const error = true;
        if(error){
            console.log("No errors");
            resolve();
        }
        else{
            console.log("Some error occured!");
            reject();
        }
    });
}

function whenResolve(){
    console.log('This is whenResolve function ran instead of resolve()');
}
function whenReject() {
    console.log('This is whenReject function ran instead of reject()');
}
// calling main function
fetching().then(whenResolve).catch(whenReject);