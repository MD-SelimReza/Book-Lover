import toast from "react-hot-toast"

export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}
export const saveBook = book => {
    let books = getBooks()
    const isExist = books.find(b => b.bookId === parseInt(book.bookId))
    if (isExist) {
        return toast.error('Already Bookmarked!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Bookmarked Successfully!')
}


export const getWish = () => {
    let books = []
    const storedBooks = localStorage.getItem('wish')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveWish = book => {
    let books = getWish()
    const isExist = books.find(b => b.bookId === parseInt(book.bookId))
    if (isExist) {
        return toast.error('Already Bookmarked!')
    }
    books.push(book)
    localStorage.setItem('wish', JSON.stringify(books))
    toast.success('Book Bookmarked Successfully!')
}

