import { inject, Injectable } from "@angular/core";
import { CommentModel } from "../models/database-models/comment-model";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable({ providedIn: 'root' })
export class CommentsDatabase {
    private localStorageService: LocalStorageService = inject(LocalStorageService);
    private STORAGE_NAME: string = 'comments';

    private DEFAULT_PROFILE_PICTURE: string = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";

    public mockCommentsDatabase: CommentModel[] = [
        {
            postId: 'm1b114fbe2525b',
            commentId: 'cf27ae8e50d6f9',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            comment: 'Comment number 1 @HoldenBourg@AshlynnDang @LukasGocke @CalebHaralson',
            likes: [
                'HoldenBourg',
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c29ef0f5432ee1',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'EnriqueLeal',
            comment: 'Comment number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'cf901da1624394',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'CalebHaralson',
            comment: 'Comment number 3',
            likes: [
                'LukasGocke'
            ],
            commentDate: '2023-12-03T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c1601ad93a6f0d',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'AshlynnDang',
            comment: 'Comment number 4',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-04T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c8ae596289a788',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'OliverQueen',
            comment: 'Comment number 5',
            likes: [
                'HoldenBourg'
            ],
            commentDate: '2023-12-05T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c75ed8983b2685',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'TommyMerlin',
            comment: 'Comment number 6, Comment number 6, Comment number 6, Comment number 6, Comment number 6, Comment number 6, Comment number 6',
            likes: [
                'HoldenBourg',
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-06T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c2eb1441cffcc2',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'FelicitySmoak',
            comment: 'Comment number 7',
            likes: [
                'HoldenBourg',
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-07T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c9b2e0cd075df2',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'JohnDiggle',
            comment: 'Comment number 8',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-08T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'ceda40daaca3ed',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'MalcomMerlin',
            comment: 'Comment number 9',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-09T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c54b6527bcbb25',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'NarutoUzumaki',
            comment: 'Comment number 10',
            likes: [
                'HoldenBourg',
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-10T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'NarutoUzumaki',
            comment: 'Comment number 10',
            likes: [
                'HoldenBourg',
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-12-10T00:00:00.000Z'
        }
    ];

    getAllCommentsFromDatabase(): CommentModel[] {
        let comments = this.localStorageService.getInformation(this.STORAGE_NAME);

        if (!comments) {
            this.resetCommentsDatabase();
            comments = this.localStorageService.getInformation(this.STORAGE_NAME);
        }

        return comments;
    }
    getAllCommentsByPostId(postId: string): CommentModel[] {
        return this.getAllCommentsFromDatabase().filter(comment => comment.postId === postId);
    }
    getCommentById(commentId: string): CommentModel | undefined {
        return this.getAllCommentsFromDatabase().find(comment => comment.commentId === commentId)!;
    }

    addCommentToDatabase(comment: CommentModel) {
        let currentComments = this.getAllCommentsFromDatabase();
        currentComments.push(comment);

        this.localStorageService.setInformation(this.STORAGE_NAME, currentComments);
    }

    removeCommentById(commentId: string) {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.getAllCommentsFromDatabase().filter(comment => comment.commentId !== commentId));
    }

    replaceCommentInDatabase(updatedComment: CommentModel) {
        let commentsWithoutUpdatedComment = this.getAllCommentsFromDatabase().filter(comment => comment.commentId !== updatedComment.commentId);
        commentsWithoutUpdatedComment.push(updatedComment);

        this.localStorageService.setInformation(this.STORAGE_NAME, commentsWithoutUpdatedComment);
    }

    resetCommentsDatabase() {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.mockCommentsDatabase);
    }

    clearCommentsDatabase() {
        this.localStorageService.clearInformation(this.STORAGE_NAME);
    }
}