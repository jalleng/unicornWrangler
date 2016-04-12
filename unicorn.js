

Unicorn.all = [];

function Unicorn(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

Unicorn.toHtml = function(){
  $(".list").html("");
  Unicorn.all.forEach(function(el) {
    var unicorn = "<li> Name=" + el.name + "Color= " + el.color +
                  "Favorite Food= " + el.favoriteFood + "</li>";
    $("#" + el.location +"List").append(unicorn);
  });
};

Unicorn.fetch = function(){
  $.getJSON("unicornData.json", function(data) {
    data.forEach(function(unicorn) {
      var unicorn = new Unicorn(unicorn);
      Unicorn.all.push(unicorn);
    });
  })
};

Unicorn.fetch();
Unicorn.toHtml();
