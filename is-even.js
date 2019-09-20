function isEven(number) {
    const remainder = number % 2;

    if(remainder === 0) {
        return true;
    } 
    else {
        return false;
    }
}

export default isEven; // if we didn't put this on then another JS file can't import