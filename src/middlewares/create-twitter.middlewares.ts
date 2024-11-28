import { NextFunction, Request, Response } from "express";
import { TweetType } from "@prisma/client";

export class CreateTwitterMiddleware {
  public static validateRequired(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { conteudo, type, idUsuario, idTweetPai } = req.body;

    // VALIDAÇÃO DE DADOS
    if (!conteudo) {
      res.status(400).json({
        ok: false,
        message: "Preencha o conteúdo!",
      });
      return;
    }

    if (!TweetType) {
      res.status(400).json({
        ok: false,
        message: "Preencha o tweet!",
      });
      return;
    }

    if (!idUsuario) {
      res.status(400).json({
        ok: false,
        message: "Preencha o ID do usuário!",
      });
      return;
    }
    next();
  }

  public static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { conteudo, type, idUsuario, idTweetPai } = req.body;

    // VALIDAÇÃO TIPO DE DADO
    if (typeof conteudo !== "string") {
      res.status(400).json({
        ok: false,
        message: "Conteúdo inválido!",
      });
    }

    if (type === "R" && !idTweetPai) {
      res.status(400).json({
        ok: false,
        message: "Reply deve referenciar ao Tweet original!",
      });
    }

    if (type !== "T" && type !== "R") {
      res.status(400).json({
        ok: false,
        message: "Tweet precisa ser do tipo 'T' ou 'R'!",
      });
    }
    next();
  }
}