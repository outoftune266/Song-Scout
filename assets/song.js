let albumID = 2113128;
let trackID = "3b098d24-325e-4451-89d8-4e3d0c3d8ae9";
let name = "The Polyphonic Spree"
let title = "Hold Me Now"
let tracklist;
let lyrics;



function getTracklist() {
    var queryURL = "https://theaudiodb.com/api/v1/json/1/track.php?m=" + albumID + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        tracklist = response;
        //to get tracks use tracklist.track[i].strTrack
        name = tracklist.track[0].strArtist
    }
    )
}

//does not work
// function getTrackInfo() {
//     var queryURL = "https://theaudiodb.com/api/v1/json/1/track-mb.php?i=" + trackID + "&apikey=523532";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response)
//     }
//     )
// }

function getLyrics() {
    var queryURL = "https://api.lyrics.ovh/v1/" + name + "/" + title;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#songTitle").text(title);
        $("#artistName").text(name);
        lyrics = response.lyrics.escapeSpecialChars();
        //lyrics = lyrics.stringify();
        // for (var i = 0; i < lyrics.legnth; i++) {
        //     if (lyrics[i] = \n) {

        //     }
        // }
        //lyrics = lyrics.escapeSpecialChars();
        $("#lyricsBox").text(lyrics);
    });
};


// not sure if this is needed. attempting to create line breaks
// String.prototype.escapeSpecialChars = function() {
//     return this.replace(/\\n/g, "\\n")
//                .replace(/\\'/g, "\\'")
//                .replace(/\\"/g, '\\"')
//                .replace(/\\&/g, "\\&")
//                .replace(/\\r/g, "\\r")
//                .replace(/\\t/g, "\\t")
//                .replace(/\\b/g, "\\b")
//                .replace(/\\f/g, "\\f");
// };

//does not return useful info
// function getTrackInfo() {
//     var queryURL = "https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=" + name + "&t=" + title + "&apikey=523532";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response)
//     }
//     )
// }