import mysql from 'mysql2';

export const getConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'Clientes'
        })
        return connection
    } catch (error) {
        return new Error('erro de conexão')
    }   

}