const mongoose = require("mongoose");
const host = process.env.DB_HOST || "127.0.0.1";
let dbURI = `mongodb://${host}/travlr`;
const readLine = require("readline");

if (process.env.NODE_ENV === "production") {
  dbURL = process.env.DB_HOST || process.env.MONGODB_URI;
}

// avoid current server discovery and monitoring engine is depreciated
mongoose.set("useUnifiedTopology", true);

const connect = () => {
  setTimeout(
    () =>
      mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
      }),
    1000
  );
};

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: `, err);
});

mongoose.connection.on("disconnected", () => {
  console.log(`Mongoose disconnected`);
});

if (process.platform === "win32") {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("SIGINT", () => {
    process.emit("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});

connect();

//Mongoose schema definition
require("./models/trips");
require("./models/user");
