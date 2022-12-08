import { smuggle } from "./smuggle.mjs";
process.argv.shift()
process.argv.shift()
console.log(smuggle(process.argv).join(","))