let albumID = 2113128;
let trackID = "3b098d24-325e-4451-89d8-4e3d0c3d8ae9";
let name = "The Polyphonic Spree"
let title = "Hold Me Now"
let tracklist;
let lyrics;


function getTracks() {
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
        lyrics = response.lyrics;
        $("#lyricsBox").text(lyrics);
    });
};

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