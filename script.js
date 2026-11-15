// Simple front-end order form demonstration.
// This displays a confirmation only; it does not send/store an actual order.
document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const dish = document.getElementById("dish").value;
  const message = document.getElementById("orderMessage");

  if (!name) {
    message.textContent = "Please enter your name.";
    return;
  }

  message.textContent = `Thank you, ${name}! Your selection (${dish}) has been recorded on this demo page.`;
  this.reset();
});
