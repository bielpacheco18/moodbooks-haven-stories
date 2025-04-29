
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { BookSection } from "@/components/BookSection";
import { MoodTag } from "@/components/MoodTag";
import { BookCard } from "@/components/BookCard";
import { useState } from "react";
import { 
  booksData, 
  happyBooks, 
  calmBooks,
  reflectiveBooks, 
  excitedBooks, 
  melancholyBooks 
} from "@/data/mockData";

const moods = [
  { id: "all", label: "All Moods" },
  { id: "happy", label: "Happy" },
  { id: "calm", label: "Calm" },
  { id: "reflective", label: "Reflective" },
  { id: "excited", label: "Excited" },
  { id: "melancholy", label: "Melancholy" },
];

const Index = () => {
  const [selectedMood, setSelectedMood] = useState("all");

  const getFilteredBooks = () => {
    switch (selectedMood) {
      case "happy":
        return happyBooks;
      case "calm":
        return calmBooks;
      case "reflective":
        return reflectiveBooks;
      case "excited":
        return excitedBooks;
      case "melancholy":
        return melancholyBooks;
      default:
        return booksData;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="py-8">
          <div className="container">
            <h2 className="font-heading text-2xl font-semibold mb-4">Browse by Mood</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {moods.map((mood) => (
                <MoodTag
                  key={mood.id}
                  mood={mood.id === "all" ? "happy" : mood.id as any}
                  label={mood.label}
                  isActive={selectedMood === mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {getFilteredBooks().map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </section>

        <BookSection
          title="Recently Added"
          books={booksData.slice(0, 6)}
          viewAllLink="/books/recent"
        />

        <BookSection
          title="Popular in Reflective"
          books={reflectiveBooks}
          viewAllLink="/mood/reflective"
          className="bg-muted/50"
        />

        <BookSection
          title="Feel-Good Reads"
          books={happyBooks}
          viewAllLink="/mood/happy"
        />
      </main>

      <footer className="bg-card py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="font-heading text-xl font-semibold">MoodBooks</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Find books that match your mood</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div>
                <h3 className="font-heading font-medium mb-2">Navigation</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="/" className="text-muted-foreground hover:text-foreground">Home</a></li>
                  <li><a href="/explore" className="text-muted-foreground hover:text-foreground">Explore</a></li>
                  <li><a href="/login" className="text-muted-foreground hover:text-foreground">Login</a></li>
                  <li><a href="/register" className="text-muted-foreground hover:text-foreground">Sign up</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-medium mb-2">Moods</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="/mood/happy" className="text-muted-foreground hover:text-foreground">Happy</a></li>
                  <li><a href="/mood/calm" className="text-muted-foreground hover:text-foreground">Calm</a></li>
                  <li><a href="/mood/reflective" className="text-muted-foreground hover:text-foreground">Reflective</a></li>
                  <li><a href="/mood/excited" className="text-muted-foreground hover:text-foreground">Excited</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MoodBooks. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

// Missing import - creating it here
function BookOpen(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
