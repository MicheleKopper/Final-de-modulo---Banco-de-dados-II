import { NextFunction, Request, Response } from "express";

export class FindAllMidlleware {
  static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { idUsuario, idTweet } = req.query;

    if (idUsuario && typeof idUsuario !== "string") {
      res.status(400).json({
        ok: false,
        message: "Id do usuário deve ser uma string",
      });
    }

    if (idTweet && typeof idTweet !== "string") {
      res.status(400).json({
        ok: false,
        message: "Id do tweet deve ser uma string",
      });
    }
    next();
  }
}
