module.exports = function toReadable(number) {
    const arrFirst = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arrSecond = ['Hello', 'RSSchool', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = [];
    let arrNumber = String(number).split('');

    if (arrNumber.length <= 2 && number <= 19) {
        result.push(arrFirst[number])
    }
    if (arrNumber.length === 2 && number > 19 && number <= 99) {
        if (arrNumber[1] == 0) {
            result.push(arrSecond[arrNumber[0]])
        } else {
            result.push(arrSecond[arrNumber[0]], arrFirst[arrNumber[1]]);
        }
    }

    if  (arrNumber.length === 3 && number > 99 && number <= 999){
        if (arrNumber[1] == 0 && arrNumber[2] == 0){
            result.push(arrFirst[arrNumber[0]], 'hundred')
        } else if (arrNumber[2] == 0 && arrNumber[1] > 1){
            result.push(arrFirst[arrNumber[0]], 'hundred',arrSecond[arrNumber[1]])
        } else if (arrNumber[1] <= 1) {
            result.push(arrFirst[arrNumber[0]], 'hundred', arrFirst[number%100])
        } else {
            result.push(arrFirst[arrNumber[0]], 'hundred',arrSecond[arrNumber[1]], arrFirst[arrNumber[2]])
        }
    }
    return result.join(' ');
};
