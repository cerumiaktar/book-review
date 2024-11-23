import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/localstorage";


const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);


    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            // ====1st rule
            // const readBook = books.filter(book=> storedBookIds.includes(book.id))
            // setReadBooks(readBook)


            // 2nd rule
            const readBook = [];
            for (const id of storedBookIds) {
                const book = books.find(job => job.id === id)
                if (book) {
                    readBook.push(book)
                }
            }

            setReadBooks(readBook);
            setDisplayBooks(readBook);

            // console.log(books, storedBookIds, readBook);
        }
    }, [books])
    return (
        <div>
            <h1>This read list:{readBooks.length}</h1>
            {
                displayBooks.map(book => <p>{book.bookName}</p>)
            }
            
        </div>
    );
};

export default ListedBooks;