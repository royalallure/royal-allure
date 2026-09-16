const WHATSAPP_NUMBER = "212641544783";

function order(product) {
  const message =
    "Bonjour Royal Allure 👑\n" +
    "✨ Bienvenue chez Royal Allure Accessories !\n" +
    "C’est un plaisir de vous accueillir. 💕\n" +
    "Comment pouvons-nous vous aider aujourd’hui ?";

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

document.getElementById("wa").addEventListener("click", function(e) {
  e.preventDefault();

  const message =
    "Bonjour Royal Allure 👑\n" +
    "✨ Bienvenue chez Royal Allure Accessories !\n" +
    "C’est un plaisir de vous accueillir. 💕\n" +
    "Comment pouvons-nous vous aider aujourd’hui ?";

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
    "_blank"
  );
});
