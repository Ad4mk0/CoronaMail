import express from "express";
import { PrismaClient } from "@prisma/client";
// import prometheus from "prom-client";

const app = express();
const prisma = new PrismaClient();

const port = 4000;

// const collectDefaultMetrics = prometheus.collectDefaultMetrics;
// // Probe every 5th second.
// collectDefaultMetrics({ gcDurationBuckets: [5] });

// const counter = new prometheus.Counter({
//   name: "node_request_operations_total",
//   help: "The total number of processed requests",
// });

// const histogram = new prometheus.Histogram({
//   name: "node_request_duration_seconds",
//   help: "Histogram for the duration in seconds.",
//   buckets: [1, 2, 5, 6, 10],
// });

async function main() {
  // app.get("/metrics", async (req, res) => {
  //   res.set("Content-Type", prometheus.register.contentType);
  //   const metrics = await prometheus.register.metrics()
  //   res.end(metrics);
  // });

  // app.get("/api/health", (req, res) => {
  //   //Simulate a sleep
  //   var start = new Date();
  //   var simulateTime = 1000;

  //   setTimeout(function (argument) {
  //     // execution time simulated with setTimeout function
  //     var end = new Date().getTime() - start.getTime();
  //     histogram.observe(end / 1000); //convert to seconds
  //   }, simulateTime);

  //   counter.inc();

  //   res.send("App is running");
  // });
  

  app.get("/api/getEmailSubscribers", async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.send(allUsers);
  });

  app.get("/api/create/:email/:country", async (req, res) => {
    // prihodeit do DB noveho usera  s req.params.email a req.params.country
    // poslat naspat potvrdenie ze sa to ulozilo 
    res.send(`email: ${req.params.email} and country: ${req.params.country}`);
  });

  // vytvorit druhy .get() na unsubscribe, ktory deletne z DB toho usera a posle ze uz nebudes dostavat sracky do spamu

  app.get("/helloWorld", async (req, res) => {
    res.send('Pojeb sa !');
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  // const newUsers = await prisma.user.upsert({
  //   create: {
  //     email: "aa@gmail.com",
  //     country: "Slovakia",
  //   },
  //   update: {},
  //   where: { email: "aa@gmail.com" },
  // });
  // console.log(newUsers);

  // CUD - create, get, update, delete

  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "adamko2@petrzalka.sk",
  //     country: "Slovakia"
  //   }
  // })

  // console.log("new user: " + JSON.stringify(newUser));

  // let allUsers = await prisma.user.findMany();

  // console.log("all users: " + JSON.stringify(allUsers));

  // const updatedUser = await prisma.user.update({
  //   data: {
  //     country: 'Hungary'
  //   },
  //   where: {
  //     email: "adamko2@petrzalka.sk"
  //   }
  // })

  // const deletedUser = await prisma.user.delete({
  //   where: {
  //     id: 4
  //   }
  // })

  // const allUsers = await prisma.user.findMany();

  // console.log("all users: " + JSON.stringify(allUsers));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
