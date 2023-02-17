const Tourist = require("../models/tourist");

exports.create = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req.body, "REQ Body");
  try {
    const touristObj = {
      name: req.body.name,
      email: req.body.email,
      destination: req.body.destination,
      travellersCount: req.body.travellersCount,
      totalBudget: req.body.totalBudget,
    };

    const tourist = await new Tourist(touristObj).save();
    res.json(tourist);
    console.log("touristjs", req.body);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
exports.list = async (req, res) => {
  res.json(await Tourist.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async (req, res) => {
  let tourist = await Tourist.findOne({ slug: req.params.slug }).exec();
  res.json(tourist);
};
