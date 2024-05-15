import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { language } = req.query;
  const dictionaryPath = path.resolve(
    process.cwd(),
    "public",
    "dictionary.json"
  );
  const dictionaryData = fs.readFileSync(dictionaryPath, "utf-8");
  const dictionary = JSON.parse(dictionaryData);
  console.log(dictionary);

  res.status(200).json();
}
