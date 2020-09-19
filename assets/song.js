//let idAlbum = 2113128;
let name;
let title;
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
        //console.log(response)
        tracklist = response.track;
        //to get tracks use tracklist.track[i].strTrack
        name = response.track[0].strArtist
        let trackdiv = $("<div id ='tracks'>");
        let list = $("<ol>");
        for (var i = 0; i < tracklist.length; i++) {
            track = $("<li class= 'song'>").text(tracklist[i].strTrack);
            
            list.append(track);
        };
        trackdiv.append(list);
        $("#albumInfo").append(trackdiv);
        let button = $("<button class='newSearch'>").text("New Search");
        $("#albumInfo").append(button);
    });
};

$("#albumInfo").on("click", "li", function(event) {
    //console.log(event.target);
    title = event.target.innerHTML;
    var queryURL = "https://api.lyrics.ovh/v1/" + name + "/" + title;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let songTitle = $("<h3>").text(title);
        $("#song").append(songTitle);
        let artistName = $("<h4>").text("by:" + name);
        $("#song").append(artistName);
        lyrics = response.lyrics
        lyrics = response.lyrics.replace(/\n/ig, "</br>");
        let songLyrics = $("<div>").html(lyrics);
        $("#song").append(songLyrics);
        let button = $("<button class='newSearch'>").text("New Search");
        $("#song").append(button);
        $("#song").removeClass("hidden");
        $("#albumInfo").addClass("hidden");
    });
});

$(document).on("click", ".newSearch", function() {
    $("#artistInfo").empty();
    $("#albumInfo").empty();
    $("#song").empty();
    $("#artistInfo").addClass("hidden");
    $("#albumInfo").addClass("hidden");
    $("#song").addClass("hidden");
    $("#maindiv").removeClass("hidden");
})