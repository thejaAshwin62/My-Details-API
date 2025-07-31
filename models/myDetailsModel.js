import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getMyDetails = async () => {
  const filePath = path.join(__dirname, "../data/myDetails.json");
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
};
