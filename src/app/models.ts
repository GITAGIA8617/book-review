export interface Review {
    username: string;
    rating: number;
    comment: string;
  }
  
  export interface Book {
    id: number;
    title: string;
    author: string;
    coverImage: string;
    reviews: Review[];
    averageRating: number;
  }