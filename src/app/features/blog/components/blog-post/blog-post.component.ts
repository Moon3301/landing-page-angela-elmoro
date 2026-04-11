import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: false,
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  postId: string | null = null;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Basic initialization for routing
    this.postId = this.route.snapshot.paramMap.get('id');
    // En un caso real se llamaria al servicio con este ID
  }
}
