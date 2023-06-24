const expenses = [
  {
    id: 1,
    title: "LPG Tank",
    amount: 935,
  },
  {
    id: 2,
    title: "Groceries",
    amount: 4850,
  },
  {
    id: 3,
    title: "Water Bill",
    amount: 208,
  },
  {
    id: 4,
    title: "Electric Bill",
    amount: 2807,
  },
  {
    id: 5,
    title: "YouTube Premium",
    amount: 129,
  },
  {
    id: 6,
    title: "Dental Cleaning",
    amount: 2000,
  },
  {
    id: 7,
    title: "GOMO Internet Data",
    amount: 599,
  },
];

const expenseList = document.getElementById("expense-list");
const totalExpense = document.getElementById("total-expense");

// Format and display expenses from expense[] array
expenses.forEach((expense) => {
  let expenseEntry = document.createElement("li");
  expenseEntry.innerHTML = `
    <li>
      <p>${expense.title}</p>
      <p>PHP <span>${expense.amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</span></p>
    </li>
  `;
  expenseList.appendChild(expenseEntry);
});

// Calculate total expense, format it with commas and decimals, then display it
totalExpense.textContent = expenses
  .reduce(function (total, expense) {
    return total + expense.amount;
  }, 0)
  .toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });