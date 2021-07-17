const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51J84tqSFogxiIKqZJQ3h5Ta7rqxWSTKpfA4jiLRbDCwzuij3hLCwGySrt8ygzu5c4359Qnij4AdfIva3QooRzQRR00ejkmYnk7"
);




// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-e25e2/us-central1/api
