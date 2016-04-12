

Unicorn.all = [];

function Unicorn(name, color, favoriteFood, location) {
  this.name = name;
  this.color = color;
  this.favoriteFood = favoriteFood;
  this.location = location;
};

Unicorn.toHtml = function(arr){
  $(".list").html("");

  Unicorn.all.forEach(function(el) {
    Var unicorn = "<li> Name=" + el.name + "Color= " + el.color + "Favorite Food= " + el.favoriteFood + "</li>";

    $("#" + el.location +"List").append(unicorn);
  };
};

