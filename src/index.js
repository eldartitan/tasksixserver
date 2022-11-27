const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");
require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
    cors({
        origin: "https://tasksixclient.up.railway.app", // <-- location of the react app were connecting to
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.send("it's OK");
});

app.use("/api/users", usersRoute);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));