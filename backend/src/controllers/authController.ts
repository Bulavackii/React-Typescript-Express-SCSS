import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.send('Login endpoint');
};

export const register = (req: Request, res: Response) => {
  res.send('Register endpoint');
};
