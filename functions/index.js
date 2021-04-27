const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IkILwJ4BY6WTeZyB0wdKzG6w76SQh9JNnLnehX5NoRgbKunkhKHqtVWMzvkwwruNHLl8qHgQHa5lKPISX2wJJJt00jk0odBN6"
);

//API

// - app config
const app = express();

// - middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  //get the total pass from front end
  const total = req.query.total;
  console.log("Payment Request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //OK - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);

//example endpoint
// http://localhost:5001/challenge-af53d/us-central1/api
