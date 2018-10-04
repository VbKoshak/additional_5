// your solution
let size = bracketsConfig.length;
for (let j = 0; j < str.length - 1; j++) {
    for (let k = 0; k < size; k++) {
        if ((str[j] == bracketsConfig[k][0]) && (str[j + 1] == bracketsConfig[k][1])) {
            str = str.slice(0, j) + str.slice(j + 2, str.length);
            j = 0;
        }
    }
}

if (str.length == 0) {
    return true;
} else
    return false;
}
