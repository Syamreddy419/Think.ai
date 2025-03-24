async function createCustomer(req, res, next) {
  try {
    res.send("Customer created");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createCustomer,
};
