document.addEventListener("DOMContentLoaded", function() {
    let sizeArray = 0;
    
    document.getElementById("generate").addEventListener("click", function() {
        sizeArray = document.getElementById("sizeArray").value;
        if (sizeArray < 1 || sizeArray > 1000) {
            document.getElementById("tableBox").style.display = "none";
            alert("Size Of Array must be between 1 and 1000")
            return;
        }

        document.getElementById("tableBox").style.display = "table";
        document.getElementById("eleArrayBox").innerHTML = "";
        document.getElementById("resultMsg").innerHTML = "";
        document.getElementById("givenNumber").value = null;

        for (var i = 0; i < sizeArray; ++i) {
            let randomNumber = Math.floor(Math.random() * 101); //Random an integer from 0 to 100
            eleArrayBox = document.getElementById("eleArrayBox").innerHTML;
            document.getElementById("eleArrayBox").innerHTML = eleArrayBox + '<input type=\"number\" class=\"eleValueOfArray\" id=\"' + "ele" + i + '\" value=\"' + randomNumber + '\">';
        }
    });

    function checkEleValueOfArray() {
        for (var i = 0; i < sizeArray; ++i) {
            var val = document.getElementById("ele" + i).value;
            if (val.length == 0) return false;
        }
        return true;
    }

    function checkGivenNumber() {
        var val = document.getElementById("givenNumber").value;
        if (val.length == 0) return false;
        return true;
    }

    function sumEleValueOfArray() {
        let sum = 0;
        for (var i = 0; i < sizeArray; ++i) {
            sum += parseInt(document.getElementById("ele" + i).value, 10);
        }
        return sum;
    }

    function compareGivenNumberAndSumArray() {
        var givenNumber = document.getElementById("givenNumber").value;
        var sumArray = sumEleValueOfArray();
        let resultMsg = "";

        if (givenNumber < sumArray) {
            resultMsg = "Given number is <b>smaller</b> than sum of elements in array!";
        }
        else 
            if (givenNumber > sumArray) {
                resultMsg = "Given number is <b>bigger</b> than sum of elements in array!";
            }
            else {
                resultMsg = "Given number <b>equals</b> to sum of elements in array!";
            }
        
        document.getElementById("resultMsg").innerHTML = resultMsg;
    }

    document.getElementById("compare").addEventListener("click", function() {
        if (checkGivenNumber() == false) {
            alert("Please fill in value of given number!");
            return;
        }

        if (checkEleValueOfArray() == false) {
            alert("Please fill in value of all elements in an array!");
            return; 
        }

        compareGivenNumberAndSumArray();
    });
});