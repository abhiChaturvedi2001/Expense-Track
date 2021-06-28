const myBalance = document.getElementById("balance");
const incomeBalance = document.querySelector(".income");
const expenseBalance = document.querySelector(".expense");
const userName = document.querySelector("#Text");
const userAmt = document.querySelector("#Amount");
const incomeBtn = document.getElementById("btn1");
const expenseBtn = document.getElementById("btn2");
const list = document.querySelector(".list");

// making aray of object
const state = {
  balance: 7000,
  income: 9000,
  expense: 2000,
  transactions: [
    {  name: "salary", type: "income", amount: 9000 },
    {  name: "Buy guitar", type: "expense", amount: 2000 },
  ],
};

const mainFunc = () => {
 listneres()
};

const uniqueId = () => {
  return Math.round(Math.random()*100000)
}


const init = () => {
  myBalance.innerHTML = `$${state.balance}`;
  incomeBalance.innerHTML = `$${state.income}`;
  expenseBalance.innerHTML = `$${state.expense}`;

  list.innerHTML  = ``

  state.transactions.forEach((currenelement, index) => {
    let item = currenelement;
    const newLi = document.createElement("li");
    newLi.append(item.name);
    list.appendChild(newLi);
    const span = document.createElement("span");
    if (item.type === "income") {
      span.classList.add("income-amt");
    } else if (item.type === "expense") {
      span.classList.add("expense-amt");
    }
    newLi.appendChild(span);
    span.innerHTML = `$${item.amount}`;
    const button = document.createElement('button')
    button.setAttribute('data-id',item.id)
    button.addEventListener("click",deleteClick)
    button.innerHTML = '<i class="fa fa-trash"></i>'
    button.classList.add('button')
    newLi.append(button)
  });
};

const update = () => {
    let balance = 0,
    income = 0,
    expense = 0,
    item;
    state.transactions.forEach((currenelement, index)=>{
        let item = currenelement;
        if(item.type === "income"){
            income += item.amount
        }else if(item.type ==="expense"){
            expense += item.amount
        }
    })
    balance = income - expense
    state.balance = balance;
    state.income = income;
    state.expense = expense
    init()

}; 

const listneres = () => {
  incomeBtn.addEventListener("click",add)
  expenseBtn.addEventListener("click",sub)
}

const add = () =>{
      let userAmt = Amount.value
    if(userName !== "" && userAmt !== ""){
        let tranasctionValue = {
            name: userName.value,
            amount:parseInt(Amount.value),
            type:"income",
        };
        state.transactions.push(tranasctionValue)
        update();
    }else{
        alert("please enter the valid data")
    }
}
const sub = () =>{
      let userAmt = Amount.value
    if(userName !== "" && userAmt !== ""){
        let tranasctionValue = {
            name: userName.value,
            amount:parseInt(Amount.value),
            type: "expense",
        };
        state.transactions.push(tranasctionValue)
        update();
    }else{
        alert("please enter the valid data")
    }
};

const deleteClick = (event) =>{
    var id = parseInt(event.target.getAttribute('data-id'));
    var deleteIndex;
    for (let i=0; i<state.transactions.length; i++){
        if(state.transactions[i] === id){
            deleteIndex = i;
            break;
        }
    }
    state.transactions.splice(deleteIndex, 1)
    update();
 }



mainFunc();
