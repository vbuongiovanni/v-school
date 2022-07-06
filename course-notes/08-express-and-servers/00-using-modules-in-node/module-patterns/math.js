const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
module.exports = {
    add, // You can use object literals
    subtract : subtract // or spell it out if you are into redundancy.
}