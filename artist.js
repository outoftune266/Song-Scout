
// let artist = "Lynyrd Skynyrd"

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputArtist = $("#autocomplete-input").val().trim();
  // if(inputArtist === ""){
  //   return;
  // }
  //check the input is working right
  console.log(inputArtist)

  // Running the searchBandsInTown function(passing in the artist as an argument)
  getArtist(inputArtist);
  
});


function getArtist(artist){
    var queryURL = "https://theaudiodb.com/api/v1/json/1/search.php?s=" + artist + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        //checking the API data is fetch correctly
        console.log(response);

        var artistDiv = $("<div class = 'artist'>"); 

        var artistName = response.artists[0].strArtist;

        var pOne = $("<p>").text("Artist Name: " + artistName);

        artistDiv.append(pOne);

        var artistSite = response.artists[0].strWebsite;

        var pTwo = $("<p>").text("Website: " + artistSite);

        artistDiv.append(pTwo);

        var artistImage = response.artists[0].strArtistThumb;

        var image  = $("<img>").attr("src", artistImage);

        artistDiv.append(image);

        var artistBio = response.artists[0].strBiographyEN;

        var pThree = $("<p>").text("Artist Biography: " + artistBio);

        artistDiv.append(pThree);

        $("#artistInfo").prepend(artistDiv);


        let button = $("<button class='newSearch'>").text("New Search");
        $("#artistInfo").append(button);

        $("#maindiv").addClass("hidden");
        
      })};

