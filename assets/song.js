//let idAlbum = 2113128;
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
        tracklist = response.track;
        //to get tracks use tracklist.track[i].strTrack
        name = response.track[0].strArtist
        let trackdiv = $("<div id ='tracks'>");
        let list = $("<ol>");
        for (var i = 0; i < tracklist.length; i++) {
            track = $("<li>").text(tracklist[i].strTrack);
            //track.text(tracklist[i].strTrack);
            list.append(track);
        };
        trackdiv.append(list);
        $("#albumInfo").append(trackdiv);
    });
    
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
