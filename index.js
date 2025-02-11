import { prompt } from "./prompt.js";

function choiceNbCaractere() {
  const nbCaracteres = Number(prompt("Combien de caracteres ? (8 - 36)"));
  if (nbCaracteres < 8 || nbCaracteres > 36 || isNaN(nbCaracteres)) {
    return choiceNbCaractere();
  }
  return nbCaracteres;
}

function choiceSpeCaractere() {
  const speCaracteres = prompt("Caractères spéciaux ? (y/n)");
  if (speCaracteres !== "y" && speCaracteres !== "n") {
    return choiceSpeCaractere();
  }
  return speCaracteres;
}

function choiceChiffres() {
  const chiffres = prompt("Chiffres ? (y/n)");
  if (chiffres !== "y" && chiffres !== "n") {
    return choiceChiffres();
  }
  return chiffres;
}

function majuscules() {
  const majuscule = prompt("Majuscules ? (y/n)");
  if (majuscule !== "y" && majuscule !== "n") {
    return majuscules();
  }
  return majuscule;
}

const nbcaract = choiceNbCaractere();
const specaract = choiceSpeCaractere();
const chiffre = choiceChiffres();
const maj = majuscules();

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SPECIALS = "!@#$%^&*()";
const NUMBERS = "0123456789";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword(nbcaract, specaract, chiffre, maj) {
  const passwords = new Array(nbcaract).fill(0);

  let charset = LOWERCASE;
  if (specaract === "y") charset += SPECIALS;
  if (chiffre === "y") charset += NUMBERS;
  if (maj === "y") charset += UPPERCASE;
  const charsets = charset.split("");
  console.log(charsets.length);

  // Création du password :
  for (let i = 0; i < passwords.length; i++) {
    //Determination index Tableau charsets
    const index = getRandomArbitrary(0, charsets.length);
    passwords[i] = charsets[index];
  }
  return passwords;
}

// Génération du mot de passe
const passwords = generatePassword(nbcaract, specaract, chiffre, maj).join("");

console.log(passwords);
