import { inject, Injectable } from "@angular/core";
import { RawPostModel } from "../models/database-models/raw-post-model";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable({ providedIn: 'root' })
export class PostsDatabase {
    private localStorageService: LocalStorageService = inject(LocalStorageService);
    private STORAGE_NAME: string = 'raw-posts';

    private DEFAULT_PROFILE_PICTURE: string = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";

    public rawMockPostsDatabase: RawPostModel[] = [
        {
            postId: 'm1b114fbe2525b',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke@CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal', 'HoldenBourg'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-20T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'mc64a0e2ed49d7',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-19T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm08c9ee59315b7',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BZGQ1ZTNmNzItNGYyMC00MDk2LWJiZDAtZTkwZDFlNWJlYTVjXkEyXkFqcGdeQXVyODUxNDExNTg@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-18T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm2b7950d28e018',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BMzFkZTMzOGUtOGM3NS00YzI2LTllMjgtODk0NDhkNWRiMTMzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-17T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'mb79abc0e36da9',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BMzQ4MDMxNjExNl5BMl5BanBnXkFtZTgwOTYzODI5NTE@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-16T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'ma480047d8bc6b',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjAyMDIyNzA4NV5BMl5BanBnXkFtZTgwMDgxNzE0ODE@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-15T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm297bcedc228ff',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-14T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'maf9fa739dcc3f',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BODM2ODgyOGYtYzYwMC00ZTEwLTg2MmItZDI2OTdhMTdiMGFiL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-13T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'md20fca600e5f7',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BNGMyZjM5YWUtMjVmMC00NmQ2LTgyMWEtNjYzZDFkYTIyMjFhXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-12T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm0ea021a14bc3c',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BNTk2NjU1MjMyNV5BMl5BanBnXkFtZTcwMzc5NjE0MQ@@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'sca316788b32b3',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-10T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'se21b5fdcc060e',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-09T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 's4af79f404ab75',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-08T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 's9bf8d9f4ec4d5',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2IyMDA0NGEtZjIyOS00NjU0LThlOTctODA0OTZmMDU2ZTMxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-07T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 's2ddf16037acbc',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzgwY2QwYjItYTM1NS00OTZmLThlMjUtNmE0Mzg0OGE0NzE3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-06T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'se3eaaed56bf05',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-05T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 's1a0a11a13629d',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-04T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 's4d9733f005bf1',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-03T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 's0c0a652725a69',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-02T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'sb866077598854',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-12-01T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm77b8e730b1597',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-11-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm2e872b0b5fe1c',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BN2U1MWE1NTMtYjQ2ZC00MTFmLWFmYjItODMyNGYxOTAyZmEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-10-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm64de727bc325a',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'HoldenBourg',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2UxMWVlNmMtYzM0Zi00YTQzLTk2N2ItM2Y1NmNmMDk4MDFjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-09-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'mf5b3417fd47a7',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'CalebHaralson',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @EnriqueLeal',
            likes: ['LukasGocke', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-08-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm4ee49fbf13c86',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'EnriqueLeal',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjZmYjg0ODctOTIyYy00YzhkLTgyMzEtNjUyY2JiZjVmYzI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson'
            ],
            postDate: '2023-07-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm6e1657aa83a9a',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'LukasGocke',
            poster: 'https://m.media-amazon.com/images/M/MV5BN2YzYjI0MWYtYWUyZS00ZDQ4LWEzN2EtMDU4NDJmNjA2ZWFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @EnriqueLeal @CalebHaralson',
            likes: ['CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-06-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'mffab7fbeb34f9',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'AshlynnDang',
            poster: 'https://m.media-amazon.com/images/M/MV5BYWNiNjBhZjAtMzVkNi00MTJiLWI0NGQtODE2NmIyNmU2OTQwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            postDate: '2023-05-11T00:00:00.000Z',
            seenBy: []
        },
        {
            postId: 'm30500143dac36',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            username: 'OliverQueen',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2RmMGY2Y2UtNjA1NS00NGE4LThiNzItMmE1NTk5NzI5NmE0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
            caption: 'caption\'s are amazing @LukasGocke @CalebHaralson',
            likes: ['LukasGocke', 'CalebHaralson', 'EnriqueLeal'],
            taggedUsers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'HoldenBourg',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'AshlynnDang'
            ],
            postDate: '2023-04-11T00:00:00.000Z',
            seenBy: []
        }
    ];

    getAllPostsFromDatabase(): RawPostModel[] {
        let posts = this.localStorageService.getInformation(this.STORAGE_NAME);

        if (posts == null) {
            this.resetPostsDatabase();
            posts = this.localStorageService.getInformation(this.STORAGE_NAME);
        }

        return posts;
    }
    getPostById(postId: string): RawPostModel | undefined {
        return this.getAllPostsFromDatabase().find(post => post.postId === postId)!;
    }

    addPostToDatabase(post: RawPostModel) {
        let posts = this.getAllPostsFromDatabase();
        posts.push(post);

        this.localStorageService.setInformation(this.STORAGE_NAME, posts);
    }
    removePostById(postId: string) {
        let posts = this.getAllPostsFromDatabase();
        posts = posts.filter(post => post.postId !== postId);

        this.localStorageService.setInformation(this.STORAGE_NAME, posts);
    }

    replacePostInDatabase(updatedPost: RawPostModel) {
        let posts = this.getAllPostsFromDatabase().filter(post => post.postId !== updatedPost.postId);
        posts.push(updatedPost);

        this.localStorageService.setInformation(this.STORAGE_NAME, posts);
    }

    resetPostsDatabase() {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.rawMockPostsDatabase);
    }

    clearPostsDatabase() {
        this.localStorageService.clearInformation(this.STORAGE_NAME);
    }
}