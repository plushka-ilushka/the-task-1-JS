'use strict'

let money = +prompt("Ваш бюджет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



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

};

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 300) {
    console.log("Маленькая зарплата");
} else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 1000) {
    console.log("Средняя зарплата");
} else if (appData.moneyPerDay > 1000) {
    console.log("Высокая зарплата")
} else {
    console.log("Произошел троллинг")
}
