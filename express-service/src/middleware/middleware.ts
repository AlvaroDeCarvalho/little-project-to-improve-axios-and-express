import { Request, Response, NextFunction } from 'express';
import { getConnection } from '../database';
import { Connection } from 'mysql2';

export interface NewRequest extends Request {
    connect?: Connection | Error;
}

export async function middleware(req: NewRequest, res: Response, next: NextFunction) {
    try {
        req.connect = await getConnection();
        if (req.connect instanceof Error) {
            return res.status(500).json({
                error: 'deu pau no server',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            error: 'deu pau no server',
        });
    }
}
