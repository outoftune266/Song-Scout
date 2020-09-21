// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function(event) {

  // Preventing the button from trying to submit the form
  event.preventDefault();

  // Storing the artist name
  let artist = $("#search-input").val().trim();
  // if(inputArtist === ""){
  //   return;
  // }


  // Running the getArtist() function passing artist as the parameter
  getArtist(artist);
  
});


function getArtist(artist){
    let queryURL = "https://theaudiodb.com/api/v1/json/1/search.php?s=" + artist + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        //checking the API data is fetch correctly
        console.log(response);

        let artistDiv = $("<div class = 'artist'>"); 
        let artistImgDiv = $("<div class = 'artistImg'>");

        let artistName = response.artists[0].strArtist;

        let h2 = $("<h2 id=artistName>").text(artistName);

        artistDiv.append(h2);

        let artistSite = response.artists[0].strWebsite;
 
        let link = $("<a id=website target='_blank'>").attr("href", "https://" + artistSite);
            
        link.text("Official Website of " + artistName);

        artistDiv.append(link);
        artistDiv.append("<br>");
        let artistImage = response.artists[0].strArtistThumb;

        let image  = $("<img class=artistImage>").attr("src", artistImage);

        artistImgDiv.append(image);

        let artistBio = response.artists[0].strBiographyEN;

        let textBox = $("<textarea class=scrollableTextBox id=artistTextBox>").text("Artist Biography: " + artistBio);

        artistDiv.append(textBox);

        $("#artistInfo").prepend(artistDiv);
        $("#artistImg").prepend(artistImgDiv);

        $("#artistInfo").removeClass("hidden");
        $("#artistImg").removeClass("hidden");


        let button = $("<button class='newSearch'>").text("New Search");
        $("#artistInfo").append(button);

        $("#maindiv").addClass("hidden");
        
      })};

