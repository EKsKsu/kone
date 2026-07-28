fetch("/api/user")
.then(res => res.json())
.then(data => {

    if(!data.loggedIn){

        location.href="/";

        return;

    }

    document.getElementById("user").innerHTML=`

    <img src="https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png" width="120">

    <h2>${data.username}</h2>

    <p>${data.id}</p>

    `;

});
