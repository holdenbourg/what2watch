import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { ReplyModel } from "../models/database-models/reply-model";

@Injectable({ providedIn: 'root' })
export class RepliesDatabase {
    private localStorageService: LocalStorageService = inject(LocalStorageService);
    private STORAGE_NAME: string = 'replies';

    private DEFAULT_PROFILE_PICTURE: string = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";

    public mockRepliesDatabase: ReplyModel[] = [
        {
            postId: 'm1b114fbe2525b',
            commentId: 'cf27ae8e50d6f9',
            replyId: 'r4af7c4786c9e1',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'HoldenBourg',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'cf27ae8e50d6f9',
            replyId: 'r62a5946328fc6',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'HoldenBourg',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c29ef0f5432ee1',
            replyId: 'rbe90cd2d8512',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'EnriqueLeal',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c29ef0f5432ee1',
            replyId: 'r5a70870c8b60e',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'EnriqueLeal',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'cf901da1624394',
            replyId: 'rfe080035d070e',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'CalebHaralson',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'cf901da1624394',
            replyId: 'r6eae1395ad8d5',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'CalebHaralson',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c1601ad93a6f0d',
            replyId: 'r2c50dd79ed0d2',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'AshlynnDang',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c1601ad93a6f0d',
            replyId: 'r421a9201c8fb3',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'AshlynnDang',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c8ae596289a788',
            replyId: 'r5f09426286745',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'OliverQueen',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c8ae596289a788',
            replyId: 'r32870e5f29a14',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'OliverQueen',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c75ed8983b2685',
            replyId: 'r73a14c3c5e6d9',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'TommyMerlin',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c75ed8983b2685',
            replyId: 'r557a5628b8698',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'TommyMerlin',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c2eb1441cffcc2',
            replyId: 'r72f79aa859278',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'FelicitySmoak',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c2eb1441cffcc2',
            replyId: 'rf6089da30a85f',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'FelicitySmoak',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c9b2e0cd075df2',
            replyId: 'r4afc159c06a1a',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'JohnDiggle',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c9b2e0cd075df2',
            replyId: 'r23bfd33e960ad',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'JohnDiggle',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'ceda40daaca3ed',
            replyId: 'rf1bf1f31f9da7',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'MalcomMerlin',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'ceda40daaca3ed',
            replyId: 'rfb7f6252ff8ec',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'MalcomMerlin',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c54b6527bcbb25',
            replyId: 'ra04671550c12d',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'm1b114fbe2525b',
            commentId: 'c54b6527bcbb25',
            replyId: 'r7cde124fce59f',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'ra8dd78e88aeb4',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 1',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-01T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r2c6255f0c2aaf',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'SasukeUchiha',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 2',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-02T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r8f8ad6166b72b',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'AshlynnDang',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 3',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-03T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'red0f689dcf755',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'LukasGocke',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 4',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-04T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'rad7d5d9ff1a4d',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'EnriqueLeal',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 5',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-05T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r7c4712786a0ed',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'CalebHaralson',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 6',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-06T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r75a38949335c5',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'OliverQueen',
            replyingToUsername: 'CalebHaralson',
            comment: 'Reply number 7',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-07T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r1fd6b02c645fe',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'TommyMerlin',
            replyingToUsername: 'OliverQueen',
            comment: 'Reply number 8',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-08T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'raf690d8a3803a',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'JohnDiggle',
            replyingToUsername: 'NarutoUzumaki',
            comment: 'Reply number 9',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-09T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'rdfbb9ede08f61',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'FelicitySmoak',
            replyingToUsername: 'JohnDiggle',
            comment: 'Reply number 10',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-10T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r263560adcf974',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'ErenJaeger',
            replyingToUsername: 'FelicitySmoak',
            comment: 'Reply number 11',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-11T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r592731415367f',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'ReinerBraun',
            replyingToUsername: 'ErenJaeger',
            comment: 'Reply number 12',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-12T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r0338ecf855051',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'MikasaAckerman',
            replyingToUsername: 'ReinerBraun',
            comment: 'Reply number 13',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-13T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'rb37571d2d502c',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'ErwinSmith',
            replyingToUsername: 'MikasaAckerman',
            comment: 'Reply number 14',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-14T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'rdd6f20da45cbf',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'LeviAckerman',
            replyingToUsername: 'ErwinSmith',
            comment: 'Reply number 15',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-15T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r6aceaa09a9987',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'KennyAckerman',
            replyingToUsername: 'LeviAckerman',
            comment: 'Reply number 16',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-16T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r4ddbabf4f4f5d',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'ItachiUchiha',
            replyingToUsername: 'KennyAckerman',
            comment: 'Reply number 17',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-17T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r555488e48335',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'JaraiyaTheGallant',
            replyingToUsername: 'ItachiUchiha',
            comment: 'Reply number 18',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-18T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r5784ce9e17c3b',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'ObitoUchiha',
            replyingToUsername: 'JaraiyaTheGallant',
            comment: 'Reply number 19',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-19T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r2c13645d8646b',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'MadaraUchiha',
            replyingToUsername: 'ObitoUchiha',
            comment: 'Reply number 20',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-20T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r970279d92bddb',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'MinatoNamikaze',
            replyingToUsername: 'MadaraUchiha',
            comment: 'Reply number 21',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-21T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'rcb95c8e109119',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'KakashiHatake',
            replyingToUsername: 'MinatoNamikaze',
            comment: 'Reply number 22',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-22T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r5a58500d9f9e9',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'LightYagami',
            replyingToUsername: 'KakashiHatake',
            comment: 'Reply number 23',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-23T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'rc05b1aa32d957',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'ToddBourg',
            replyingToUsername: 'LightYagami',
            comment: 'Reply number 24',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-24T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 're2eb46f1d082d',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'AmyBourg',
            replyingToUsername: 'ToddBourg',
            comment: '@HoldenBourg Reply number 25',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-25T00:00:00.000Z'
        },
        {
            postId: 'mc64a0e2ed49d7',
            commentId: 'ca6bb512e14b58',
            replyId: 'r702f62a53e5f2',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'JaydenBourg',
            replyingToUsername: 'AmyBourg',
            comment: 'Reply number 26 @HoldenBourg@AshlynnDang @LukasGocke @EnriqueLeal @CalebHaralson EnriqueLealEnriqueLealEnriqueLealEnriqueLealEnriqueLeal',
            likes: [
                'LukasGocke',
                'CalebHaralson'
            ],
            commentDate: '2023-11-26T00:00:00.000Z'
        }
    ];

