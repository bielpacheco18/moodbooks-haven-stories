
import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookCard } from "@/components/BookCard";
import { booksData } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    bio: "Book lover, coffee enthusiast. Always searching for stories that make you think.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    joinedDate: "January 2023",
    booksRead: 24,
    readingGoal: 30,
    favoriteBooks: booksData.slice(0, 3),
    currentlyReading: booksData.slice(3, 4),
    wantToRead: booksData.slice(4, 7),
    recentReviews: [
      {
        id: "1",
        bookId: "1",
        bookTitle: "The Midnight Library",
        rating: 4.5,
        date: "2023-04-10",
        content: "This book changed my perspective on life. The concept of experiencing different life paths is so well executed.",
      },
      {
        id: "2",
        bookId: "3",
        bookTitle: "Klara and the Sun",
        rating: 4.0,
        date: "2023-03-22",
        content: "A thought-provoking exploration of artificial intelligence and what it means to be human. Slow-paced but deeply moving.",
      },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-card rounded-lg shadow-sm p-6 border">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="font-heading text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">Joined {user.joinedDate}</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-center italic text-sm mb-4">{user.bio}</p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-muted-foreground text-sm">Read</p>
                    <p className="text-xl font-semibold">{user.booksRead}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-muted-foreground text-sm">Goal</p>
                    <p className="text-xl font-semibold">{user.readingGoal}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                  <Button variant="ghost" className="w-full text-destructive hover:text-destructive">Sign Out</Button>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <Tabs defaultValue="books">
                <TabsList className="mb-6">
                  <TabsTrigger value="books">Books</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="books" className="space-y-8">
                  {/* Currently Reading */}
                  <section>
                    <h3 className="font-heading text-xl font-semibold mb-4">Currently Reading</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {user.currentlyReading.map((book) => (
                        <BookCard key={book.id} {...book} />
                      ))}
                    </div>
                  </section>

                  {/* Favorites */}
                  <section>
                    <h3 className="font-heading text-xl font-semibold mb-4">Favorites</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {user.favoriteBooks.map((book) => (
                        <BookCard key={book.id} {...book} />
                      ))}
                    </div>
                  </section>

                  {/* Want to Read */}
                  <section>
                    <h3 className="font-heading text-xl font-semibold mb-4">Want to Read</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {user.wantToRead.map((book) => (
                        <BookCard key={book.id} {...book} />
                      ))}
                    </div>
                  </section>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <h3 className="font-heading text-xl font-semibold mb-4">Your Reviews</h3>
                  <div className="space-y-6">
                    {user.recentReviews.map((review) => (
                      <div key={review.id} className="bg-card rounded-lg shadow-sm p-4 border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-heading font-medium">{review.bookTitle}</h4>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-4 w-4 text-yellow-500"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="ml-1 text-sm">{review.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {new Date(review.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
