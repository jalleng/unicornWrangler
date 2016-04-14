(function(module) {

  Unicorn.all = [];

  function Unicorn(opts) {
      Object.keys(opts).forEach(function(e, index, keys) {
        this[e] = opts[e];
      },this);
    }

  Unicorn.toHtml = function(){
    Unicorn.all.forEach(function(el) {
      var unicorn = "<li> Name= " + el.name + ", Color= " + el.color +
                    ", Favorite Food= " + el.favoriteFood + "</li>";
      $("#" + el.location + "List").append(unicorn);
    });
  };

  Unicorn.fetch = function(next){
    $.getJSON("data/unicornData.json", function(data) {
      data.forEach(function(el) {
        var unicorn = new Unicorn(el);
        Unicorn.all.push(unicorn);
      });
    })
      .done(function(){
        next();
    });
  };

  Unicorn.fetch(Unicorn.toHtml);

  module.Unicorn = Unicorn;
})(window);
