module.exports = function check(str, bracketsConfig) {
  // your solution
  var length = bracketsConfig.length;
  var arr = [];
  for (var p = 0;p < length;p++)
  {
      arr.push(0);
  };
  for (var i = 0; i < str.length; i++)
  {
      for (var j = 0; j < length; j++)
      {
          if (str[i] == bracketsConfig[j][0])
          {
              arr[j]++;
          };
          if (str[i] == bracketsConfig[j][1])
          {
              arr[j]--;
          };
          if (arr[j] < 0)
          {
              return false;
          };
      }
  }
  for (var d = 0; d < length; d++)
  {
      if (arr[d] != 0)
      {
          return false;
      }
  };
  return true;
}
