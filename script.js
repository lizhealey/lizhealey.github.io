
let hintUsed = false;  

let mode = "free"; // "free" or "tiles"
let currentWord = 1;
let currentIndex = 0;
let wrongAttempts = 0; // Initialize the wrong attempts counter

const word1Input = document.getElementById("word1");
const word2Input = document.getElementById("word2");

const tileContainer1 = document.getElementById("tiles-word1");
const tileContainer2 = document.getElementById("tiles-word2");

const hintButton = document.getElementById("hint-button");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const hintDisplay = document.getElementById("hint-display");

const winPopup = document.getElementById("win-popup");
const copyButton = document.getElementById("copy-button");
const closePopup = document.getElementById("close-popup");
const shareText = document.getElementById("share-text");
const playAgainButton = document.getElementById("play-again-button");
const refreshButton = document.getElementById("refresh-button"); 


const hiddenInput = document.getElementById("hidden-input");


const hintTexts = {
  word1: " ",
  word2: " "
};


let answer1 = "";
let answer2 = "";

function loadCSV() {
  Papa.parse("words.csv", {
    download: true,
    header: true,
    complete: function (results) {
      allRows = results.data.filter(row => row["word 1"] && row["word 2"]); 
      loadNewRow(); // Load the first word pair
    },
    error: function (err) {
      console.error("CSV load error", err);
    }
  });
}

function loadNewRow() {
  if (allRows.length === 0) {
    console.error("No rows available in CSV.");
    return;
  }

  currentRowIndex = Math.floor(Math.random() * allRows.length);
  const row = allRows[currentRowIndex];

  answer1 = row["word 1"].toLowerCase();
  answer2 = row["word 2"].toLowerCase();

  const subtitle = document.getElementById("subtitle");
  const title =document.getElementById("game-title");
  if (subtitle && row["h2"]) {
    subtitle.textContent = `${row["h1"].toLowerCase()?.trim() || ""} ${row["h2"].toLowerCase()?.trim() || ""}`;

  } else {
    subtitle.textContent = "";
  }


  if (row["syllables"] === "1") {
    title.textContent = "STINK PINK";  // Set title as "Stink Pink" if syllable is 1
  } else if (row["syllables"] === "2") {
    title.textContent = "STINKY PINKY";  
  } else if (row["syllables"] === "3") {
    title.textContent =  "STINKITY PINKITY";  
  } else {
    title.textContent = "Stink Pink";
  }


  console.log("Subtitle row:", row["h2"]);

  resetGame();
}

function resetGame() {
  document.getElementById("win-popup").classList.add("hidden");

  clearInputs();

  mode = "free";
  currentWord = 1;
  currentIndex = 0;
  hintUsed = false;
  wrongAttempts = 0;

  document.getElementById("free-inputs").classList.remove("hidden");
  document.getElementById("tile-inputs").classList.add("hidden");

  document.getElementById("hint-display").textContent = "";
}


window.addEventListener("load", loadCSV);

hintButton.addEventListener("click", () => {
  document.getElementById("free-inputs").classList.add("hidden");
  document.getElementById("tile-inputs").classList.remove("hidden");

  createTiles(answer1.length, tileContainer1, "word1");
  createTiles(answer2.length, tileContainer2, "word2");

  hintDisplay.textContent = `${hintTexts.word1}  ${hintTexts.word2}`;

  mode = "tiles";
  currentWord = 1;
  currentIndex = 0;

  highlightCurrentTile();
  hiddenInput.focus(); 

  // Mark that a hint was used
  hintUsed = true;
  hintButton.disabled = true;  // This disables the button
  hintButton.style.backgroundColor = "#d3d3d3";  
  hintButton.style.cursor = "not-allowed";  
});
hiddenInput.addEventListener("input", () => {
  const value = hiddenInput.value.toUpperCase();
  hiddenInput.value = ""; // Clear the field for next input

  if (/^[A-Z]$/.test(value)) {
    handleLetterInput(value);
  }
});

function handleLetterInput(letter) {
  const tileId = currentWord === 1
    ? `word1-tile-${currentIndex}`
    : `word2-tile-${currentIndex}`;
  const tile = document.getElementById(tileId);
  tile.textContent = letter;

  if (currentIndex < (currentWord === 1 ? answer1.length : answer2.length) - 1) {
    currentIndex++;
  } else if (currentWord === 1) {
    currentWord = 2;
    currentIndex = 0;
  }

  highlightCurrentTile();
}

// Create tile inputs
function createTiles(length, container, wordId) {
  container.innerHTML = "";
  for (let i = 0; i < length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("id", `${wordId}-tile-${i}`);
    container.appendChild(tile);
  }
}

