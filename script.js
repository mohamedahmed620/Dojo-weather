function change_city(element){
    return ("Loading weather report...")
}
pop_up = document.querySelector("pop_up")
function remove_pop_up(element){
    return element.remove()
}
var today_l = document.querySelector(".today_l")
var today_h = document.querySelector(".today_h")
var Tomorrow_h = document.querySelector(".Tomorrow_h")
var Tomorrow_l = document.querySelector(".Tomorrow_l")
var friday_h = document.querySelector(".friday_h")
var friday_l = document.querySelector(".friday_l")
var saturday_h = document.querySelector(".saturday_h")
var saturday_l = document.querySelector(".saturday_l")
var today_hf = 0
var today_lf = 0
var friday_hf = 0
var friday_lf = 0
var saturday_hf = 0
var saturday_lf = 0
var saturday_hf = 0
var saturday_lf = 0
function change_temp(element){
    if (element.value == "C"){
        today_h.innerText = 24
        Tomorrow_h.innerText = 27
        friday_h.innerText = 21
        saturday_h.innerText = 26
        today_l.innerText = 18
        Tomorrow_l.innerText = 19
        friday_l.innerText = 16
        saturday_l.innerText = 21
    }
    else if (element.value == "F"){
        today_hf = parseInt(today_h.innerText) *(9/5) +32
        today_h.innerText = parseInt(today_hf)

        Tomorrow_hf = parseInt(Tomorrow_h.innerText) *(9/5) +32
        Tomorrow_h.innerText = parseInt(Tomorrow_hf)

        friday_hf = parseInt(friday_h.innerText) *(9/5) +32
        friday_h.innerText = parseInt(friday_hf)

        saturday_hf = parseInt(saturday_h.innerText) *(9/5) +32
        saturday_h.innerText = parseInt(saturday_hf)

        today_lf = parseInt(today_l.innerText) *(9/5) +32
        today_l.innerText = parseInt(today_lf)

        Tomorrow_lf = parseInt(Tomorrow_l.innerText) *(9/5) +32
        Tomorrow_l.innerText = parseInt(Tomorrow_lf)

        friday_lf = parseInt(friday_l.innerText) *(9/5) +32
        friday_l.innerText = parseInt(friday_lf)

        saturday_lf= parseInt(saturday_l.innerText) *(9/5) +32 
        saturday_l.innerText = parseInt(saturday_lf)
    }  
}
