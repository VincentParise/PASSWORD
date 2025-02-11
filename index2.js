import { prompt } from "./prompt.js";

function askPasswordLength() {
  let length = Number(prompt("🔢 Combien de caractères ? (8-36)\n"));

  if (length < 8 || length > 36 || Number.isNaN(length)) {
    throw new Error(
      "La longueur du mot de passe doit être comprise entre 8 et 36 caractères."
    );
  }

  return length;
}

function askSpecialChars() {
  let special = prompt("🔣 Caractères spéciaux ? (y/n)\n");

  if (special !== "y" && special !== "n") {
    throw new Error('Veuillez répondre par "y" pour oui ou "n" pour non.');
  }

  return special === "y";
}

function askNumbers() {
  let numbers = prompt("🔢 Chiffres ? (y/n)\n");

  if (numbers !== "y" && numbers !== "n") {
    throw new Error('Veuillez répondre par "y" pour oui ou "n" pour non.');
  }

  return numbers === "y";
}

function askUppercase() {
  let numbers = prompt("⬆️ Majuscules ? (y/n)\n");

  if (numbers !== "y" && numbers !== "n") {
    throw new Error('Veuillez répondre par "y" pour oui ou "n" pour non.');
  }

  return numbers === "y";
}

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SPECIALS = "!@#$%^&*()";
const NUMBERS = "0123456789";

function generatePassword(length, special, numbers, uppercase) {
  let charset = LOWERCASE;
  if (special) charset += SPECIALS;
  if (numbers) charset += NUMBERS;
  if (uppercase) charset += UPPERCASE;

  let password = "";
  // vérifie si le mot de passe contient 1 majuscule
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  if (uppercase && password.toLowerCase() === password) {
    console.log("password", password);
    return generatePassword(length, special, numbers, uppercase);
  }

  return password;
}

function main() {
  let length = null;
  let special = null;
  let numbers = null;
  let uppercase = null;

  while (
    length === null ||
    special === null ||
    numbers === null ||
    uppercase === null
  ) {
    try {
      if (length === null) {
        length = askPasswordLength();
      }
      if (special === null) {
        special = askSpecialChars();
      }
      if (numbers === null) {
        numbers = askNumbers();
      }
      if (uppercase === null) {
        uppercase = askUppercase();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const password = generatePassword(length, special, numbers, uppercase);

  console.log("Votre mot de passe généré est :", password);
}

main();
