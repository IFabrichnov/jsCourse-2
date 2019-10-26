var start = document.getElementById('start'),
    budget = document.querySelectorAll('.budget-value'),
    daybudget = document.querySelectorAll('.daybudget-value'),
    level = document.querySelectorAll('.level-value'),
    expenses = document.querySelectorAll('.expenses-value'),
    optionalexpenses = document.querySelectorAll('.optionalexpenses-value'),
    income = document.querySelectorAll('.income-value'),
    monthsavings = document.querySelectorAll('.monthsavings-value'),
    yearsavings = document.querySelectorAll('.yearsavings-value'),
    year = document.querySelectorAll('.year-value'),
    month = document.querySelectorAll('.month-value'),
    day = document.querySelectorAll('.day-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),

    btnAccept = document.getElementsByTagName('button')[0],
    btnCalc = document.getElementsByTagName('button')[1],
    btnApprove = document.getElementsByTagName('button')[2],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    choose = document.querySelector('.choose-income'),
    checksavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent');   