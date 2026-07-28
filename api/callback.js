import cookie from "cookie";

export default async function handler(req, res) {

    const code = req.query.code;

    if (!code)
        return res.status(400).send("Missing code");

    const tokenResponse = await fetch(
        "https://discord.com/api/oauth2/token",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: "authorization_code",
                code,
                redirect_uri: process.env.REDIRECT_URI
            })
        }
    );

    const token = await tokenResponse.json();

    const userResponse = await fetch(
        "https://discord.com/api/users/@me",
        {
            headers: {
                Authorization:
                    `Bearer ${token.access_token}`
            }
        }
    );

    const user = await userResponse.json();

    res.setHeader(
        "Set-Cookie",
        cookie.serialize(
            "discordUser",
            JSON.stringify(user),
            {
                httpOnly: false,
                path: "/"
            }
        )
    );

    res.redirect("/profile");
}
