import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/localstorage";


const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() =>{
        const storedBookIds = getStoredBook();
        if(books.length > 0){
            const readBook = books.filter(book=> storedBookIds.includes(book.id))
            setReadBooks(readBook)
        }
    } ,[])
    return (
        <div>
            <h1>This read list:{readBooks.length}</h1>
        </div>
    );
};

export default ListedBooks;