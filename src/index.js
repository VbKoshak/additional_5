module.exports = function check(str, bracketsConfig) {
  // your solution
  var length = bracketsConfig.length; //количсетво пар скобок
  var arr = []; //хранит количество открытых/закрытых скобок каждого типа
  for (var p = 0;p < length;p++)
  {
      arr.push(0);
  }; //придаём всем значением ноль
  for (var i = 0; i < str.length; i++) //считываем посимвольно строку
  {
      for (var j = 0; j < length; j++) //перебираем возможные скобки
      {
          if (str[i] == bracketsConfig[j][0]) //проверка на наличие открывающих скобок
          {
              arr[j]++; //инкремент значения скобок типа j
          };
          if (str[i] == bracketsConfig[j][1]) //проверка на наличие закрывающих скобок
          {
              arr[j]--; //денкремент значения скобок типа j
          };
          if (arr[j] < 0) //проверяем не имеем ли больше закрывающих скобок чем открывающих
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
