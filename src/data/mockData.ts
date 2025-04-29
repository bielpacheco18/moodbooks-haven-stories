
export interface BookType {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  mood: "happy" | "calm" | "reflective" | "excited" | "melancholy";
  description?: string;
  rating?: number;
  year?: number;
}

export const booksData: BookType[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    mood: "reflective",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.2,
    year: 2020
  },
  {
    id: "2",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80",
    mood: "excited",
    description: "Ryland Grace is the sole survivor on a desperate mission—and if he fails, humanity and the earth itself will perish.",
    rating: 4.7,
    year: 2021
  },
  {
    id: "3",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverUrl: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
    mood: "melancholy",
    description: "From her place in the store, Klara, an Artificial Friend, observes the behavior of those who come in to browse.",
    rating: 4.0,
    year: 2021
  },
  {
    id: "4",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    coverUrl: "https://images.unsplash.com/photo-1682687219570-4c596363fd96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    mood: "happy",
    description: "A magical island. A dangerous task. A burning secret.",
    rating: 4.5,
    year: 2020
  },
  {
    id: "5",
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    coverUrl: "https://images.unsplash.com/photo-1581154318133-9042e0bfeec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    mood: "calm",
    description: "In 1922, Count Alexander Rostov is deemed an unrepentant aristocrat by a Bolshevik tribunal.",
    rating: 4.3,
    year: 2016
  },
  {
    id: "6",
    title: "Piranesi",
    author: "Susanna Clarke",
    coverUrl: "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    mood: "reflective",
    description: "Piranesi lives in the House. Perhaps he always has.",
    rating: 4.1,
    year: 2020
  }
];

export const happyBooks = booksData.filter(book => book.mood === "happy");
export const calmBooks = booksData.filter(book => book.mood === "calm");
export const reflectiveBooks = booksData.filter(book => book.mood === "reflective");
export const excitedBooks = booksData.filter(book => book.mood === "excited");
export const melancholyBooks = booksData.filter(book => book.mood === "melancholy");
