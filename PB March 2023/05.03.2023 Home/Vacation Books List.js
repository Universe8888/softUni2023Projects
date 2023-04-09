function vacationBList(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysForBook = Number(input[2]);
    let bookReadingTotal = totalPages / pagesPerHour 
    let dailyReadingTime = bookReadingTotal / daysForBook
    
    console.log(dailyReadingTime); // Output: 5.3

  }
  


vacationBList(["212 ", "20 ", "2 "]);
// От конзолата се четат 3 реда:
// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]
