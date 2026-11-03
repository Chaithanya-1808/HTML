
function calculate() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const operation = document.getElementById('operation').value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {

        switch (operation) {

            case 'sum':
                result = num1 + num2;
                break;

            case 'product':
                result = num1 * num2;
                break;

            case 'difference':
                result = num1 - num2;
                break;

            case 'remainder':
                result = num1 % num2;
                break;

            case 'quotient':
                result = num1 / num2;
                break;

            case 'power':
                result = Math.pow(num1, num2);
                break;

            case 'square-root':
                result = Math.sqrt(num1);
                break;

            case 'square':
                result = num1 * num1;
                break;

            default:
                result = "Unknown operation.";
        }
    }

    document.getElementById('output').textContent =
        `The result is: ${result}`;
}
