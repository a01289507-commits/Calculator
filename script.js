let display = document.querySelector('.display')
let button = document.querySelectorAll('.btn')

button.forEach(btn => {
    btn.addEventListener("click", () =>{
        let value = btn.innerText

        if(value === "C"){
            display.value = "0"
        }else if(value === "DEL"){
            display.value = display.value.slice(0, -1);
            if(display.value === '') display.value = '0'
        }else if(value === '='){
            try{
                display.value = eval(display.value)
            }catch{
                display.value = "Error"
            }
        }
      else{
        display.value = display.value === "0" ? value : display.value + value;
      }
    })
})