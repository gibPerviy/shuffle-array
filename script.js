// Более стабильный Fisher-Yates shuffle algorithm
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}

// Using the sort() method
function shuffleArray(array) {
return array.sort(() => Math.random() - 0.5);
}
