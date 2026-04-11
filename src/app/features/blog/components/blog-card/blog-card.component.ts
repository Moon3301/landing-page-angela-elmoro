import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  standalone: false,
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() post: any;
}
