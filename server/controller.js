const database = require('../database/dbhelpers');

module.exports = {
  getAll: (req, res) => {
    database
      .getAll()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  },
  getOne: (req, res) => {
    let { id } = req.params;
    database
      .getOne(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(400).send(err));
  },
  searchQuery: (req, res) => {
    console.log("reqQuery", req.query)
    let obj = {
      image: req.params.id,
      queryStr: req.query.query
    };
    database
      .searchQuery(obj)
      .then((data) => {
        let shortenData;
        if (data.length > 16) {
          shortenData = data.slice(0, 16);
          res.status(200).send(shortenData);
        }
        res.status(200).send(data);
      })
      .catch((err) => res.status(400).send(err));
  },
  getRatings: (req, res) => {
    let id = req.params.id;
    database
      .getRatings(id)
      .then((data) => {
        let reviewRating = data.map((review) => {
          return review.reviews;
        });
        res.status(200).send(reviewRating);
      })
      .catch((err) => res.status(400).send('error getting ratings'));
  },
  postReview: (req, res) => {
    let obj = {
      id: req.params.id,
      rating: req.body.rating,
      title: req.body.title,
      review: req.body.review,
      recommendation: req.body.recommendation,
      nickname: req.body.nickname,
      email: req.body.email,
      age: req.body.age,
      bodyType: req.body.bodyType,
      location: req.body.location,
      wearTo: req.body.wearTo,
      likes: req.body.likes,
      dislikes: req.body.dislikes
    };
    database
      .postReview(obj)
      .then(() => {
        res.status(200).send('posted review');
      })
      .catch((err) => {
        res.status(400).send('could not post review');
      });
  }
};
