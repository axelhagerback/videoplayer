import Express from "express";
import videoRoute from "./routes/video.route.js";

const app = Express();

app.use("/", videoRoute);

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
