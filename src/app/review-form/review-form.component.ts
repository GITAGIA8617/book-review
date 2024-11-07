import { Component, EventEmitter, Output } from '@angular/core';
import { Review } from '../models';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  username: string = '';
  rating: number = 1;
  comment: string = '';
  
  @Output() newReview = new EventEmitter<Review>();

  submitReview(): void {
    if (this.username.trim() && this.comment.trim()) {
      const review: Review = {
        username: this.username,
        rating: this.rating,
        comment: this.comment
      };
      this.newReview.emit(review);
      this.username = '';
      this.rating = 1;
      this.comment = '';
    }
  }
}
