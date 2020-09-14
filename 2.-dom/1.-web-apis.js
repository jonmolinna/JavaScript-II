let texto = "La historia del Perú es la historia del territorio del actual Perú";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);

// Dato Curioso los APIs En los navegadores son una infinidad,
// el ejemplo anterior es una de ellas