function highlightCurrentTile() {
  document.querySelectorAll(".tile").forEach(t => t.classList.remove("active"));

  const tileId = currentWord === 1
    ? `word1-tile-${currentIndex}`
    : `word2-tile-${currentIndex}`;
  const tile = document.getElementById(tileId);
  if (tile) tile.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  // Only allow this block if we're in "free" mode
  if (mode !== "free") return;

  // Allow pressing Enter to submit
  if (e.key === "Enter") {
    submitButton.click();
    return;
  }

  // Otherwise, allow normal typing in the input boxes
});

// Submit button
submitButton.addEventListener("click", () => {
  let guess1, guess2;

  if (mode === "free") {
    guess1 = word1Input.value.toLowerCase();
    guess2 = word2Input.value.toLowerCase();
  } else {
    guess1 = getWordFromTiles(answer1.length, "word1");
    guess2 = getWordFromTiles(answer2.length, "word2");
  }

  if (guess1 === answer1 && guess2 === answer2) {

    let shareMessage = ``;
    
    if (wrongAttempts === 0) {
      shareMessage += "🐷";
    } else {
      const xCount = "❌".repeat(wrongAttempts);
      // Append hint usage status
      if (hintUsed) {
        shareMessage += ` \n ${xCount} \n 💡`;
      } else {
        shareMessage += ` \n ${xCount}`;
      }
    }

    shareText.textContent = shareMessage;

    winPopup.classList.remove("hidden");
  } else {
    wrongAttempts++;
    
    showMessage(`${"❌".repeat(wrongAttempts)}`, "red");

    clearInputs(); // Clear the inputs after wrong attempt
  }
});

// Get word from tiles
function getWordFromTiles(length, wordId) {
  let word = "";
  for (let i = 0; i < length; i++) {
    const tile = document.getElementById(`${wordId}-tile-${i}`);
    word += tile.textContent.toLowerCase();
  }
  return word;
}

function clearInputs() {
  if (mode === "free") {
    // Clear the text input fields (free mode)
    word1Input.value = "";
    word2Input.value = "";
  } else {
    // Clear the tiles for both words in tile input mode
    for (let i = 0; i < answer1.length; i++) {
      document.getElementById(`word1-tile-${i}`).textContent = "";
    }
    for (let i = 0; i < answer2.length; i++) {
      document.getElementById(`word2-tile-${i}`).textContent = "";
    }
  }
}

// Show temporary message
function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
}

// Copy button in popup
copyButton.addEventListener("click", () => {
  const text = shareText.textContent; // This is where the message with Xs gets copied
  navigator.clipboard.writeText(text).then(() => {
    copyButton.textContent = "Copied!";
    setTimeout(() => copyButton.textContent = "Copy Text", 2000);
  });
});

closePopup.addEventListener("click", () => {
  winPopup.classList.add("hidden");
});

playAgainButton.addEventListener("click", () => {
  

  winPopup.classList.add("hidden");

  clearInputs();

  document.getElementById("free-inputs").classList.remove("hidden");
  document.getElementById("tile-inputs").classList.add("hidden");

  hintDisplay.textContent = "";
  hintButton.disabled = false; 
  hintButton.style.cursor = "pointer";
  hintButton.style.backgroundColor = "white";
  hintUsed = false;


  mode = "free";  // Set mode to "free"
  currentWord = 1; // Start with the first word
  currentIndex = 0; // Start with the first letter
  document.querySelectorAll(".tile").forEach(tile => tile.classList.remove("active"));
  loadNewRow();
  clearInputs();
});

refreshButton.addEventListener("click", () => {
  
  loadNewRow();
  winPopup.classList.add("hidden");

  clearInputs();

  document.getElementById("free-inputs").classList.remove("hidden");
  document.getElementById("tile-inputs").classList.add("hidden");

  hintDisplay.textContent = "";
  hintButton.disabled = false; 
  hintButton.style.cursor = "pointer";
  hintButton.style.backgroundColor = "white";
  hintUsed = false;

  mode = "free";  // Set mode to "free"
  currentWord = 1; // Start with the first word
  currentIndex = 0; // Start with the first letter
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Trigger the submit button's click event
    submitButton.click();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const heartButton = document.getElementById("heart-button");
  const popupMessage = document.getElementById("popup-message");

  heartButton.addEventListener("click", () => {
    popupMessage.classList.add("show");

    setTimeout(() => {
      popupMessage.classList.remove("show");
    }, 1000);
  });
});