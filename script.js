// Declare your genre arrays here
let actions= [
 "https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_.jpg", "https://upload.wikimedia.org/wikipedia/en/a/a9/Cowboy_Bebop_key_visual.jpg"
]

let comedys= [
 "https://m.media-amazon.com/images/M/MV5BYjEwNjEwYzgtZGZkMy00MTBjLTg2MmYtNDk0MzY2NmU0MmNiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYmFiNTU2YWUtZjVjYy00MDJmLThlNzMtYTBhNzZmMmUyN2JlXkEyXkFqcGdeQXVyMTMzNDc0Nzky._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
]

let mysterys= [
  "https://m.media-amazon.com/images/M/MV5BYTgxZjNlZWQtYjg1OS00NzY2LTkyZTctZDBkY2Y2ZWEyMjNlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYWY3MTliMWYtMmQ1Zi00NDE0LTkzYmUtZDI4MDM1MTgwZTc4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYmJhMDYzYzMtNTVlZS00MzgwLWE3ZjAtN2FhZTBlOGQzZmFmXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
]
// https://m.media-amazon.com/images/M/MV5BYWY3MTliMWYtMmQ1Zi00NDE0LTkzYmUtZDI4MDM1MTgwZTc4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg
// Make sure to declare your HTML elements as variables! 
let div= document.querySelector(".photos");

let suggestions=[]
let suggest = document.querySelector(".suggest")

suggest.onclick = function() {
 let suggestion=document.querySelector(".placeholder").value
   suggestions.push(suggestion)
  console.log("suggestions")
  for (let suggestion of suggestions){
    div.insertAdjacentHTML("afterbegin", "<img src=" + suggestion + ">")
  }
}

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
  let genre= document.querySelector(".genre").value;
  if (genre == "action"){
    div.innerHTML=""
    for (let action of actions){
    div.insertAdjacentHTML("afterbegin", "<img src=" + action + ">")
} 
  } else if (genre == "comedy"){
    div.innerHTML=""
    for (let comedy of comedys){
      div.insertAdjacentHTML("afterbegin", "<img src="+ comedy + ">")
    }
  } else if (genre == "mystery"){
    div.innerHTML=""
    for (let mystery of mysterys){
      div.insertAdjacentHTML("afterbegin", "<img src=" + mystery + ">")
    }
  }
}