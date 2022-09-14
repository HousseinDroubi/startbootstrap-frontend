const view_messages_paragraph=document.getElementById("view_messages_paragraph");
// Fetch messages from DataBase
let url = "http://localhost/startbootstrap-frontend/php/getmessages.php";
        fetch(url)
        .then(respone=>respone.json())
        .then(data=>{
            console.log(data);
            for(let i=0;i<data.length;i++){
                let p = document.createElement('p');
                p.classList.add("message");
                p.innerText=Object.values(data)[i].message;
                view_messages_paragraph.appendChild(p);
            }
        });