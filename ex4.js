class library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element)
        });
    }
    issueBook(bookName, user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] = user;
        }
        else{
            console.log('this book is already issued');
        }
    }
    returnBook(bookName){
        if(this.issuedBooks[bookName] != undefined){

            delete this.issuedBooks[bookName];
        }
        else{
            console.log('book is not issued');
        }
        
    }
}
myLib = new library(['Harry Porter', 'Hemlet', 'Aazad']);
