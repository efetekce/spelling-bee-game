import fs from "fs";
import path from "path";

const dictionaryPath = path.resolve(process.cwd(), "public", "dictionary.json");
const dictionaryData = fs.readFileSync(dictionaryPath, "utf-8");
const dictionary = JSON.parse(dictionaryData);

const dictionaryPathTurkish = path.resolve(process.cwd(), "public", "gts.json");
const dictionaryDataTurkish = fs.readFileSync(dictionaryPathTurkish, "utf-8");
const dictionaryTurkish = JSON.parse(dictionaryDataTurkish);

// console.log(typeof dictionary);

const pickSevenEnglishLetters = () => {
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const vowels = ["a", "e", "i", "o", "u"];

  const letters = Array.from({ length: 7 }).reduce((acc) => {
    let randomLetter;
    do {
      const isVowel = Math.random() < 0.3;
      const letter = isVowel ? vowels : consonants;
      const randomIndex = Math.floor(Math.random() * letter.length);
      randomLetter = letter[randomIndex];
    } while (acc.includes(randomLetter));

    acc.push(randomLetter);

    return acc;
  }, []);

  return letters;
};

const pickSevenTurkishLetters = () => {
  const consonants = [
    "b",
    "c",
    "ç",
    "d",
    "f",
    "g",
    "ğ",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "ş",
    "t",
    "v",
    "y",
    "z",
  ];
  const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

  const letters = Array.from({ length: 7 }).reduce((acc) => {
    let randomLetter;
    do {
      const isVowel = Math.random() < 0.4;
      const letter = isVowel ? vowels : consonants;
      const randomIndex = Math.floor(Math.random() * letter.length);
      randomLetter = letter[randomIndex];
    } while (acc.includes(randomLetter));

    acc.push(randomLetter);

    return acc;
  }, []);

  return letters;
};

export default function handler(req, res) {
  const { method, headers, body } = req;
  if (method === "GET") {
    console.log(headers.path);
    if (headers.path === "/en") {
      const selectedLetters = pickSevenEnglishLetters();
      res.status(200).json({ selectedLetters });
    } else {
      const selectedLetters = pickSevenTurkishLetters();
      res.status(200).json({ selectedLetters });
    }
  }

  if (method === "POST") {
    if (headers.path === "/en") {
      console.log(body);
      if (!dictionary.includes(body)) {
        //   console.log("includessss");
        res.status(201).json("post request made but word not found");
      }
      res.status(200).json("INCLUDES");
    } else if (headers.path === "/tr") {
      console.log(body);
      if (!dictionaryTurkish.includes(body)) {
        res.status(404).json({ message: "yok" });
      }
      res.status(200).json("turkish includes");
    }
  }
}

// export default function POST(req,res){

// } can not use direct functions like this in pages router :-)
