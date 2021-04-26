const palabrasClave = ["java", "junior", "c#","spring","angular","react","css","html","cloud"];
const encontrarPalabras = (palabras) => (texto) => {
  const wordSum = palabras.reduce((item, acc) => `${item}|${acc}`);
  const rgxWord = new RegExp(wordSum, "gi");
  const text = texto.replace(/[,|.]/gi, " ").toUpperCase();
  const g = text.split(" ").filter((t) => rgxWord.test(t));

  return Array.from(new Set(g));
};
export const palabrasDeLenguaje = encontrarPalabras(palabrasClave);
