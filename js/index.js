var first = Number(prompt('Input value for a'));
var second = Number(prompt('Input value for b'));
var third = Number(prompt('Input value for c'));
var result = formular(first, second, third)
function formular (a, b, c) {
    var d = (b * b) - (4 * a * c);
    if (d > 0) {
        var x1 = (((-b) + Math.sqrt(d)) / (2 * a));
        var x2 = (((-b) - Math.sqrt(d)) / (2 * a));
        return 'Two value' + '<br>' + 'x1= ' + x1 + '<br>' + 'x2= ' + x2;
    } else if (d == 0) {
        var x3 = (-b) / (2 * a);
        return  'One value x= ' + x3;
    }
    else {
        return 'No regular value';
    }
}
document.write(result);
