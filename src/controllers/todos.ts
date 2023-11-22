import { Request, Response, NextFunction } from "express";

import { Todo } from "../models/todos";

const TODOS: Todo[] = [];

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Todo Created.", createdTodo: newTodo });
};
