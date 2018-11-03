var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// logging middleware
router.use(function(req, res, next) {
  console.log("\nReceived:", {
    url: req.originalUrl,
    body: req.body,
    query: req.query
  });
  next();
});

// Simple in memory database
const database = [
  // your json here
  { name: "Tom" },
  { name: "Marvolo" },
  { name: "Riddle" }
];

router.get("/", function(req, res) {
  // TODO: modify data here?
  const data = database.map((data, index) => ({ id: index, ...data }));
  console.log("Response:", data);
  res.json(data);
});

app.use("/api", router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
