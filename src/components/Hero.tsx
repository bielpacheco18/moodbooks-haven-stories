
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-muted/50 py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Discover Books That Match Your Mood
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl mx-auto max-w-2xl animate-slide-in">
            Find your next perfect read based on how you feel today. MoodBooks connects readers with stories that resonate with their current emotional state.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/explore">Explore Books</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50"></div>
    </section>
  );
}
