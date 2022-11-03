import { ethers } from "hardhat";
import { string } from "hardhat/internal/core/params/argumentTypes";
import { resourceLimits } from "worker_threads";
import { parseFile } from "fast-csv";

const csv = require("csv-parser");
const fs = require("fs");
let result: any = [];
fs.createReadStream("data.csv")
  .pipe(csv())
  .on((row: any) => {
    // row.Address.forEach(function (value : any){
    //   console.log(value);
    // })
    // for(let i=0; i< row.length; i++){
    //   result.push(row[i].Address)
    // }
    // result.push(row);
    console.log(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });


// parseFile("data.csv")
//   .on("error", (error) => console.error(error))
//   .on("data", (row: any) => {
//     result.push(row[0]);
    
//   });
// .on("end", (r: any) => {
//   // console.log(result, "***", r);
//   // main(result);
// });

console.log(result.length, "******");

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main(addresses: any[]) {
  // const sbt = await ethers.getContractFactory("SBT");
  // const SBT = await sbt.deploy();
  // await sleep(6000);
  // const sbtObj = { Category: "", Issuer: "", Title: "", Type: "" };
  // await SBT.mint(addresses, sbtObj);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
