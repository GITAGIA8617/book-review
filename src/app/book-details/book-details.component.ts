import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, Review } from '../models';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.books.find(book => book.id === bookId);
  }

  addReview(review: Review): void {
    if (this.book) {
      this.book.reviews.push(review);
      this.updateAverageRating();
    }
  }

  private updateAverageRating(): void {
    if (this.book) {
      const total = this.book.reviews.reduce((acc, review) => acc + review.rating, 0);
      this.book.averageRating = total / this.book.reviews.length;
    }
  }
}
