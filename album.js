// let album = "Adore"

// let idAlbum; 
// Event handler for user clicking the select-artist button
$("#select-album").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputArtist = $("#search-input").val().trim();
  // if(inputArtist === ""){
  //   return;
  // }
  //check the input is working right
  console.log(inputArtist)

  // Running the searchBandsInTown function(passing in the artist as an argument)
 getAlbum(inputArtist);
  
});



function getAlbum(album){
    var queryURL = "https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=" + album + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){        
        

        console.log(response);

        let albumDiv = $("<div class = 'album'>"); 
        let albumimgDiv = $("<div class = 'albumImage'>"); 

        let artistName = response.album[0].strArtist;

        let pOne = $("<p>").text("Artist: " + artistName);

        albumDiv.append(pOne);

        let albumName = response.album[0].strAlbum;

        let pTwo = $("<p>").text("Album: " + albumName);

        albumDiv.append(pTwo);

        let releaseYear = response.album[0].intYearReleased;

        let pThree = $("<p>").text("Year Released: " + releaseYear);

        albumDiv.append(pThree);

        let albumGenre = response.album[0].strGenre;

        let pFour = $("<p>").text("Genre: " + albumGenre);

        albumDiv.append(pFour);

        let albumDescription = response.album[0].strDescriptionEN;

        let textBox = $("<textarea class=scrollableTextBox id=albumTextBox>").text("Album Description: " + albumDescription);

        albumDiv.append(textBox);
        
        let albumCover = response.album[0].strAlbumThumb;

        let image  = $("<img class=albumCover width=700 height=600>").attr("src", albumCover);

        //albumDiv.append(image);
        albumimgDiv.append(image)
        idAlbum = response.album[0].idAlbum;

        $("#albumInfo").prepend(albumDiv);
        $("#albumImgInfo").prepend(albumimgDiv);

        getTracklist();

        $("#albumInfo").removeClass("hidden");
        $("#maindiv").addClass("hidden");

      })};