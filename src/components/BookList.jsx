import useBookContext from '../hooks/use-book-context';
import BookShow from './BookShow';

export default function BookList() {
  const { books } = useBookContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}
