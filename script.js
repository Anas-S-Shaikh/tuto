let name = "anas";
console.log("Links which contains " + name + " are ");
Array.from(document.links).forEach(function(element){
    let a = element.href;
    if (a.includes(name)) {
        console.log(a);    
    }
});
