let users =[]
function join (id, username){
    const user ={id, username}

    users.push(user)
}

function findUser (id){
    return users.find(u=> u.id== id)
}
function userLeaves (id){
  let user = users.find(u=> u.id == id)
  let newUsers = users.filter(u=> u.id !==id)
  users = newUsers;
  return user;
}

function getUsers (){
    return users;
}

module.exports ={
    join,
    findUser,
    userLeaves,
    getUsers
}