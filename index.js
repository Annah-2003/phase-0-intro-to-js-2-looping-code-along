// Code your solutions in this file
function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages; 
  }
  const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
const messages = writeCards(names, event);

console.log(messages);
function countDown(number) { for (let i = number; i >= 0; i--) {
    console.log(i);
  }
  }
  module.exports = {
    countDown,
  };
