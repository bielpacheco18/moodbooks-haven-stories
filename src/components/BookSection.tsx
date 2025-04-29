
import { BookCard } from "./BookCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BookSectionProps {
  title: string;
  books: Array<{
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    mood: "happy" | "calm" | "reflective" | "excited" | "melancholy";
    rating?: number;
  }>;
  viewAllLink?: string;
  className?: string;
}

export function BookSection({ title, books, viewAllLink, className }: BookSectionProps) {
  return (
    <section className={cn("py-8", className)}>
      <div className="container">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-semibold">{title}</h2>
          {viewAllLink && (
            <Button variant="ghost" size="sm" asChild>
              <Link to={viewAllLink}>View all</Link>
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
