import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'
import bodyParser from 'body-parser'
// import prometheus from "prom-client";

const app = express();
const prisma = new PrismaClient();

const port = 4000;



app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

 
app.use(cors())

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
    try {
      const allUsers = await prisma.user.findMany();
      res.send(allUsers);
    }
    catch (err) {
      res.send(err)
    }
  });

  app.post("/api/create", async (req, res) => {
    // prihodeit do DB noveho usera  s req.params.email a req.params.country
    // poslat naspat potvrdenie ze sa to ulozilo 
    try {
      await newUsr(req.body.email, req.body.country)
      res.send(`success`);
    }
    catch (err) {
      res.send(err)
    }

  });

  // vytvorit druhy .get() na unsubscribe, ktory deletne z DB toho usera a posle ze uz nebudes dostavat sracky do spamu
  app.post("/api/unsubscribe", async (req, res) => {
    try {
      await delUsr(req.body.email);
      res.send(`success`)
    }
    catch (err) {
      res.send(err)
    }


  })


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

  async function newUsr(email: string, country: string) {
    return prisma.user.create({
      data: {
        email: email,
        country: country
      }
    })
  }


  async function updateUsr(email: string, country: string) {
    await prisma.user.update({
      data: {
        country: country
      },
      where: {
        email: email
      }
    })
  }


  async function delUsr(email: string) {
    return prisma.user.delete({
      where: {
        email: email
      }
    })
  }

  async function getUsr(email: string) {
    await prisma.user.findMany({
      where: {
        email: email
      }
    })
  }
};


main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  })

