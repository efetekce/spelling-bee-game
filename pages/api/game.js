import fs from "fs";
import path from "path";

const dictionaryPath = path.resolve(process.cwd(), "public", "dictionary.json");
const dictionaryData = fs.readFileSync(dictionaryPath, "utf-8");
const dictionary = JSON.parse(dictionaryData);

console.log(typeof dictionary);

const pickSevenLetters = () => {
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

  //   for (let i = 0; i < 2; i++) {
  //     const randomIndex = Math.floor(Math.random() * vowels.length);
  //     // console.log(randomIndex);
  //     while (!letters.includes(vowels[randomIndex])) {
  //       letters.push(vowels[randomIndex]);
  //       console.log(letters);
  //     }
  //   }
  //   for (let i = 0; i < 5; i++) {
  //     const randomIndex = Math.floor(Math.random() * consonants.length);
  //     // console.log(randomIndex);
  //     while (!letters.includes(consonants[randomIndex])) {
  //       letters.push(consonants[randomIndex]);
  //       console.log(letters);
  //     }
  //   }

  return letters;
};

const submitGuess = () => {};

export default function handler(req, res) {
  if (req.method === "GET") {
    const selectedLetters = pickSevenLetters();
    //   console.log(selectedLetters);
    res.status(200).json({ selectedLetters });
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
