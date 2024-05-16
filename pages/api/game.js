import fs from "fs";
import path from "path";

const dictionaryPath = path.resolve(process.cwd(), "public", "dictionary.json");
const dictionaryData = fs.readFileSync(dictionaryPath, "utf-8");
const dictionary = JSON.parse(dictionaryData);

console.log(typeof dictionary);

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

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.headers.path);
    if (req.headers.path === "/en") {
      const selectedLetters = pickSevenEnglishLetters();
      res.status(200).json({ selectedLetters });
    } else {
      const selectedLetters = pickSevenTurkishLetters();
      res.status(200).json({ selectedLetters });
    }
  }

  if (req.method === "POST") {
    // console.log("post request made");
    console.log(req.body);
    if (!dictionary.includes(req.body)) {
      //   console.log("includessss");
      res.status(201).json("post request made but word not found");
    }
    res.status(200).json("INCLUDES");
  }
}

// export default function POST(req,res){

// }
