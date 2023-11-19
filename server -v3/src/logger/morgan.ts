import morgan from "morgan";
import { morganTime } from "../utils/timeService";

const morganLogger = morgan((tokens, req, res) => {
  const status = tokens.status(req, res);
  const morganString = [
    morganTime(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "-",
    tokens["response-time"](req, res),
    "MS",
  ].join(" ");

  if (+status! >= 400) return morganString;
  return morganString;
});

export default morganLogger;
