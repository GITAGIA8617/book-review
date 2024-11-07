import { Component, OnInit } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      coverImage: 'file:///C:/Users/USER%20PC/Desktop/book-review/images/to-kill-a-mockingbird-1962.jpg',
      reviews: [
        { username: 'User1', rating: 4.5, comment: 'Great book!' },
        { username: 'User2', rating: 2.5, comment: 'Loved it!' }
      ],
      averageRating: 4.5
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      coverImage: 'file:///C:/Users/USER%20PC/Desktop/book-review/images/1984.jpg',
      reviews: [],
      averageRating: 2.5
    },
    {
      id: 3,
      title: 'Moby Dick',
      author: 'George Orwell',
      coverImage: 'file:///C:/Users/USER%20PC/Desktop/book-review/images/moby.jpg',
      reviews: [],
      averageRating: 3
    },

    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F-Scott FitzGerald',
      coverImage: 'file:///C:/Users/USER%20PC/Desktop/book-review/images/the%20great.jpg',
      reviews: [],
      averageRating: 5
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getAverageRating(book: Book): number {
    if (book.reviews.length === 0) return 0;
    const total = book.reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / book.reviews.length;
  }
}