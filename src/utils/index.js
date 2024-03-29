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
        return toast.error('Already add this book!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book successfully added the read list!')
}

export const getRatings = () => {
    let ratings = []
    const storedRatings = localStorage.getItem('ratings')
    if (storedRatings) {
        ratings = JSON.parse(storedRatings)
    }
    return ratings
}
export const saveRating = rating => {
    let ratings = getBooks()
    const isExist = ratings.find(r => r === parseInt(rating))
    if (isExist) {
        return ratings;
    }
    ratings.push(rating)
    localStorage.setItem('ratings', JSON.stringify(ratings))
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
        return toast.error('Already add this book!')
    }
    books.push(book)
    localStorage.setItem('wish', JSON.stringify(books))
    toast.success('Book successfully added the read list!')
}

// export const getId = ()=>{
//     let bookId = []
//     const storedId = localStorage.getItem('id')
//     if(storedId){
//         bookId = J
//     }
// }


