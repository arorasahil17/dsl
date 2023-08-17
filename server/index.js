require("dotenv").config();
const express = require("express");
const server = express();
const path = require("path");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
const productRouter = require("./routes/product");
const adminRouter = require("./routes/admin");
const cors = require("cors");
const session = require("express-session");
const port = 9000;

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected!");
}

main().catch((err) =>
  console.log(`Connection to Database Failed ${err.message}`)
);
server.use(cors());
server.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 10 * 60 * 1000 },
  })
);

// server.use(express.static(path.join(__dirname, "build")));

// server.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

server.get("/", (req, res) => {
  res.send("Server is started on netlfiy!");
});

server.use(express.json());
server.use("/", adminRouter);
server.use("/", userRouter);
server.use("/", productRouter);
server.use("/", paymentRouter);

server.listen(port, () => console.log(`Server is listening on ${port}`));
