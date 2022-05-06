const Brewery = require("../models/brewery");

module.exports = {
  index,
  show,
  new: newBrewery,
  create,
  breweryQuery,
};

function index(req, res) {
  //   console.log("ALLL BREWERIES");
  Brewery.find({}, function (err, breweries) {
    // console.log("CALLING INDEX");
    res.render("breweries/allBreweries", { title: "All Breweries", breweries });
    // res.send('HELLO WORLD');
  });
}

// function show(req, res) {
//   Brewery.findById(req.params.id)
//     .populate("user")
//     .exec(function (err, brew) {
//       User.find({ _id: { $nin: brew.user } })
//         .sort("name")
//         .exec(function (err, users) {
//           res.render("breweries/showBreweries", {
//             title: "Brewery Detail",
//             brew,
//             users,
//           });
//         });
//     });
// }

function show(req, res) {
  Brewery.findById(req.params.id, function (err, brewery) {
    res.render("breweries/showBreweries", {
      title: "Brewery Detail",
      brewery
    });
  });
}

function newBrewery(req, res) {
  console.log(`newBrewery controller`, req.body);
  res.render("breweries/new", { title: "Add Brewery" });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const brewery = new Brewery(req.body);
  brewery.save(function (err) {
    if (err) {
      return res.redirect("/breweries/new");
    }
    res.redirect(`breweries/${brewery._id}`);
  });
}

function breweryQuery(req, res) {
  console.log(`breweryQuery controller`, req.body);
}
