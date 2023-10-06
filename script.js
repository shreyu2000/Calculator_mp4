let display = document.getElementById('display');
let buttons = document.querySelectorAll('button')

let string = " ";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e)=>{

    try{
        if(e.target.innerHTML == '='){
            string =eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML == 'Reset'){
                string = " ";
                display.value ="0";
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.slice(0, -1);    //substring(0, string.length-1);
            display.value = string;
        }
    
        else{
            string +=e.target.innerHTML;
            display.value =string;
        }
    }
        catch (error) {
            display.value = "Error";
            string = "";
        }
    });
});