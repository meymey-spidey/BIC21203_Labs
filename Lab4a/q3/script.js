const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // 1. Clear existing items to prevent duplicates
  numberList.innerHTML = ""; // atau: while (numberList.firstChild) numberList.removeChild(...)

  // 2. For loop 1 through 5
  for (let i = 1; i <= 5; i++) {
    // 3. Create <li>, set textContent, append to #numberList
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${i}`;
    numberList.appendChild(listItem);
  }
}

// 4. Attach to button
generateBtn.addEventListener("click", generateNumbers);