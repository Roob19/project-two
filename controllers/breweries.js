const Brewery = require("../models/brewery");

module.exports = {
  index,
  show,
  new: newBrewery,
  create,
};

function index(req, res) {
  Brewery.find({}, function (err, breweries) {
    res.render("pageView/index", { title: "All Breweries", breweries });
  });
}

function show ( req, res ) {
    Brewery.findById(req.params.id)
    
}

function newBrewery(req, res) {
  res.render("pageView/new", { title: "Add Brewery" });
}

function create(req, res) {
  const brewery = new Brewery(req.body);
  brewery.save(function (err) {
    if (err) {
      return res.redirect("/pageView/new");
    }
    res.redirect(`/pageView/${brewery._id}`);
  });
}
