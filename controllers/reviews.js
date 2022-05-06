const Brewery = require("../models/brewery");

module.exports = {
  create,
  update: updateReview,
  delete: deleteReview,
  edit: editReview
};

function create(req, res) {
  Brewery.findById(req.params.id, function (err, brewery) {
    req.body.user = req.user._id;
    req.body.username = req.user.name;
    req.body.userAvatar = req.user.avatar;
    req.body.locale = req.user.locale;
    brewery.reviews.push(req.body);
    brewery.save(function (err) {
      res.redirect(`/breweries/${brewery._id}`);
    });
  });
}

function editReview(req, res) {
    Book.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, review) {
      if (err || !review) return res.redirect('/reviews');
      res.render('breweries/edit', {review});
    });
  }

  function updateReview(req, res) {
    Book.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
      req.body,
      {new: true},
      function(err, review) {
        if (err || !review) return res.redirect('/reviews');
        res.redirect(`/breweries/${review._id}`);
      }
    );
  }
// function editReview(req, res) {
//   Brewery.findByIdAndUpdate(req.params.id, function (err, review) {
//     req.body.user = req.user._id;
//     req.body.username = req.user.name;
//     req.body.userAvatar = req.user.avatar;
//     req.body.locale = req.user.locale;
//     review.reviews.push(req.body);
//     review.save(function (err) {
//       res.redirect(`/edit/${review._id}`);
//     });
//   });
// }

function deleteReview(req, res, next) {
  Brewery.findOne({ "reviews._id": req.params.id }).then(function (brewery) {
    const review = brewery.reviews.id(req.params.id);
    if (!review.user.equals(req.user._id)) {
      return res.redirect(`/breweries/${brewery._id}`);
    }
    review.remove();
    brewery
      .save()
      .then(function () {
        res.redirect(`/breweries/${brewery._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}
