import { Response, Request, NextFunction } from "express";

export const handleError = (
  res: Response,
  error: Error,
  status: number = 400
): void => {
  console.error(error.message);
  res.status(status).send(error.message);
};

export const handleJsonfileError = <T extends Error>(
  error: T
): Promise<never> => {
  if (error instanceof Error) {
    console.error(error);
    return Promise.reject(error);
  }
  console.error("Non-error object:", error);
  return Promise.reject(new Error("Something went wrong!"));
};

export const handleServerError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(error.message);
  res.status(500).send(error.message);
};
