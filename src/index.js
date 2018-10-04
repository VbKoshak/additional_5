module.exports = function check(str, bracketsConfig) {
// your solution
// your solution
  let size = bracketsConfig.length;
  let repeats = str.length/2;
  for (let i = 0; i < repeats; i++)
  {
      for (let j = 0; j < str.length-1;j++)
      {
          for (let k = 0; k < size; k++)
          {
              if ((str[j] == bracketsConfig[k][0]) && (str[j+1] == bracketsConfig[k][1]) )
              {
                  let temp = [];
                  for (let p = 0; p < str.length; p++)
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
