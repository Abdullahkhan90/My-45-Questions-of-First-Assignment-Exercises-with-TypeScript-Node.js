"use strict";
// Written by: Hafiz Abdullah.
// Assignment No: 40.
// Define the function make_album.
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Funstion call to create an album without specifying tracks.
const album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);
// Funstion call to create an album with specifying tracks.
const album2 = make_album('Artist 2', 'Album Title 2', 9);
console.log(album2);
// Funstion call to create an another album without specifying tracks.
const album3 = make_album('Artist 3', 'Album Title 3');
console.log(album3);
