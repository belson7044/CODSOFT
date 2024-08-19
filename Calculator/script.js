const display = document.getElementById("display");

function show(input){
    display.value += input;
}

function result()
{
    display.value = eval(display.value);
}

function remove_all()
{
    display.value = "";
}
function delete_it()
{
    display.value = display.value.slice(0, -1);
}