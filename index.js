const express = require("express");
const app = (exports.app = express());
//setup for sockets
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8080" });
// const io = require("socket.io")(server, { origins: "localhost:8080 https://more-cowbell.heruko.com:*" });
////////////////////
const compression = require("compression");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const { hash, compare } = require("./bc");
const db = require("./db");
const cryptoRandomString = require("crypto-random-string");
const ses = require("./ses");
const s3 = require("./s3");
const { s3Url } = require("./config.json");

/////// MULTER ////////
// handles files and stores them in the "uploads" folder
const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24)
            .then(function (uid) {
                callback(null, uid + path.extname(file.originalname));
            })
            .catch((err) => {
                console.log("error in multerdiskstorage: ", err);
            });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152,
    },
});
////////////////////////////////////////////

////////////////////// MIDDLEWARE //////////////////////

const cookieSessionMiddleware = cookieSession({
    secret: `we need more cowbell!`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

app.use(cookieSessionMiddleware);
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});
// app.use(
//     express.urlencoded({
//         extended: false,
//     })
// );

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    res.set("x-frame-options", "DENY");
    next();
});

app.use(compression());

app.use(express.json());

app.use(express.static("public"));

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

////////////////////// ROUTES //////////////////////

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.get("/api/plants", async (req, res) => {
    try {
        let { rows } = await db.getAllPlants();
        res.json(rows);
    } catch (err) {
        console.log("Error in app GET /api/plants ", err);
    }
});

///////////////////// MUST BE LAST GET ROUTE //////////////
app.get("*", function (req, res) {
    // const { userId } = req.session;
    // if (!userId) {
    //     res.redirect("/welcome");
    // } else {
    res.sendFile(__dirname + "/index.html");
    // }
});

//////////////////////////////////////////////////////////
if (require.main == module) {
    server.listen(process.env.PORT || 8080, () =>
        console.log("Plant Your Life - SERVER at 8080...")
    );
}
//////////////////////////////////////////////////////////
