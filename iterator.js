function myIterator(values){
    let nextIndex = 0;
    return {
        next: function(){
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}
const arr = ['apple','samsung','nokia','asus']
let phones = myIterator(arr);
console.log(phones.next());
console.log(phones.next());
console.log(phones.next());
console.log(phones.next());
console.log(phones.next());