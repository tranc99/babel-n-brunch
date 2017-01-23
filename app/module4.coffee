console.log("haha this is module 4 Coffeescript");
@add = (a, b) ->
  a  +  b
name = "Tendai Mutunhire"

subtract = (a, b) ->
  a - b

module.exports = {
  name1: name,
  dessert: "icecream",
  adder: add,
  subtract: subtract
}
