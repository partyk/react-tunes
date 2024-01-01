/**
 * Song
 */
export interface Song {
    id: number,
    artist: string,
    name: string,
    albumArt?: string
};

export interface User  {
    firstName: string,
    lastName: string,
    favoriteSong?: Song
}
