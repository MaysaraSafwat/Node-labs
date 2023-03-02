const myModule =  require("./ticketModule")
let Ticket= myModule.Ticket
let myTickets = new Ticket()
    //ADDING TICKETS
    myTickets.add(1, 10, 100, new Date(), "20:00", "01:00" );
    myTickets.add(2, 20 , 200, new Date(), "20:00", "01:00" );
    myTickets.add(3, 30, 300, new Date(), "20:00", "01:00" );


  
    //Displaying ticket number 2 before updating
    console.log(myTickets.get(2))

    //displaying ticket number 2 after updating 
    myTickets.update(2, "flight", 400); //updating flight number
    myTickets.update(2, "seat", 4)//updating seat number

    console.log(myTickets.get(2))
    