import express from "express";
import courseRouter from "./routes/course.route";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/courses", courseRouter);

app.listen(port, () => {
  console.log(`Course microservice is listening on port ${port}`);
});
