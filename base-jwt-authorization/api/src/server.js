import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "~/config/corsOptions";
import { APIs_V1 } from "~/routes/v1/";

const START_SERVER = () => {
  const app = express();

  app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });

  // Use Cookie
  app.use(cookieParser());

  // Allow CORS
  app.use(cors(corsOptions));

  // Enable req.body json data
  app.use(express.json());

  // Use Route APIs V1
  app.use("/v1", APIs_V1);

  app.listen(
    process.env.LOCAL_DEV_APP_PORT,
    process.env.LOCAL_DEV_APP_HOST,
    () => {
      console.log(
        `Hi ${process.env.AUTHOR}, Server running at http://${process.env.LOCAL_DEV_APP_HOST}:${process.env.LOCAL_DEV_APP_PORT}`
      );
    }
  );
};

(async () => {
  try {
    // Start Back-end Server
    console.log("Starting Server...");
    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();
