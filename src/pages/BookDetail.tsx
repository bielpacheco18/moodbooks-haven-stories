import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { MoodTag } from "@/components/MoodTag";
import { booksData } from "@/data/mockData";
import { useEffect, useState } from "react";
import { BookType } from "@/data/mockData";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { BookmarkCheck, ShoppingCart } from "lucide-react";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isMarkedAsRead, setIsMarkedAsRead] = useState(false);
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Find the book with the matching ID
    const foundBook = booksData.find(book => book.id === id);
    if (foundBook) {
      setBook(foundBook);

      // Check if book is already in cart or marked as read
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const readBooks = JSON.parse(localStorage.getItem("readBooks") || "[]");
      
      setIsInCart(cartItems.some((item: string) => item === foundBook.id));
      setIsMarkedAsRead(readBooks.some((item: string) => item === foundBook.id));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!book) return;

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    
    if (!isInCart) {
      const updatedCart = [...cartItems, book.id];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setIsInCart(true);
      toast.success(`"${book.title}" added to your reading list`);
    } else {
      const updatedCart = cartItems.filter((item: string) => item !== book.id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setIsInCart(false);
      toast.info(`"${book.title}" removed from your reading list`);
    }
  };

  const handleMarkAsRead = () => {
    if (!book) return;

    const readBooks = JSON.parse(localStorage.getItem("readBooks") || "[]");
    
    if (!isMarkedAsRead) {
      const updatedReadBooks = [...readBooks, book.id];
      localStorage.setItem("readBooks", JSON.stringify(updatedReadBooks));
      setIsMarkedAsRead(true);
      toast.success(`"${book.title}" marked as read`);
    } else {
      const updatedReadBooks = readBooks.filter((item: string) => item !== book.id);
      localStorage.setItem("readBooks", JSON.stringify(updatedReadBooks));
      setIsMarkedAsRead(false);
      toast.info(`"${book.title}" unmarked as read`);
    }
  };

  // Fallback image based on mood
  const getFallbackImage = (mood: string) => {
    switch (mood) {
      case "happy":
        return "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "calm":
        return "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "reflective":
        return "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "excited":
        return "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "melancholy":
        return "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
  };

  const handleRelatedBookImageError = (bookId: string) => {
    setErrorImages(prev => ({ ...prev, [bookId]: true }));
  };

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-16 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-heading font-semibold mb-4">Book not found</h1>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't find the book you're looking for.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container py-8 flex-1">
        <Link to="/" className="text-sm flex items-center mb-6 text-muted-foreground hover:text-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to browsing
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Book Cover */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="aspect-[2/3] rounded-lg overflow-hidden bg-muted shadow-md">
              <img
                src={imageError ? getFallbackImage(book.mood) : book.coverUrl}
                alt={book.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="md:col-span-8 lg:col-span-9">
            <h1 className="font-heading text-3xl font-semibold mb-2">{book.title}</h1>
            <h2 className="text-xl text-muted-foreground mb-4">{book.author}</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <MoodTag mood={book.mood} label={book.mood.charAt(0).toUpperCase() + book.mood.slice(1)} />
              
              {book.rating && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500 mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="font-medium">{book.rating.toFixed(1)}</span>
                </div>
              )}
              
              {book.year && (
                <span className="text-muted-foreground">Published {book.year}</span>
              )}
            </div>

            <div className="mb-8">
              <h3 className="font-heading text-xl font-medium mb-3">About this book</h3>
              <p className="text-muted-foreground leading-relaxed">
                {book.description || "No description available for this book."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={handleAddToCart}
                variant={isInCart ? "secondary" : "default"}
              >
                <ShoppingCart className="mr-2" />
                {isInCart ? "Remove from Reading List" : "Add to Reading List"}
              </Button>
              
              <Button 
                onClick={handleMarkAsRead} 
                variant={isMarkedAsRead ? "secondary" : "outline"}
              >
                <BookmarkCheck className="mr-2" />
                {isMarkedAsRead ? "Unmark as Read" : "Mark as Read"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-xl font-semibold mb-6">You might also like</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {booksData
              .filter(relatedBook => relatedBook.mood === book.mood && relatedBook.id !== book.id)
              .slice(0, 5)
              .map(relatedBook => (
                <div key={relatedBook.id} className="group">
                  <Link to={`/book/${relatedBook.id}`}>
                    <div className="mb-2 aspect-[2/3] overflow-hidden rounded bg-muted">
                      <img
                        src={errorImages[relatedBook.id] ? getFallbackImage(relatedBook.mood) : relatedBook.coverUrl}
                        alt={relatedBook.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={() => handleRelatedBookImageError(relatedBook.id)}
                      />
                    </div>
                    <h4 className="font-medium line-clamp-1">{relatedBook.title}</h4>
                    <p className="text-sm text-muted-foreground">{relatedBook.author}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </main>

      <footer className="bg-card py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MoodBooks. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BookDetail;
