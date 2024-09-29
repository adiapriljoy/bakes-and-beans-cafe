const { Payment } = require("../models");

const populatePayment = async () => {
  const payments = [
    { payment_desc: "Cash" },
    { payment_desc: "Card" },
    { payment_desc: "eWallet" },
  ];

  for (const payment of payments) {
    await Payment.findOrCreate({
      where: { payment_desc: payment.payment_desc },
      defaults: payment,
    });
  }

  console.log("Database populated with payments.");
};

module.exports = populatePayment;
