
import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(cors());
dotenv.config();

const stripe = new Stripe(process.env.SK_TEST)

const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/stripe/webhook", express.raw({type: "application/json"}), async(request, response) =>{
    const sig = request.headers["stripe-signature"]

    let event;

    try{
        event = stripe.webhooks.constructEvent(
            request.body,
            sig,
            process.env.END_POINT_SECRET_KEY
          );
    } catch(err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent was successful!");
        break;
      case "payment_method.attached":
        const paymentMethod = event.data.object;
        console.log("PaymentMethod was attached to a Customer!");
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.json({ received: true });
})

app.use(express.json());

app.post("/stripe", async (request, response) => {
  const { amount } = request.body;
  const amountInCents = Math.round(amount * 100);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "eur",
    });

    response.status(200).send({ secret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Errore durante la creazione del pagamento:", error);
    response.status(500).send("Errore durante la creazione del pagamento");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


