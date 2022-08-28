const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const resultBox = document.getElementsByClassName("result-box")[0];

addBtn.addEventListener("click", () => {
  let inputValue = input.value;
  let List = `<li>
                <div class="check"></div>
                <p> ${inputValue} </p>
                <i class="fa-solid fa-trash" id="deleteBtn"></i>
             </li>`;

  if (inputValue === "") {
    return;
  }

  resultBox.innerHTML += List;
  input.value = "";
});

resultBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    if (confirm("Are you sure you want to delete this ToDo?")) {
      e.target.parentElement.remove();
    }
  }
});

resultBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    e.target.parentElement.classList.toggle("active");
  }
});
