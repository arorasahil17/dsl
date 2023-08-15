const button = document.querySelector("button");
button.addEventListener("click", () => {
  const items = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 3 },
  ];
  fetch("/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url; // redirect to payment gateway URL
    })
    .catch((e) => console.log(e.error));
});
