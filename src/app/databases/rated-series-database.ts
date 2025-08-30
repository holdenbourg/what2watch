import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { RatedSeriesModel } from "../models/database-models/rated-series-model";

@Injectable({ providedIn: 'root' })
export class RatedSeriesDatabase {
    private localStorageService: LocalStorageService = inject(LocalStorageService);
    private STORAGE_NAME: string = 'rated-series';

    public mockRatedSeriesDatabase: RatedSeriesModel[] = [
        {
            postId: 'sca316788b32b3',
            poster: 'https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_SX300.jpg',
            title: 'Attack on Titan',
            releaseDate: '2009-12-18T00:00:00.000Z',
            rated: 'TV-MA',
            seasons: 5,
            episodes: 124,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 9,
            visuals: 6,
            story: 7,
            length: 2,
            pacing: 4,
            ending: 5,
            rating: 5.5,
            username: 'HoldenBourg',
            dateRated: '2023-12-10T00:00:00.000Z'
        },
        {
            postId: 'se21b5fdcc060e',
            poster: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            title: 'Death Note',
            releaseDate: '2007-10-21T00:00:00.000Z',
            rated: 'TV-14',
            seasons: 1,
            episodes: 37,
            genres: ['Animation', 'Crime', 'Drama'],
            acting: 4,
            visuals: 5,
            story: 6,
            length: 3,
            pacing: 8,
            ending: 7,
            rating: 5.5,
            username: 'HoldenBourg',
            dateRated: '2023-12-09T00:00:00.000Z'
        },
        {
            postId: 's4af79f404ab75',
            poster: 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            title: 'Hunter x Hunter',
            releaseDate: '2016-04-17T00:00:00.000Z',
            rated: 'TV-14',
            seasons: 3,
            episodes: 148,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 9,
            visuals: 6,
            story: 3,
            length: 7,
            pacing: 4,
            ending: 1,
            rating: 5,
            username: 'HoldenBourg',
            dateRated: '2023-12-08T00:00:00.000Z'
        },
        {
            postId: 's9bf8d9f4ec4d5',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2IyMDA0NGEtZjIyOS00NjU0LThlOTctODA0OTZmMDU2ZTMxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg',
            title: 'Fire Force',
            releaseDate: '2019-07-05T00:00:00.000Z',
            rated: 'TV-14',
            seasons: 3,
            episodes: 78,
            genres: ['Animation', 'Action', 'Drama'],
            acting: 5,
            visuals: 6,
            story: 4,
            length: 8,
            pacing: 3,
            ending: 2,
            rating: 4.7,
            username: 'HoldenBourg',
            dateRated: '2023-12-07T00:00:00.000Z'
        },
        {
            postId: 's2ddf16037acbc',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzgwY2QwYjItYTM1NS00OTZmLThlMjUtNmE0Mzg0OGE0NzE3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            title: 'Berserk',
            releaseDate: '2002-05-28T00:00:00.000Z',
            rated: 'TV-MA',
            seasons: 1,
            episodes: 25,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 7,
            visuals: 5,
            story: 3,
            length: 9,
            pacing: 5,
            ending: 1,
            rating: 5,
            username: 'HoldenBourg',
            dateRated: '2023-12-06T00:00:00.000Z'
        },
        {
            postId: 'se3eaaed56bf05',
            poster: 'https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            title: 'Demon Slayer: Kimetsu no Yaiba',
            releaseDate: '2021-01-22T00:00:00.000Z',
            rated: 'TV-MA',
            seasons: 5,
            episodes: 62,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 8,
            visuals: 6,
            story: 5,
            length: 9,
            pacing: 3,
            ending: 7,
            rating: 6.3,
            username: 'HoldenBourg',
            dateRated: '2023-12-05T00:00:00.000Z'
        },
        {
            postId: 's1a0a11a13629d',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
            title: 'Bleach',
            releaseDate: '2006-09-09T00:00:00.000Z',
            rated: 'TV-14',
            seasons: 3,
            episodes: 396,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 8,
            visuals: 6,
            story: 3,
            length: 5,
            pacing: 9,
            ending: 4,
            rating: 5.8,
            username: 'HoldenBourg',
            dateRated: '2023-12-04T00:00:00.000Z'
        },
        {
            postId: 's4d9733f005bf1',
            poster: 'https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
            title: 'Bleach: Thousand-Year Blood War',
            releaseDate: '2022-10-10T00:00:00.000Z',
            rated: 'TV-MA',
            seasons: 2,
            episodes: 26,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 5,
            visuals: 6,
            story: 3,
            length: 7,
            pacing: 8,
            ending: 9,
            rating: 6.3,
            username: 'HoldenBourg',
            dateRated: '2023-12-03T00:00:00.000Z'
        },
        {
            postId: 's0c0a652725a69',
            poster: 'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
            title: 'Naruto: Shippuden',
            releaseDate: '2009-10-28T00:00:00.000Z',
            rated: 'TV-PG',
            seasons: 21,
            episodes: 503,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 7,
            visuals: 4,
            story: 1,
            length: 8,
            pacing: 5,
            ending: 2,
            rating: 4.5,
            username: 'HoldenBourg',
            dateRated: '2023-12-02T00:00:00.000Z'
        },
        {
            postId: 'sb866077598854',
            poster: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
            title: 'Naruto',
            releaseDate: '2005-09-10T00:00:00.000Z',
            rated: 'TV-PG',
            seasons: 5,
            episodes: 225,
            genres: ['Animation', 'Action', 'Adventure'],
            acting: 8,
            visuals: 5,
            story: 3,
            length: 7,
            pacing: 2,
            ending: 7,
            rating: 5.3,
            username: 'HoldenBourg',
            dateRated: '2023-12-01T00:00:00.000Z'
        }
    ];

    getAllRatedSeriesFromDatabase(): RatedSeriesModel[] {
        let ratedSeries = this.localStorageService.getInformation(this.STORAGE_NAME);
        
        if (!ratedSeries) {
            this.resetRatedSeriesDatabase();
            ratedSeries = this.localStorageService.getInformation(this.STORAGE_NAME);
        }

        return ratedSeries;
    }

    getRatedSeriesById(postId: string): RatedSeriesModel {
        return this.getAllRatedSeriesFromDatabase().find(series => series.postId === postId)!;
    }

    addRatedSeriesToDatabase(ratedSeries: RatedSeriesModel) {
        let ratedSeriesDatabase = this.getAllRatedSeriesFromDatabase();
        ratedSeriesDatabase.push(ratedSeries);

        this.localStorageService.setInformation(this.STORAGE_NAME, ratedSeriesDatabase);
    }

    removeRatedSeriesById(postId: string) {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.getAllRatedSeriesFromDatabase().filter(series => series.postId !== postId));
    }

    replaceRatedSeriesInDatabase(ratedSeries: RatedSeriesModel) {
        let ratedSeriesWihtoutUpdatesSeries = this.getAllRatedSeriesFromDatabase().filter(series => series.postId !== ratedSeries.postId);
        ratedSeriesWihtoutUpdatesSeries.push(ratedSeries);

        this.localStorageService.setInformation(this.STORAGE_NAME, ratedSeriesWihtoutUpdatesSeries);
    }

    resetRatedSeriesDatabase() {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.mockRatedSeriesDatabase);
    }

    clearRatedSeriesDatabase() {
        this.localStorageService.clearInformation(this.STORAGE_NAME);
    }
}