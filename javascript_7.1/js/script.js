const incrementCountButton = document.getElementById("incrementCount");
const totalCount = document.getElementById("counterBox");

let count = 0;

totalCount.innerHTML = count;

const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
};

incrementCountButton.addEventListener("click", handleIncrement);

document.getElementById('input').addEventListener(
    'keypress',
    (event) => {
        console.log(event);
        if (event.keycode >= 65 && event.keycode <= 90) {
            alert('you pressed letter' + event.key);
        }
    }
)