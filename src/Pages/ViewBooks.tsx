import { useState, useEffect, useCallback } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    authors?: string[];
    categories?: string[];
    publishedDate?: string;
  };
}

function ViewBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [borrowedBooks, setBorrowedBooks] = useState<Book[]>([]);
  const borrowLimit = 5; // Maximum number of books a user can borrow

  const booksPerPage = 10;
  const apiKey = 'AIzaSyCIpLqaue6CHIkAe2fjoEe0dB-MKMzeIuw';

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q={${searchTerm}}&startIndex=${
          (currentPage - 1) * booksPerPage
        }&maxResults=${booksPerPage}&key=${apiKey}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  }, [searchTerm, currentPage, booksPerPage, apiKey]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(1); // Reset to the first page when a new search is made
    fetchBooks();
  };

  const handleBorrow = (book: Book) => {
    const isBookAlreadyBorrowed = borrowedBooks.some((borrowedBook) => borrowedBook.id === book.id);
  
    if (isBookAlreadyBorrowed) {
      alert('This book has already been borrowed.');
    } else if (borrowedBooks.length < borrowLimit) {
      setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, book]);
    } else {
      alert(`You have reached the borrowing limit of ${borrowLimit} books.`);
    }
  };
  

  const handleRemoveBorrowedBook = (bookId: string) => {
    setBorrowedBooks((prevBorrowedBooks) =>
      prevBorrowedBooks.filter((book) => book.id !== bookId)
    );
  };

  const renderBooks = () => {
    if (books.length === 0) {
      return <p>No books found.</p>;
    }

    return books.map((book) => {
      const bookInfo = book.volumeInfo || {};
      const title = bookInfo.title || 'Unknown Title';
      // const description = bookInfo.description || 'No description available';
      // const truncatedDescription = description.split(' ').slice(0, 25).join(' ');
      const image =
        (bookInfo.imageLinks && bookInfo.imageLinks.thumbnail) ||
        'https://via.placeholder.com/150';
      const authors = bookInfo.authors || ['Unknown Author'];
      const subject = bookInfo.categories || ['Unknown Subject'];
      const publishYear = bookInfo.publishedDate || 'Unknown Publish Year';

      return (
        <div className="col-sm-6 col-md-4 col-lg-3" key={book.id}>
          <div className="card">
            <img src={image} className="card-img-top" alt="Book cover" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <strong>Author:</strong> {authors.join(', ')}
              </p>
              <p className="card-text">
                <strong>Subject:</strong> {subject.join(', ')}
              </p>
              <p className="card-text">
                {/* <strong>Description:</strong> {truncatedDescription} */}
              </p>
              <p className="card-text">
                <strong>Publish:</strong> {publishYear}
              </p>
              <button className="btn btn-primary" onClick={() => handleBorrow(book)}>
                Borrow
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderBorrowedBooks = () => {
    if (borrowedBooks.length === 0) {
      return <p>No books borrowed yet.</p>;
    }

    return borrowedBooks.map((book) => {
      const bookInfo = book.volumeInfo || {};
      const title = bookInfo.title || 'Unknown Title';

      return (
        <div key={book.id}>
          <h5 className="mr-2">{title}</h5>
          <button type="button" className="btn btn-danger" onClick={() => handleRemoveBorrowedBook(book.id)}>Remove</button>
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="search-box">
          <div className="col-12 mb-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Title, Author, Subject, or Publish Year"
              />
            </form>
          </div>
        </div>

        <div className="row">{renderBooks()}</div>

        <div className="row">
          <div className="col-12">
            <h3>Borrowed Books</h3>
            {renderBorrowedBooks()}
          </div>
        </div>

        <nav aria-label="Book Pagination">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={goToPreviousPage}>
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">{currentPage}</span>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={goToNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </>
  );
}

export default ViewBooks;
