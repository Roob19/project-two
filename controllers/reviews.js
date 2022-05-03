const Brewery = require('../models/brewery');

module.exports = {
    create,
    delete: deleteReview
};

function create (req, res) {
    Brewery.findById(req.params.id, function (err,brewery) {
        req.body.user = req.user._id;
        req.body.username = req.user.name;
        req.body.userAvatar = req.user.avatar;
        req.body.locale = req.user.locale;
        brewery.reviews.push(req.body);
        brewery.save (function (err) {
            res.redirect(`/pageView/${brewery._id}`);
        });
    });
}

function deleteReview (req, res, next) {
    Brewery.findOne({'reviews._id': req.params.id})
    .then(function (brewery) {
        const review = brewery.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) {
            return res.redirect(`/pageView/${brewery._id}`);
        }
        review.remove();
        brewery.save()
        .then(function () {
            res.redirect(`/pageView/${brewery._id}`);
        })
        .catch(function (err) {
            return next(err);
        });
    });
}