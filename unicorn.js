

Unicorn.all = [];

function Unicorn(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

Unicorn.toHtml = function(){
  //$(".list").html("");

  Unicorn.all.forEach(function(el) {
    var unicorn = "<li> Name= " + el.name + ", Color= " + el.color +
                  ", Favorite Food= " + el.favoriteFood + "</li>";
    $("#" + el.location + "List").append(unicorn);
  });
};

Unicorn.fetch = function(next){
  $.getJSON("unicornData.json", function(data) {
    data.forEach(function(el) {
      var unicorn = new Unicorn(el);
      Unicorn.all.push(unicorn);
    });
    //next();

  })
    .done(function(){
      console.log('Done Again', Unicorn.all);
      next();
  });
};

Unicorn.fetch(Unicorn.toHtml);
// Unicorn.toHtml();
