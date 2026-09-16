const WHATSAPP_NUMBER = "212641544783";

function order(product) {
  const message =
    "Bonjour Royal Allure 👑\n" +
    "✨ Je souhaite commander cet article.\n" +
    "Merci pour votre retour. 🤍";

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

document.getElementById("wa").addEventListener("click", function(e) {
  e.preventDefault();

  const message =
    "Bonjour Royal Allure 👑\n" +
    "✨ Je souhaite commander cet article.\n" +
    "Merci pour votre retour. 🤍";

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
    "_blank"
  );
});
