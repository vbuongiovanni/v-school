let factor = 2;
function multiplyByFactor(num) {
    return num * factor;
}
function setFactor(num) {
    factor = num;
}
module.exports = {
    multiplyByFactor,
    setFactor
};