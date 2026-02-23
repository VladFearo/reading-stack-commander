import { useState } from "react";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  const handleAddBook = () => {
    const title = "title";
    const author = "author";
    const newBook = { title, author };
    setBooks((prevBooks) => {
      if (prevBooks.length < 3) {
        return [...prevBooks, newBook];
      }
      return prevBooks;
    });
  };

  return (
    <div className="app-container">
      <h1>Reading Stack Commander</h1>
      <h2>Currently Reading ({books.length}/3)</h2>
      {[0, 1, 2].map((i) => {
        const book = books[i];

        return (
          <div key={i} className="book-slot">
            {book ? (
              <div>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <button
                  className="delete-button"
                  onClick={() => {
                    setBooks((prevBooks) =>
                      prevBooks.filter((_, index) => index !== i),
                    );
                  }}
                >
                  Delete
                </button>
              </div>
            ) : (
              <p>Empty slot</p>
            )}
          </div>
        );
      })}
      <button
        className="add-button"
        onClick={handleAddBook}
        disabled={books.length >= 3}
      >
        Add Book
      </button>
    </div>
  );
}

export default App;
