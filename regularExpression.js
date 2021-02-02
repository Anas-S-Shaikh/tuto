console.log("Exploring the functions of regular expression in javascript");
let reg = /Anas/;
reg = /Anas/g; // g means global
// reg = /Anas/i; // i means case insensitive

let str = "Hi, I am Anas Shaikh. You can call me Anas";

// Returns the array for match or null 
let result = reg.exec(str);
// console.log(result);
// console.log(result.index); //returns the index of match
result = reg.exec(str);
// console.log(result);

//returns true if reg matched or else false
result = reg.test(str);
// console.log(result);

//returns the aray of results if matches found else null
result = str.match(reg);
// console.log(result);

//returns the index of reg in the input string if present else returns -1
result = str.search(reg)
// console.log(result);

//replaace the reg value with given string and return updated string
result = str.replace(reg, "Ansu")
// console.log(result);



//using matacharacter symbols
let regex = /Anas/;
// let regex = /^Anas/; // will be matched if string starts with this
// regex = /Anas$/; // will be matched if string ends with this
// regex = /A.as/; // matches if any one character is present in place of .(dot) 
// regex = /A*as/; // matches if 0 or more character is present in place of *
// regex = /An?as?/; // the character after ? is optional
// regex = /Anas\*/; // \(backslash) before the character for its actual value (Escape seq)

// let str1 = 'Hello, my name is Anas Shaikh'

// let result1 = str1.match(regex);
// console.log(result1);

// if (regex.test(str1)) {
//     console.log('Reguler expression matched!')
// } else {
//     console.log('Reguler expression not matched!')
// }


// Using Charset in regular expression 

// regex = /[A-Z]nas/; // can be any from A to Z (Capital)
// regex = /[^bc]nas/; // can be anything except b, c
// regex = /[^bc]na[0-9a-z]/; // can be anything except b, c + can be anything form 0 to 9 or a to z

//  Using Quntifier 

// regex = /Anas{2}/; // s must be exacatly two times
// regex = /Anas{0,2}/; // s must be exacatly 0,1 or 2 times

//Grouping in charset

// regex = /(An){2}a[a-z]/; // (An) must be exacatly 2 times + can be any from a to z

let str1 = 'Hello, my name is Anas Shaikh'

let result1 = str1.match(regex);
console.log(result1);

if (regex.test(str1)) {
    console.log('Reguler expression matched!')
} else {
    console.log('Reguler expression not matched!')
}
