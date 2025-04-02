/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Jennipher Medina
      Date:   4-2-2025

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

//creates a function to generate images
function starImages(rating){

      //declare variable
      let imageText = "";

      //loops until counter <= rating
      for (let counter = 1; counter <= rating; counter++)
      {
            //adds an image to imageText
            imageText = "<img src = 'star.png' alt = ''";
      }
      //returns the images
      return imageText;
}
//loops until counter is less than reviewers length
for(let counter= 0; counter< reviewers.length; counter++)
{
      //declare variable
      let reviewCode = "";

      //checks the review type and adds the start of a table
      if (reviewType[counter] == "P")
      {          
            reviewCode = "<table class = 'prime'>";
      }
      else if (reviewType == "N")
      {
            reviewCode= "<table class = 'prime'>";
      }
      else
      {
            reviewCode = "<table>";
      }
      //creates the format of the table
      reviewCode += "<caption>"+reviewTitles[counter] + "</caption>";
      reviewCode += "<tr><th>By</th><td>"+reviewers[counter]+"</td></tr>";
      reviewCode += "<tr><th>Review Date</th><td>"+ reviewDates[counter]+"</td></tr>";
      reviewCode += "<tr><th>Rating</th><td>"+starImages(stars[counter])+"</td></tr>";
      reviewCode +="<tr><td colspan='2'>"+reviews[counter]+"</td></tr>";
      reviewCode +="</table>";

      //gets the element by its id, finds the first(only) occurence, inserts the review code
      document.getElementsByTagName("article")[0].insertAdjacentHTML = ("beforeEnd", reviewCode);
}