    getAllRepliesFromDatabase(): ReplyModel[] {
        let replies: ReplyModel[] = this.localStorageService.getInformation(this.STORAGE_NAME);

        if (!replies) {
            this.resetRepliesDatabase();
            replies = this.localStorageService.getInformation(this.STORAGE_NAME);
        }

        return replies;
    }
    getAllRepliesByCommentId(commentId: string): ReplyModel[] {
        return this.getAllRepliesFromDatabase().filter(reply => reply.commentId === commentId);
    }
    getReplyById(replyId: string): ReplyModel | undefined {
        return this.getAllRepliesFromDatabase().find(reply => reply.replyId === replyId);
    }

    addReplyToDatabase(newReply: ReplyModel) {
        let currentReplies = this.getAllRepliesFromDatabase();
        currentReplies.push(newReply);

        this.localStorageService.setInformation(this.STORAGE_NAME, currentReplies);
    }

    removeReplyById(replyId: string) {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.getAllRepliesFromDatabase().filter(reply => reply.replyId !== replyId));
    }

    replaceReplyInDatabase(updatedReply: ReplyModel) {
        let repliesWithoutUpdatedReply = this.getAllRepliesFromDatabase().filter(reply => reply.replyId !== updatedReply.replyId);
        repliesWithoutUpdatedReply.push(updatedReply);

        this.localStorageService.setInformation(this.STORAGE_NAME, repliesWithoutUpdatedReply);
    }

    resetRepliesDatabase() {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.mockRepliesDatabase);
    }

    clearRepliesDatabase() {
        this.localStorageService.clearInformation(this.STORAGE_NAME);
    }
}