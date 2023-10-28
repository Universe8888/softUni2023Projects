function processMovies(commands) {
    const movies = [];

    function findMovie(movieName) {
        return movies.find(movie => movie.name === movieName);
    }

    for (let command of commands){
        let parts;

        if (command.startsWith("addMovie")){
            parts = command.split(" ");
            const movieName = parts.slice(1).join(" ");
            movies.push({ name: movieName });
        } else if (command.includes("directedBy")) {
            parts = command.split(" directedBy ");
            const movieName = parts[0];
            const director = parts[1];
            let movie = findMovie(movieName);
            if (movie) movie.director = director;
        } else if (command.includes("onDate")) {
            parts = command.split(" onDate ");
            const movieName = parts[0];
            const date = parts[1];
            let movie = findMovie(movieName);
            if (movie) movie.date = date;
        }
    }

    movies
        .filter(movie => movie.name && movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
        
}

processMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

// processMovies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);