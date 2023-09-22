const User = require("../model/user");

const stripe = require("stripe")(process.env.STRIPE_KEY);

const createPayment = async (req, res) => {
  const id = req.params.id;
  const product = req.body;
  const amountInRuppe = product.price * 100;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: product.name,
            },
            unit_amount: amountInRuppe,
          },
          quantity: 1, // Assuming you are selling one unit of the product
        },
      ],
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}/error`,
    });
    const user = await User.findById(id);
    user.isPaymentMade = true;
    user.paymentDate = new Date();
    user.paymentAmount = product.price;
    res.json({ url: session.url });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { createPayment };
