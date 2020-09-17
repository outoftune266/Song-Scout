let idAlbum = 2113128;
let trackID = "3b098d24-325e-4451-89d8-4e3d0c3d8ae9";
let name = "The Polyphonic Spree"
let title = "Hold Me Now"
let tracklist;
let lyrics;
let track;


//will retrieve tracklist info
function getTracklist() {
    var queryURL = "https://theaudiodb.com/api/v1/json/1/track.php?m=" + idAlbum + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        tracklist = response;
        //to get tracks use tracklist.track[i].strTrack
        name = tracklist.track[0].strArtist
    });
    displayTracks()
};

//displays tracklist
function displayTracks() {
    for (var i = 0; i < tracklist.length; i++) {
        track = $("<li>");
        track.text(tracklist.track[i].strTrack);
        $("ol").append(track);
    };
};

function getLyrics() {
    //title = 
    var queryURL = "https://api.lyrics.ovh/v1/" + name + "/" + title;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#songTitle").text(title);
        $("#artistName").text(name);
        lyrics = response.lyrics
        lyrics = response.lyrics.replace(/\n/ig, "</br>");
        $("#lyricsBox").html(lyrics);
    });
};
