function* fibonacci(){
    let num1 = 1;
    let num2 = 1;
    let resul = 0;
    let reset = false;
    while (true){
        resul = num1 + num2;
        num1 = num2;
        num2 = resul;
        reset = yield resul;
        if(reset){
            num1 = 1;
            num2 = 1;
            reset = false;
        }
    }
}
//cada uno guarda su propio scope
const gen = fibonacci();
const gen2 = fibonacci();
gen.next(false);
gen2.next();