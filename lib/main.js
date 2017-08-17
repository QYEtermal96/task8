function changeNumberToChar(number) {
    let string = "";
    var flag = 0;
    if(number === 0){
        return "||:::";
    }
    if (number >= 7) {
        number -= 7;
        string += "|";
        flag++;
    } else {
        string += ":"
    }
    if (number >= 4) {
        number -= 4;
        string += "|";
        flag++;
    } else {
        string += ":"
    }
    if (number >= 2) {
        number -= 2;
        string += "|";
        flag++;
    } else {
        string += ":"
    }
    if (number >= 1) {
        number -= 1;
        string += "|";
        flag++;
    } else {
        string += ":";
    }
    if (flag === 1) {
        string += "|";
    } else {
        string += ":";
    }
    return string;
}

function main(str){
    let string = "| ";
    let count = 0;
    let res = str.replace("-","");
    for( var i = 0; i<res.length;i++){
        string += changeNumberToChar(parseInt(res.charAt(i)));
        count += parseInt(res.charAt(i));
    }

    string += changeNumberToChar( count%10 ===0? 0:(10 - count%10));

    string += " |"
    return string;
}

module.exports = main;
