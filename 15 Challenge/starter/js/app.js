let btnSubmit = document.querySelector("#budget-submit");
let budget = document.querySelector("#budget-amount");
let expense = document.querySelector("#expense-amount");
let balance = document.querySelector("#balance-amount");
let inputBudget = document.querySelector("#budget-input");
let budgetFeedback = document.querySelector(".budget-feedback ");
let expenceFeedback = document.querySelector(".expense-feedback");
let expenseInput = document.querySelector("#expense-input");
let amountInput = document.querySelector("#amount-input");
let divExpence = document.querySelector(".expense-feedback");
let expenseIn = document.querySelectorAll('.expense-input');

let totalExpences = 0;
let budgetArr = [];
let editRowIndex;

class Expense {
  constructor(title, value) {
    this.title = title;
    this.value = value;
  }
}

// Update budget field

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  budget.innerHTML = inputBudget.value;
  balance.innerHTML = inputBudget.value;

  if (inputBudget.value === "" || inputBudget.value < 0) {
    budgetFeedback.innerHTML = "Value cannot be empty or negative";
    budgetFeedback.style.display = "block";
    budget.innerHTML = 0;
    balance.innerHTML = 0;
    inputBudget.value = "";

  } else {
    inputBudget.value = "";
  }
});

// On input focus dissapeared alert message

inputBudget.addEventListener("focus", function () {
  budgetFeedback.style.display = "none";
});

// Expence title Expence value

let newDiv = document.querySelector(".inner");
let btnExpense = document.querySelector("#expense-submit");
let divIn = document.createElement("div");
let table = document.createElement("table");

// THEAD TABLE
let header = table.createTHead();
let row = header.insertRow();
let cell = row.insertCell();
let cell1 = row.insertCell();
let cell2 = row.insertCell();
cell.innerHTML = "Expense title";
cell1.innerHTML = "Expense value";
cell2.innerHTML = "";

newDiv.appendChild(divIn);
divIn.appendChild(table);

table.classList.add("table-warning");

// BUTTON EXPENSE

btnExpense.addEventListener("click", function (e) {
  e.preventDefault();

  if (expenseInput.value === "" || amountInput.value === "") {
    expenceFeedback.innerHTML = "Value cannot be empty or negative";
    expenceFeedback.style.display = "block";
    expense.innerHTML = 0;
    balance.innerHTML = 0;
    expenseInput.value = "";
    amountInput.value = "";
    expenseIn.forEach(el => {
    el.addEventListener('focus', function(){
      expenceFeedback.style.display = "none";
    })  
    });
  } else {
    let total = budget.innerHTML;
    let val2 = amountInput.value;
    console.log(val2, "val2");

    let expenseVal = expenseInput.value;
    let amountVal = amountInput.value;
    let budArr;

    totalExpences += parseInt(amountVal);
    expense.innerHTML = totalExpences;
    balance.innerHTML = `${total - totalExpences}`;

    budArr = new Expense(expenseVal, val2);

    expenseInput.value = "";
    amountInput.value = "";

    budgetArr.push(budArr);

    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let iclass = document.createElement("i");
    let editI = document.createElement("i");

    th.innerHTML += `${expenseVal}`;
    th1.innerHTML += `${amountVal}`;
    th2.innerHTML += ``;

    table.appendChild(tr);
    tr.setAttribute("data-amount", parseInt(amountVal));
    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);
    th2.appendChild(editBtn);
    th2.appendChild(deleteBtn);
    deleteBtn.appendChild(iclass);
    editBtn.appendChild(editI);

    editBtn.classList.add("edit-icon");
    deleteBtn.classList.add("delete-icon");
    iclass.innerHTML = '<i class="fas fa-trash"></i>';
    editI.innerHTML = '<i class="far fa-edit"></i>';

    iclass.addEventListener("click", function (e) {
      let tr = e.target.parentElement.parentElement.parentElement.parentElement;
      console.log(tr);
      totalExpences -= parseInt(tr.getAttribute("data-amount"));
      expense.innerHTML = totalExpences;
      balance.innerHTML = `${total - totalExpences}`;
      tr.parentNode.removeChild(tr);
    });
    // console.log(budgetArr);

    editI.addEventListener("click", function (e) {
      let tr = e.target.parentElement.parentElement.parentElement.parentElement;
      console.log(tr);
      editRowIndex = tr.rowIndex;
      console.log(editRowIndex)
      totalExpences -= parseInt(tr.getAttribute("data-amount"));
      expense.innerHTML = totalExpences;
      balance.innerHTML = `${total - totalExpences}`;
      expenseInput.value = budgetArr[editRowIndex - 1].title;
      amountInput.value = budgetArr[editRowIndex - 1].value;
      tr.parentNode.removeChild(tr);
    });

    console.log(editI)
  }
});
