const socket = io();

const chatform = document.getElementById("chat-form");
let chatBox = document.querySelector(".chat-messages");
let usersList = document.getElementById("users")
let {username} =Qs.parse(location.search,{ignoreQueryPrefix : true});
socket.emit("joinedChat", {username})

socket.on("message", m=>{
    console.log(m)
    broadCastMsg(m);

    chatBox.scrollTop = chatBox.scrollHeight;
})

socket.on("chatusers", ({users})=>{
  listUsers(users)

}
)

//smg submit
chatform.addEventListener("submit", (e)=>{
    e.preventDefault();
    let msg =e.target.elements.msg.value;
    socket.emit("chatMsg", msg);

    e.target.elements.msg.value = " "
    e.target.elements.msg.focus();
})

function broadCastMsg(msg){
  let div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `
  <p class="meta">${msg.username}<span>${msg.time}</span></p>
						<p class="text">
							${msg.text}
						</p>
  `  
  document.querySelector(".chat-messages").appendChild(div)
}

function listUsers(users){
    console.log(users)
  usersList.innerHTML = `${users.map(u=> `<li>${u.username}</li>`).join(" ")}` 
}