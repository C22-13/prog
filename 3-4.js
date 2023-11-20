<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Tasks</title>
</head>
<body>

<script>
  // 1. Робота з класом Array

  function modifyArray(arr, start) {
    document.write("<p>Початковий масив: " + arr + "</p>");
    arr.unshift(start);
    arr.pop();
    if (arr.length >= 2) {
      arr[1] = "modified";
    }
    return arr;
  }

  // 2. Робота з методами класу Array

  function arrayOperations(arr) {
    document.write("<p>Початковий масив: " + arr + "</p>");
    arr.push("end");
    arr.shift();
    arr.splice(3, 0, "middle");
    return arr;
  }

  // 3. Робота з класом Number

  function checkInteger(num) {
    if (Number.isInteger(num)) {
      return "Число ціле";
    } else {
      return "Число не ціле";
    }
  }

  // Приклад виведення результатів на сторінку:

  // Завдання 1
  let array1 = [1, 2, 3, 4, 5];
  let modifiedArray1 = modifyArray(array1, "start");
  document.write("<p>Масив після модифікації: " + modifiedArray1 + "</p>");

  // Завдання 2
  let array2 = [1, 2, 3, 4, 5];
  let modifiedArray2 = arrayOperations(array2);
  document.write("<p>Масив після операцій: " + modifiedArray2 + "</p>");

  // Завдання 3
  let number1 = 7;
  let number2 = 7.5;

  document.write("<p>Результат для числа " + number1 + ": " + checkInteger(number1) + "</p>");
  document.write("<p>Результат для числа " + number2 + ": " + checkInteger(number2) + "</p>");

</script>

</body>
</html>