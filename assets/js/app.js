const screen_top = document.querySelector(".top-screen");
const screen_bottom = document.querySelector(".bottom-screen");
const add_btn = document.querySelector("#add");
const substract_btn = document.querySelector("#subs");
const multiply_btn = document.querySelector("#multi");
const divide_btn = document.querySelector("#divi");
const percent_btn = document.querySelector("#percent");
const plus_minus_btn = document.querySelector("#plus-minus");
let addition = false;
let substraction = false;
let multiplication = false;
let division = false;
let operator_selected = false;

document.addEventListener('click', function(e){
    if(e.target.className=="digits"){
        screen_bottom.textContent += e.target.textContent;
    }
    if(e.target.className=="operators"){
        // clear
        if (e.target.textContent == "C"){
            screen_top.textContent = "";
            screen_bottom.textContent = "";
            Remove_Classlist();
        }
        // add
        if (e.target.textContent == "+"){
            if (screen_bottom.textContent != ""){
                screen_top.textContent = screen_bottom.textContent;
                screen_bottom.textContent = "";
            }
            addition = true;
            Remove_Classlist();
            add_btn.classList.add("operator-clicked");
            operator_selected = true;
        }
        // substract
        if (e.target.textContent == "-"){
            if (screen_bottom.textContent != ""){
                screen_top.textContent = screen_bottom.textContent;
                screen_bottom.textContent = "";
            }
            substraction = true;
            Remove_Classlist();
            substract_btn.classList.add("operator-clicked");
            operator_selected = true;
        }
        // multiplication
        if (e.target.textContent == "X"){
            if (screen_bottom.textContent != ""){
                screen_top.textContent = screen_bottom.textContent;
                screen_bottom.textContent = "";
            }
            multiplication = true;
            Remove_Classlist();
            multiply_btn.classList.add("operator-clicked");
            operator_selected = true;
        }
        // division
        if (e.target.textContent == "/"){
            if (screen_bottom.textContent != ""){
                screen_top.textContent = screen_bottom.textContent;
                screen_bottom.textContent = "";
            }
            division = true;
            Remove_Classlist();
            divide_btn.classList.add("operator-clicked");
            operator_selected = true;
        }
        // plus-minus
        if (e.target.textContent == "+/-"){
            if (screen_top.textContent != ""){
                Plus_Minus();
            }
            if (screen_top.textContent == ""){
                screen_top.textContent = screen_bottom.textContent;
                Plus_Minus();
            }
        }
        // percent
        if (e.target.textContent == "%"){
            if (screen_top.textContent != ""){
                Percentage();
            }
            if (screen_top.textContent == ""){
                screen_top.textContent = screen_bottom.textContent;
                Percentage();
            }
        }
    }
    if (e.target.textContent == "="){
        if(screen_top.textContent != ""){
            if(addition){
                screen_top.textContent = Addition(parseFloat(screen_top.textContent),parseFloat(screen_bottom.textContent)).toString();
            }
            if(substraction){
                screen_top.textContent = Substraction(parseFloat(screen_top.textContent),parseFloat(screen_bottom.textContent)).toString();
            }
            if(multiplication){
                screen_top.textContent = Multiplication(parseFloat(screen_top.textContent),parseFloat(screen_bottom.textContent)).toString();
            }
            if(division){
                screen_top.textContent = Division(parseFloat(screen_top.textContent),parseFloat(screen_bottom.textContent)).toString();
            }
        }
        if(!operator_selected){
            screen_top.textContent = "";
            screen_top.textContent = screen_bottom.textContent;
        }
        screen_bottom.textContent = "";
        Cancel_Operators();
        Remove_Classlist();
    }
});

function Addition(x,y){
    return x+y;
}

function Substraction(x,y){
    return x-y;
}

function Multiplication(x,y){
    return x*y;
}

function Division(x,y){
    return x/y;
}

function Percentage(){
    screen_top.textContent = (parseFloat(screen_top.textContent)*0.01).toString();
    screen_bottom.textContent = "";
}

function Plus_Minus(){
    screen_top.textContent = (parseFloat(screen_top.textContent)*-1).toString();
    screen_bottom.textContent = "";
}

function Remove_Classlist(){
    add_btn.classList.remove("operator-clicked");
    substract_btn.classList.remove("operator-clicked");
    multiply_btn.classList.remove("operator-clicked");
    divide_btn.classList.remove("operator-clicked");
    substract_btn.classList.remove("operator-clicked");
    substract_btn.classList.remove("operator-clicked");
}

function Cancel_Operators(){
    addition = false;
    substraction = false;
    multiplication = false;
    division = false;
    operator_selected = false;
}