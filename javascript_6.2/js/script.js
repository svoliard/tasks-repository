let index = 0;
const array = Array();

function add_element_to_array() {
    array[index] = document.getElementById("text1").value;
    console.log(`Element: ${array[index]} Added at index ${index}`);
    index++;
    document.getElementById("text1").value = "";
}

function display_array() {
    let result = "<hr/>";

    for (let y = 0; y < array.length; y++) {
        result += `Element ${y} = ${array[y]}<br/>`;
    }
    document.getElementById("Result").innerHTML = result;
}