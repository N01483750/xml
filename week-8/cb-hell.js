<<<<<<< HEAD
/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

 const timeout = (ms, callback) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 40);
}

const generateData = async () => {
  await timeout(1000,()=>{});
  const data = Array.from({ length: 20 }, generateRandomNumber);
  return data;
}

const convertToFeet = async(meters) => {
  await timeout(3500, () => {});
  const feet = await meters.map((value) => {
      return (value*3.2808);
  });
  return feet;
}

const processData = async(data) => {
  return await data.map((value) => {
      return value;
  });
}

const logResult = async (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

const main = async() => {
  console.log("Start");
  const data = await generateData();
  const meters = await processData(data);
  const feets = await convertToFeet(meters);
  
  await logResult(meters,feets);
  console.log("Finish");
}

main();
=======
/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

function timeout(ms, callback) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}

function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}

function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}

function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}

function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

function main() {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  console.log("Finish");
}

main();
>>>>>>> d7bc6e50f43277eea3365e2cc02265c9278ff830
