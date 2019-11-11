function temperatureConverter (){
    var temperaturevalue = document.getElementById('inputTemp').value;
    var temperaturenumber = parseFloat(temperaturevalue);
    var temperaturevar1 = (temperaturenumber - 32)*5/9;
    var temperaturevar2 = (temperaturenumber - 273.15);
    var value = /[cfk]/gi;
    var temperatureobj = {
        Celsius: "",
        Fahrenheit: "",
        Kelvin: ""
    };
    
    if (value.test(temperaturevalue)){
        if (temperaturevalue.match(/[c]/gi)){
        temperatureobj.Fahrenheit = (temperaturenumber *9/5)+ 32  ;
        temperatureobj.Kelvin = (temperaturenumber + 273.15)  ;
            clean(temperatureobj);
        } else if (temperaturevalue.match(/[f]/gi)){
        temperatureobj.Celsius = temperaturevar1;
        temperatureobj.Kelvin = temperaturevar1 + 273.15 ;
            clean(temperatureobj);
        }else {
        temperatureobj.Celsius = temperaturevar2 ;
        temperatureobj.Fahrenheit = temperaturevar2 *9/5 + 32 ;
            clean(temperatureobj);
        }
    } else {
    alert("Введите правильные данные");
    }
    function clean(obj){
        for (var key in obj){
            if (obj[key] === ""){
                delete obj[key];
            }
        }
        return obj
    }
    document.getElementById("result").innerHTML = JSON.stringify(temperatureobj, ["Celsius", "Fahrenheit", "Kelvin"]);
}


// задача 2
function run() {
    document.getElementById('resultHanoi').innerHTML = '';
    var N = parseInt(document.getElementById('board').value);  //количество дисков
    var A = "slot_a";                                          //погрузачные платформы
    var B = "slot_b";
    var C = "slot_c"
    var stack = [];                                // стек вызовов функций
    stack.push({ args: [N, A, B, C], pos: 0 });     // аргументы и точка вызова

    if (N >= 3 && N <= 8){
        while (stack.length > 0) {                       // пока стек не пустой
                var fun = stack.pop();                  
                switch (fun.pos) {                            // переходим на точку сохранения
                    case 0:                                  // первый вызов
                        if (fun.args[0] <= 0)
                            continue;                          // функция закончилась: "return"
                        fun.pos = 1; stack.push(fun);         // перед рекурсией сохраняемся
                        stack.push({ args: [fun.args[0] - 1, fun.args[1], fun.args[3], fun.args[2]], pos: 0 });
                        break;
                    case 1:
                        document.getElementById('resultTask').innerHTML += ('Двигаем плиту с ' + fun.args[1] + ' -> ' + 'на ' + fun.args[2] + "<br>");

                        fun.pos = 2; stack.push(fun);         // перед рекурсией сохраняемся
                        stack.push({ args: [fun.args[0] - 1, fun.args[3], fun.args[2], fun.args[1]], pos: 0 });
                        break;
                    case 2:                                  // функция закончилась: "return"
                        break
                }
            }
    }else {
        document.getElementById('resultHanoi').innerHTML += 'Введите то количество что указано выше ';
    }
}

//задача 3
function getRandom() {
    document.getElementById('pOnep').innerHTML = " Player1: ";
    document.getElementById('pTwop').innerHTML = " Player2: ";
    var player1 = [];
        player1[0] = +document.getElementById('player1').value; // Получаем значение из инпута
    var player2 = [];
        player2[0] = +document.getElementById('player2').value; // Получаем значение из инпута
    var playersCheckone = document.getElementById('pmove1');    
    var playersChecktwo = document.getElementById('pmove2'); 
    if (playersCheckone.checked == true) {                          //Проверяем чекбокс на выбор
        playerMove(player1);
        document.getElementById('pOnep').innerHTML += " Шанс попадания: " + player1.slice(-1)[0] + "." + " Шаги " + player1.length;
        playerMove(player2);
        document.getElementById('pTwop').innerHTML += " Шанс попадания: " + player2.slice(-1)[0] + "." + " Шаги " + player2.length;
    } else if (playersChecktwo.checked == true) {                       //Проверяем чекбокс на выбор
        playerMove(player2);
        document.getElementById('pTwop').innerHTML += " Шанс попадания: " + player2.slice(-1)[0] + "." + " Шаги " + player2.length;
        playerMove(player1);
        document.getElementById('pOnep').innerHTML += " Шанс попадания: " + player1.slice(-1)[0] + "." + " Шаги " + player1.length;
    } else {
        alert("Выбирете Игрока")
    }
}
function playerMove(arr){                               //Делаем шаги на встречу игроку
    for (i = 0; i < 10; i++) {
        if (arr[i] >= 0.8) {                               //Принимаем масивы и добовляем в них значение шанса
            return arr;                                     //возвращаем масив 
        } else {
            arr.push(playerChance(arr))
        }
    }
}
function playerChance(arr) {                            // Высчитываем шанс попадания
    var numChance = (arr[i] + 0.05 + Math.random() / 10).toFixed(2);
    return +numChance;
}

