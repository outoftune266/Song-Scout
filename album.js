let album = "Adore"





function getAlbum(){
    var queryURL = "https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=" + album + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

        console.log(response);

        //var artistDiv = $("<div class = 'artist'>"); 

        //var artistName = response.artists[0].strArtist;

        //var pOne = $("<p>").text("Artist: " + artistName);

        //artistDiv.append(pOne);

        //var artistSite = response.artists[0].strWebsite;

        //var pTwo = $("<p>").text("Website: " + artistSite);

        //artistDiv.append(pTwo);

        //var artistImage = response.artists[0].strArtistThumb;

        //var image  = $("<img>").attr("src", artistImage);

        //artistDiv.append(image);

        //var artistBio = response.artists[0].strBiographyEN;

        //var pThree = $("<p>").text("Artist Biography: " + artistBio);

        //artistDiv.append(pThree);

        //$(".artistInfo").prepend(artistDiv);

      })};