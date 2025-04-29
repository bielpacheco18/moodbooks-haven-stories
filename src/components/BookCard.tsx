
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { MoodTag } from "./MoodTag";
import { useState } from "react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  mood: "happy" | "calm" | "reflective" | "excited" | "melancholy";
  rating?: number;
  className?: string;
}

export function BookCard({
  id,
  title,
  author,
  coverUrl,
  mood,
  rating,
  className,
}: BookCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image based on mood
  const getFallbackImage = () => {
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

  return (
    <div className={cn("book-card group", className)}>
      <Link to={`/book/${id}`}>
        <div className="book-cover mb-3 relative h-48 overflow-hidden rounded-md bg-muted">
          <img
            src={imageError ? getFallbackImage() : coverUrl}
            alt={`${title} by ${author}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </div>
        <h3 className="font-heading text-base font-medium line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{author}</p>
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <MoodTag mood={mood} label={mood.charAt(0).toUpperCase() + mood.slice(1)} />
        {rating && (
          <div className="flex items-center text-sm">
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
            <span className="ml-1">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
