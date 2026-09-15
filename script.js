// Change this number to your WhatsApp number in international format.
// Example Morocco: 2126XXXXXXXX (without + and without spaces)
const WHATSAPP_NUMBER = "212600000000";

function order(product){
  const message = encodeURIComponent("Bonjour Royal Allure 👑 Je souhaite commander : " + product);
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message, "_blank");
}
document.getElementById("wa").addEventListener("click", function(e){
  e.preventDefault();
  const message = encodeURIComponent("Bonjour Royal Allure 👑 Je souhaite passer une commande.");
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message, "_blank");
});
