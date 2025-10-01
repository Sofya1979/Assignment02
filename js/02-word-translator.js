function wordTranslater() {
  const languageCode = prompt("Enter a language code (es, de, en, fr, ru):").toLowerCase();

  let translatedMessage;

  switch (languageCode) {
    case "es":
      translatedMessage = "Hello World translated in Espanol is: Hola Mundo";
      break;
    case "de":
      translatedMessage = "Hello World translated in Deutschland is: Hallo Welt";
      break;
    case "en":
      translatedMessage = "Hello World translated in English is: Hello World";
      break;
    case "fr":
      translatedMessage = "Hello World translated in French is: Bonjour le monde";
      break;
    case "ru":
      translatedMessage = "Hello World translated in Russian is: Привет мир";
      break;
    default:
      translatedMessage = "Invalid language code entered. Please enter 'es', 'de', 'en', 'ru' or  'fr'.";
  }

  console.log(translatedMessage);
  document.write(translatedMessage)
  
}
wordTranslater();