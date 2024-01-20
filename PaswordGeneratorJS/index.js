// PASWORD GENERATOR

function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars ="qwertyuıopasdfghjklizxcvbnm"
    const uppercaseChars ="QWERTYUIOPASDFGHJKLZXCVBNM"
    const numberChars ="0123456789"
    const symbolChars="!@^+%&/()=?_-+";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase ? lowercaseChars:"";
    allowedChars+=includeUppercase ? uppercaseChars:"";
    allowedChars+=includeNumbers ? numberChars:"";
    allowedChars+=includeSymbols ? symbolChars:"";

    let pw="";
    for(let i=0;i<passwordLength;i++){
        let char=allowedChars[Math.floor((Math.random()*allowedChars.length))]
        pw+=char;
    }
    // console.log("pw:"+pw)
    return pw;
}

const passwordLength=20;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;



const password=generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

console.log(`Generated password: ${password}`);