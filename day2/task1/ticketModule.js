class Ticket{
    tickets=[]
 add (tid,seat, flight, departureDate, departureTime, arrival){
    let ticket = {id:tid, seatNumber : seat,
        flightNumber : flight, 
        departureDate: departureDate, 
        departureTime: departureTime,
        arrivalTime : arrival}

     this.tickets.push(ticket)
 }
 get(id) {
    let t = this.tickets.filter(e=> e.id == id)
    return t;
 }
 update(id, field, value){
    this.tickets.forEach(e=>{
        if(e.id== id){
            switch(field){
                case "seat": e.seatNumber = value 
                break;
                case "arrival": e.arrivalTime = value 
                break;
                case "departureT": e.departureTime = value 
                break;
                case "departureD": e.departureDate = value 
                break;
                case "flight": e.flightNumber = value 
                break;
            }
        }
    })


 }

}

module.exports = {
    Ticket
}