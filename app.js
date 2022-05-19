var sec = document.getElementById("input")
function tablevalue(num) {
 sec.value += num
  }
function totalValue(){
      sec.value = eval(sec.value)
     
  }
function allClear(){
    sec.value = ""
}
function valueRemove(){
  sec.value=sec.value.slice(0,-1)
 
}