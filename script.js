'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?","");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0;i < 2;i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if((typeof(a)) === "string" && (typeof(a)) != null &&  (typeof(b)) != null
            && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay <= 300) {
            console.log("Маленькая зарплата");
        } else if (appData.moneyPerDay >= 300 && appData.moneyPerDay <= 1000) {
            console.log("Средняя зарплата");
        } else if (appData.moneyPerDay >= 1000) {
            console.log("Высокая зарплата")
        } else {
            console.log("Произошел троллинг")
        }
    },
    checkSavings: function(){
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую","");
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректное значение или не ввели его вовсе");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Mayby anything else?"));
        appData.income.sort();
        appData.income.forEach(function(itemmassive, i){
            alert("Способы дополнительного заработка: " + (i+1) + "-" + itemmassive);
        });

    }

};

for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key + "-" + appData[key]);
}











