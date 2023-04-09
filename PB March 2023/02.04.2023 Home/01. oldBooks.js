function oldBooks(input) {
  let index = 0;
  let favoriteBook = input[index];
  index++;
  
  let bookIsFound = false;
  let counter = 0

  let nextBookName = input[index];
  while (nextBookName !== "No More Books") {
    if (nextBookName === favoriteBook) {
        bookIsFound = true;
        break;
    }
    
    counter++;
    index++;
    nextBookName = input[index];
  }
  if(bookIsFound === false){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${ counter} books.`);
  } else{
    console.log(`You checked ${counter} books and found it.`);
  }

  
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])





