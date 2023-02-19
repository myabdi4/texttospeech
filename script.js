console.log("Hello World, I am abdi");

let total = 0, count = 1; 

while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);

// Check if the SpeechSynthesis object is supported
if ('speechSynthesis' in window) {
  // Create a new SpeechSynthesisUtterance object with the text to be spoken
  const utterance = new SpeechSynthesisUtterance('Hello, world!');
  // Use the SpeechSynthesis API to generate speech from the text
  window.speechSynthesis.speak(utterance);
}

