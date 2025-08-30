import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { RawAccountInformationModel } from '../models/database-models/raw-account-information-model';

@Injectable({ providedIn: 'root' })
export class UsersDatabase {
    private localStorageService: LocalStorageService = inject(LocalStorageService);
    private STORAGE_NAME: string = 'raw-users';

    private DEFAULT_PROFILE_PICTURE: string = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";

    public rawMockUsersDatabase: RawAccountInformationModel[] = [
        {
            username: 'HoldenBourg',
            password: 'Captain$47',
            email: 'holden.bourg@gmail.com',
            firstName: 'Holden',
            lastName: 'Bourg',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'OliverQueen',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'JohnDiggle',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'TommyMerlin',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'MalcomMerlin',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'NarutoUzumaki',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'SasukeUchiha',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'ErenJaeger'
            ],
            following: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'OliverQueen',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'AshlynnDang'
            ],
            requests: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'FelicitySmoak'
            ],
            blocked: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'EnriqueLeal'
            ],
            isBlockedBy: [
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'CalebHaralson',
                this.DEFAULT_PROFILE_PICTURE + '::::' + 'LukasGocke'
            ],
            postIds: [
                'm1b114fbe2525b',
                'mc64a0e2ed49d7',
                'm08c9ee59315b7',
                'm2b7950d28e018',
                'mb79abc0e36da9',
                'ma480047d8bc6b',
                'm297bcedc228ff',
                'maf9fa739dcc3f',
                'md20fca600e5f7',
                'm0ea021a14bc3c',
                'sca316788b32b3',
                'se21b5fdcc060e',
                's4af79f404ab75',
                's9bf8d9f4ec4d5',
                's2ddf16037acbc',
                'se3eaaed56bf05',
                's1a0a11a13629d',
                's4d9733f005bf1',
                's0c0a652725a69',
                'sb866077598854'
            ],
            taggedPostIds: ['m30500143dac36'],
            archivedPostIds: [
                'm77b8e730b1597',
                'm2e872b0b5fe1c',
                'm64de727bc325a'
            ],
            dateJoined: '2003-04-10T00:00:00.000Z',
            private: true
        },
        {
            username: 'LukasGocke',
            password: 'Captain$47',
            email: 'lukas.gocke@gmail.com',
            firstName: 'Lukas',
            lastName: 'Gocke',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [this.DEFAULT_PROFILE_PICTURE + '::::' + 'HoldenBourg'],
            isBlockedBy: [],
            postIds: ['m6e1657aa83a9a'],
            taggedPostIds: [
                'm1b114fbe2525b',
                'sca316788b32b3'
            ],
            archivedPostIds: [],
            dateJoined: '2003-04-11T00:00:00.000Z',
            private: false
        },
        {
            username: 'CalebHaralson',
            password: 'Captain$47',
            email: 'caleb.haralson@gmail.com',
            firstName: 'Caleb',
            lastName: 'Haralson',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [this.DEFAULT_PROFILE_PICTURE + '::::' + 'HoldenBourg'],
            isBlockedBy: [this.DEFAULT_PROFILE_PICTURE + '::::' + 'HoldenBourg'],
            postIds: ['mf5b3417fd47a7'],
            taggedPostIds: [
                'm1b114fbe2525b',
                'sca316788b32b3'
            ],
            archivedPostIds: [],
            dateJoined: '2003-04-12T00:00:00.000Z',
            private: false
        },
        {
            username: 'EnriqueLeal',
            password: 'Captain$47',
            email: 'enrique.leal@gmail.com',
            firstName: 'Enrique',
            lastName: 'Leal',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [this.DEFAULT_PROFILE_PICTURE + '::::' + 'HoldenBourg'],
            postIds: ['m4ee49fbf13c86'],
            taggedPostIds: [
                'm1b114fbe2525b',
                'sca316788b32b3'
            ],
            archivedPostIds: [],
            dateJoined: '2003-04-13T00:00:00.000Z',
            private: false
        },
        {
            username: 'AshlynnDang',
            password: 'Captain$47',
            email: 'ashlynn.dang@gmail.com',
            firstName: 'Ashlynn',
            lastName: 'Dang',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: ['mffab7fbeb34f9'],
            taggedPostIds: ['m30500143dac36'],
            archivedPostIds: [],
            dateJoined: '2003-04-14T00:00:00.000Z',
            private: false
        },
        {
            username: 'OliverQueen',
            password: 'Captain$47',
            email: 'oliver.queen@gmail.com',
            firstName: 'Oliver',
            lastName: 'Queen',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: ['m30500143dac36'],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-15T00:00:00.000Z',
            private: true
        },
        {
            username: 'TommyMerlin',
            password: 'Captain$47',
            email: 'tommy.merlin@gmail.com',
            firstName: 'Tommy',
            lastName: 'Merlin',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: [],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-16T00:00:00.000Z',
            private: false
        },
        {
            username: 'JohnDiggle',
            password: 'Captain$47',
            email: 'john.diggle@gmail.com',
            firstName: 'John',
            lastName: 'Diggle',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [this.DEFAULT_PROFILE_PICTURE + '::::' + 'HoldenBourg'],
            blocked: [],
            isBlockedBy: [],
            postIds: [],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-17T00:00:00.000Z',
            private: true
        },
        {
            username: 'FelicitySmoak',
            password: 'Captain$47',
            email: 'felicity.smoak@gmail.com',
            firstName: 'Felicity',
            lastName: 'Smoak',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: [],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-18T00:00:00.000Z',
            private: true
        },
        {
            username: 'NarutoUzumaki',
            password: 'Captain$47',
            email: 'Naruto.Uzumaki@gmail.com',
            firstName: 'Naruto',
            lastName: 'Uzumaki',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: [],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-19T00:00:00.000Z',
            private: true
        },
        {
            username: 'SasukeUchiha',
            password: 'Captain$47',
            email: 'Sasuke.Uchiha@gmail.com',
            firstName: 'Sasuke',
            lastName: 'Uchiha',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: [],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-19T00:00:00.000Z',
            private: true
        },
        {
            username: 'ErenJaeger',
            password: 'Captain$47',
            email: 'Eren.Jaeger@gmail.com',
            firstName: 'Eren',
            lastName: 'Jaeger',
            profilePicture: this.DEFAULT_PROFILE_PICTURE,
            bio: 'I love movies so much I love movies so much I love movies so much',
            followers: [],
            following: [],
            requests: [],
            blocked: [],
            isBlockedBy: [],
            postIds: [],
            taggedPostIds: [],
            archivedPostIds: [],
            dateJoined: '2003-04-20T00:00:00.000Z',
            private: true
        }
    ];

    getAllUsersFromDatabase(): RawAccountInformationModel[] {
        let users = this.localStorageService.getInformation(this.STORAGE_NAME);

        if(users == null) {
            this.resetUsersDatabase();
            users = this.localStorageService.getInformation(this.STORAGE_NAME);
        }

        return users;
    }
    
    getUserByUsername(username: string): RawAccountInformationModel {
        return this.getAllUsersFromDatabase().find(user => user.username.toLowerCase() === username.toLowerCase())!;
    }
    getUserByEmail(email: string): RawAccountInformationModel {
        return this.getAllUsersFromDatabase().find(user => user.email.toLowerCase() === email.toLowerCase())!;
    }

    addUserToDatabase(user: RawAccountInformationModel) {
        let users = this.getAllUsersFromDatabase();
        users.push(user);

        this.localStorageService.setInformation(this.STORAGE_NAME, users);
    }
    addMultipleUsersToDatabase(users: RawAccountInformationModel[]) {
        let currentUsers = this.getAllUsersFromDatabase();
        users.forEach(user => currentUsers.push(user));

        this.localStorageService.setInformation(this.STORAGE_NAME, currentUsers);
    }

    removeUserByUsername(username: string) {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.getAllUsersFromDatabase().filter(user => user.username !== username));
    }

    replaceUserInDatabase(updatedUser: RawAccountInformationModel) {
        let usersWithoutUpdatedUser = this.getAllUsersFromDatabase().filter(user => user.username !== updatedUser.username);
        usersWithoutUpdatedUser.push(updatedUser);

        this.localStorageService.setInformation(this.STORAGE_NAME, usersWithoutUpdatedUser);
    }
    replaceMultipleUsersInDatabase(updatedUsers: RawAccountInformationModel[]) {
        let usersWithoutUpdatedUsers = this.getAllUsersFromDatabase().filter(user => !updatedUsers.map(u => u.username).includes(user.username));
        updatedUsers.forEach(user => usersWithoutUpdatedUsers.push(user));

        this.localStorageService.setInformation(this.STORAGE_NAME, usersWithoutUpdatedUsers);
    }

    resetUsersDatabase() {
        this.localStorageService.setInformation(this.STORAGE_NAME, this.rawMockUsersDatabase);
    }

    clearUsersDatabase() {
        this.localStorageService.clearInformation(this.STORAGE_NAME);
    }
}