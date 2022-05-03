const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("process.env.DATABASE_URL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.on("connected", function () {
  console.log(`connected to mongoDB ${db.name} at ${db.host} : ${db.port}`);
});
