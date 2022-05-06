const Brewery = require("../models/brewery");

module.exports = {
  index,
  show,
  new: newBrewery,
  create,
  breweryQuery,
};

function index(req, res) {
  console.log("ALLL BREWERIES");
  Brewery.find({}, function (err, breweries) {
    console.log("CALLING INDEX");
    res.render("pageView/allBreweries", { title: "All Breweries", breweries });
    // res.send('HELLO WORLD');
  });
}

function show(req, res) {
  Brewery.findById(req.params.id);
}

function newBrewery(req, res) {
    console.log(`newBrewery controller`, req.body);
  res.render("/new", { title: "Add Brewery" });
}

function create(req, res) {
  const brewery = new Brewery(req.body);
  brewery.save(function (err) {
    if (err) {
      return res.redirect("/pageView/new");
    }
    res.redirect(`/new/${brewery._id}`);
  });
}

function breweryQuery(req, res) {
    console.log(`breweryQuery controller`, req.body);
}
