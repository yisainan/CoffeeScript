// Generated by CoffeeScript 1.12.7
(function() {
  var awardMedals, contenders, gold, rest, silver,
    slice = [].slice;

  gold = silver = rest = "unknown";

  awardMedals = function() {
    var first, others, second;
    first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    gold = first;
    silver = second;
    return rest = others;
  };

  contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Usain Bolt"];

  awardMedals.apply(null, contenders);

  alert("The Field: " + rest);

}).call(this);
