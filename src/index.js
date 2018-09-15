module.exports = function check(str, bracketsConfig) {
  // your solution
  var length = bracketsConfig.length; //количсетво пар скобок
  var arr = []; //хранит количество открытых/закрытых скобок каждого типа
  for (var p = 0;p < length;p++)
  {
      arr.push(0);
  }; //придаём всем значением ноль
  var check = new Array();
  var opened = new Array();
   /*на каждый вид скобок i -> при открытии скобки создаётся массив i-j -> хранящий значение arr каждого вида скобок i-j-k; при закрытии скобки i сверяется последний элемент массива i-j с тем статусом который имеется сейчас и если они совпадают удаляется последний элемент мссива i-j если же нет
  возвращается значение false
  */
  for (var i = 0; i < length; i++) // i = индекс вида скобок
  {
      check[i] = new Array();
      opened[i] = -1;
  };
  var temp = [];//запишем массив хранящий статус всех скобок
  for (var s = 0; s < str.length; s++) //считываем посимвольно строку
  {
      for (var i = 0; i < length; i++) //перебираем возможные скобки
      {
          if (str[s] == bracketsConfig[i][0]) //проверка на наличие открывающих скобок
          {
              opened[i]++;
              check[i][opened[i]] = new Array;
              for (var z = 0; z < length; z++)
              {
              check[i][opened[i]][z] = arr[z];
              };
              arr[i]++; //инкремент значения скобок типа j
          };
          if (str[s] == bracketsConfig[i][1]) //проверка на наличие закрывающих скобок
          {
              arr[i]--; //денкремент значения скобок типа j
              for (var z = 0; z < length; z++)
              {
                  if (check[i][opened[i]][z] != arr[z])
                  return false;
              }
              opened[i]--;
          };
          if (arr[i] < 0) //проверяем не имеем ли больше закрывающих скобок чем открывающих
          {
              return false;
          };
      }
  }
  for (var d = 0; d < length; d++) //проверяем у скобок типа d равенство открывающихся и закрывающихся скобок
  {
      if (arr[d] != 0)
      {
          return false;
      }
  };
  return true;
}
