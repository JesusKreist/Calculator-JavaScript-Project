// Now I I WILL COMMIT
// AND PUSH
// WHO KNOWS

(function() {
    const displayScreen = document.querySelector(".screen");
    const btns = document.getElementsByClassName("btn btn-grey");
    const myOperators = document.getElementsByClassName("btn btn-yellow");
    const clearBtn = document.querySelector(".btn-clear");
    const equalBtn = document.querySelector(".btn-equal");
    const answerButton = document.querySelector(".btn-ans");

    let computeValues = "";
    let lastAnswer = null;


    const clearScreen = () => {
        displayScreen.value = "";
        computeValues = "";
    };


    const compute = (event) => {
        let stringNumber = String(event.target.dataset.num);
        computeValues += stringNumber;
        displayScreen.value = computeValues;
    };

    const calculate = () => {
        try {
            let result = math.evaluate(computeValues);
            computeValues = "";
            displayScreen.value = result;
            lastAnswer = result;

        } catch (error) {
            displayScreen.value = "Please Check Your Expression!";
        };
    };

    const lastResult = () => {
        computeValues += lastAnswer;
        displayScreen.value = computeValues;
    };

    // wire up all the buttons
    clearBtn.addEventListener("click", clearScreen);
    equalBtn.addEventListener("click", calculate);
    answerButton.addEventListener("click", lastResult);


    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", compute);
    };

    for (let i = 0; i < myOperators.length; i++) {
        myOperators[i].addEventListener("click", compute);
    }; 
})();
