import express from "express";
// import cors from "./cors/cors";
import cors from "cors";
import connectToDatabase from "./dataAccessLayer/mongoDb";
import router from "./router/router";
import morgan from "./logger/morgan";

const app = express();
app.use(morgan);
app.use(cors());
app.use(express.json());

//חדש ראוטר
app.use(router);

//איתחול השרת
app.listen(3000, () => {
  console.log("server up!");
  connectToDatabase();
});

//קריאה לפונקציה שמחברת את השרת לדאטהבייס
