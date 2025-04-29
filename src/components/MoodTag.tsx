
import { cn } from "@/lib/utils";

interface MoodTagProps {
  mood: "happy" | "calm" | "reflective" | "excited" | "melancholy";
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MoodTag({
  mood,
  label,
  isActive = false,
  onClick,
  className,
}: MoodTagProps) {
  return (
    <button
      className={cn(
        "mood-tag",
        `mood-tag-${mood}`,
        isActive && "ring-2 ring-primary/70",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
