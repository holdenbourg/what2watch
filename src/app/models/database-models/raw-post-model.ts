export interface RawPostModel {
    postId: string,
    profilePicture: string,
    username: string,
    poster: string,
    caption: string,
    likes: string[],
    taggedUsers: string[],
    postDate: string,
    seenBy: string[]
}