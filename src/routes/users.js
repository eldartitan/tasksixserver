const { Router } = require("express");
const User = require("../database/schemas/User");
const Message = require("../database/schemas/Message");

const router = Router();

router.get("/", async (req, res) => {
    console.log("Get Users");
    const usersArray = await User.find();
    const users = usersArray.map((m) => ({ label: m.username }));
    res.send(users);
});

router.get("/user", async (req, res) => {
    console.log("Single User");
    const { username } = req.query;
    console.log(username);
    const user = await User.findOne({ username });
    if (!user) {
        console.log("create user");
        const newUser = await User.create({
            username,
            messages: [],
        });
        res.send(newUser);
    } else {
        console.log("user found");
        res.send(user);
    }
});

router.post("/send", async (req, res) => {
    console.log("Get User Messages");
    const { sendTo, text, theme, sendFrom } = req.body;
    console.log(sendTo, text, theme, sendFrom);
    try {
        const user = await User.updateOne(
            { username: sendTo },
            {
                $push: {
                    messages: { text, theme, sendFrom },
                },
            }
        );
        res.send(200);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
