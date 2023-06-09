let btn = document.querySelector(".button");
let inputs = document.querySelectorAll("input");
let regex = [/.+/, /.+/, /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/, /.+/];
btn.addEventListener("click", function() {
    inputs.forEach((ele, index) => {
        if (ele.value.match(regex[index]) == null) {
            ele.parentElement.children[1].style.display = "block";
            ele.parentElement.children[2].style.display = "block";
            if (index == 2) {
                inputs[2].placeholder = "email@example.com";
                const style = document.createElement('style');
                style.innerHTML = `input.email::placeholder { color: red; }`;
                document.head.appendChild(style);
            }
        }
    })
})