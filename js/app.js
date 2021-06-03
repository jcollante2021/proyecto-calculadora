
function val(result){
    form.disp.value = form.disp.value + result;
}
function cal(){
    if(form.disp.value == ""){
        alert("POR FAVOR INGRESE ALGÚN VALOR")
    }else{
        form.disp.value = eval(form.disp.value);
    }
}
function cancel(){
    form.disp.value = "";
}
