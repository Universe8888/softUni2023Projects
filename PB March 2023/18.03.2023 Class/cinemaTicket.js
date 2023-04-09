function cinemaTicket(input) {
    let dayOfWeek = input[0];
    let priceForDayOfWeek = 0;
  
    switch (dayOfWeek) {
      case 'Monday':
        priceForDayOfWeek = 12;
        break;
      case 'Tuesday':
        priceForDayOfWeek = 12;
        break;
      case 'Wednesday':
        priceForDayOfWeek = 14;
        break;
      case 'Thursday':
        priceForDayOfWeek = 14;
        break;
      case 'Friday':
        priceForDayOfWeek = 12;
        break;
      case 'Saturday':
        priceForDayOfWeek = 16;
        break;
      case 'Sunday':
        priceForDayOfWeek = 16;
        break;
      default:
        console.log('Invalid input'); // Not really nessesery to have as Judge won't use false input
        return;
    }
  
    console.log(priceForDayOfWeek);
  }
  
  cinemaTicket(['Monday']); // Output: 12
