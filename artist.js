// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function(event) {

  // Preventing the button from trying to submit the form
  event.preventDefault();

  // Storing the artist name
  var artist = $("#search-input").val().trim();
  // if(inputArtist === ""){
  //   return;
  // }


  // Running the getArtist() function passing artist as the parameter
  getArtist(artist);
  
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

        var pOne = $("<p id=artistName>").text("Artist Name: " + artistName);

        artistDiv.append(pOne);

        var artistSite = response.artists[0].strWebsite;
 
        var link = $("<a id=website target='_blank'>").attr("href", "https://" + artistSite);
            
        link.text("Official Website of " + artistName);

        artistDiv.append(link);

        var artistImage = response.artists[0].strArtistThumb;

        var image  = $("<img class=artistImage>").attr("src", artistImage);

        artistDiv.append(image);

        var artistBio = response.artists[0].strBiographyEN;

        var textBox = $("<textarea class=scrollableTextBox id=artistTextBox>").text("Artist Biography: " + artistBio);

        artistDiv.append(textBox);

        $("#artistInfo").prepend(artistDiv);


        let button = $("<button class='newSearch btn btn-large search blue'>").text("New Search");
        $("#artistInfo").append(button);

        $("#maindiv").addClass("hidden");
        
      })};

