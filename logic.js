function retPlaceholder(){
    return "Let's See"
}

function retError(){
    return "ERROR ERROR";
}

function updateInput(target){
    xx = target.innerHTML;
    inp = document.getElementById("calculatorInput");
    inp.classList.remove("calculatorInputPlaceholder");
    if(inp.innerHTML === retPlaceholder() || inp.innerHTML === retError()){
        inp.innerHTML = xx;
    } 
    else{
        inp.innerHTML = inp.innerHTML + "" + xx;
    }
}

function evalInput(){
    try {
        inp = document.getElementById("calculatorInput");
        inp.innerHTML = eval(inp.innerHTML.replaceAll(" ", ""));
    } catch (error) {
        inp.innerHTML = retError();
        inp.classList.add("calculatorInputPlaceholder");
    }
}

function backInput(){
    inp = document.getElementById("calculatorInput");
    if(!(inp.innerHTML === retPlaceholder() || inp.innerHTML === retError())){
        inp.innerHTML = inp.innerHTML.slice(0, -1);
    } 
}

function clearInput(){
    inp = document.getElementById("calculatorInput");
    inp.innerHTML = retPlaceholder();
    inp.classList.add("calculatorInputPlaceholder");
}