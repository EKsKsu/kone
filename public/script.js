function getCookie(name) {

    const value =
        "; " + document.cookie;

    const parts =
        value.split("; " + name + "=");

    if (parts.length === 2)
        return parts.pop().split(";").shift();

}

const raw = getCookie("discordUser");

if (!raw) {

    document.getElementById("profile")
        .innerHTML =
        "Not logged in.";

}
else {

    const user = JSON.parse(raw);

    document.getElementById("profile")
        .innerHTML = `
            <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" width="120">
            <h2>${user.username}</h2>
            <p>ID: ${user.id}</p>
        `;

}
