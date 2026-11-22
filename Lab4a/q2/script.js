// Ambil elemen dari HTML
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Fungsi bila butang ditekan
function checkInput() {
  const rawValue = userInput.value.trim();
  
  // 1. Buang warna lama (kalau ada) sebelum check baru
  result.className = ""; 

  // 2. Kalau user tak taip apa-apa
  if (rawValue === "") {
    result.textContent = "Please enter a valid number!";
    result.classList.add("error"); // Tambah warna MERAH
    return;
  }

  // 3. Tukar teks kepada nombor
  const num = Number(rawValue);
  
  // 4. Kalau user taip "abc" (bukan nombor)
  if (Number.isNaN(num)) {
    result.textContent = "Please enter a valid number!";
    result.classList.add("error"); // Tambah warna MERAH
    return;
  }

  // 5. Kalau nombor betul, check < 10, > 10, atau = 10
  if (num < 10) {
    result.textContent = "The number is lower than 10";
    result.classList.add("success"); // Tambah warna HIJAU
  } else if (num > 10) {
    result.textContent = "The number is higher than 10";
    result.classList.add("success"); // Tambah warna HIJAU
  } else {
    result.textContent = "The number is equal to 10";
    result.classList.add("success"); // Tambah warna HIJAU
  }
}

// Dengar butang bila diklik
checkBtn.addEventListener("click", checkInput);