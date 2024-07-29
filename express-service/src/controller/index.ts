import { Response } from 'express';
import { NewRequest } from '../middleware/middleware';
import { Connection } from 'mysql2';


class ControllerQuery {
   
    public home = async (req: NewRequest, res: Response) => {
        try {
            if (!req.connect) {
                return res.status(500).json({ error: 'No database connection' });
            }
            (req.connect as Connection).query('SELECT * FROM cliente', (err: any, results: any) => {
                if (err) {
                    return res.status(400).json();
                }
                return res.json(results);
            });
        } catch (err: any) {
            return res.status(400).json({
                error: err.message,
            });
        }
    };

    public createUser = async (req: NewRequest, res: Response) => {
        const { nome, email, senha } = req.body;

        try {
           
            if (!req.connect) {
                return res.status(500).json({ error: 'No database connection' });
            }
            (req.connect as Connection).query('INSERT INTO cliente (nome, email, senha) VALUES (?,?,?)', [email, nome, senha], (err: any, results: any) => {
                if (err) {
                    return res.status(400).json();
                }
                return res.json({ message: 'User created', results });
            });
        } catch (error) {
            return res.status(400).json({
                error: "deu pau no server",
            });
        }
    };

    public deleteUser = (req: NewRequest, res: Response) => {
        const id = req.params.id;

        if (!req.connect) {
            return res.status(500).json({ error: 'No database connection' });
        }
        if(!id){ return res.status(400).json({ error: 'No id provided' }); }
        else {
            (req.connect as Connection).query('DELETE FROM cliente WHERE id = ?', [id], (err: any, results: any) => {
                if (err) {
                    return res.status(400).json();
                }
                return res.json(results);
            });
        }
    };
}

export default ControllerQuery;
