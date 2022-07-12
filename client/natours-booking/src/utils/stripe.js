export const bookTour = async (tourId, token) => {
  try {
    // 1) Get the checkout session from the API
    const session = await fetch(
      `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const result = await session.json();

    console.log("SESSION", result);
    return result;
    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({ sessionId: result.session.id });
  } catch (err) {
    console.log(err);
    alert(err);
  }
};
