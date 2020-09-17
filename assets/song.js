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
        $("#songTitle").text(title);
        $("#artistName").text(name);
        lyrics = response.lyrics
        lyrics = response.lyrics.replace(/\n/ig, "</br>");
        $("#song").html(lyrics);
    });
});
