const getStoredBook = () =>{
    const storedBook = localStorage.getItem("Job-Application");
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBook = id =>{
    const storedBook = getStoredBook();
    const exist = storedBook.find(bookId => bookId === id);
    if(!exist){
        storedBook.push(id);
        localStorage.setItem("Job-Application", JSON.stringify(storedBook));
    }
}

export {getStoredBook, saveBook}