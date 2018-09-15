module.exports = function check(str, bracketsConfig) {
  // your solution
  var size = bracketsConfig.length;
  var repeats = str.length/2;
  for (var i = 0; i < repeats; i++)
  {
      for (var j = 0; j < str.length-1;j++)
      {
          for (var k = 0; k < size; k++)
          {
              if ((str[j] == bracketsConfig[k][0]) && (str[j+1] == bracketsConfig[k][1]) )
              {
                  var temp = [];
                  for (var p = 0; p < str.length; p++)
                  {
                      if((p == j) || (p ==j+1)) continue;
                      temp.push(str[p]);
                  };
                  str = temp;
              }
          }
      }
  }

  if (str.length == 0)
  {
      return true;
  }
  else
  return false;
}
