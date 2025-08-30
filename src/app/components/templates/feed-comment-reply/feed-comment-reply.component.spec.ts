import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCommentReplyComponent } from './feed-comment-reply.component';

describe('FeedCommentReplyComponent', () => {
  let component: FeedCommentReplyComponent;
  let fixture: ComponentFixture<FeedCommentReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedCommentReplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedCommentReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
