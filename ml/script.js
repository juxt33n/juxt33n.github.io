function changeContent() {
    document.getElementById("content").innerHTML = "Your free redeem code is CITCS2fCC14";
}

var winningCode = "CITCS2fCC14";

function checkRedeemCode() {
    var redeemCode = document.getElementById("redeemCode").value.trim();
    var resultElement = document.getElementById("result");

    var wonSkin = checkValidity(redeemCode);

    if (wonSkin) {
        resultElement.innerText = "Congratulations! You won Pixel Blast - Wanwan!";
    } else {
        resultElement.innerText = "Sorry, you didn't win the skin.";
    }
}

function checkValidity(code) {

    return code === winningCode;
}