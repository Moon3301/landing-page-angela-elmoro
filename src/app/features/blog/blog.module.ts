import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimengModule } from '../../primeng/primeng.module';


import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

@NgModule({
  declarations: [
    BlogHeaderComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogPostComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    PrimengModule
  ],
  exports: [
    BlogHeaderComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogPostComponent,
    BlogComponent
  ]
})
export class BlogModule { }
