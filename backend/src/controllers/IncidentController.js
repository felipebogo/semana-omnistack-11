const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const [count] = await connection('incidents').count();
        const { page = 1, limit = 5 } = request.query;
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id','=','incidents.ong_id')
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
            .limit(limit)
            .offset((page - 1) * limit);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, description, value, ong_id
        });

        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
            .select('ong_id')
            .where('id', id)
            .first();

        let ret;
        if (ong_id !== incident.ong_id) {
            ret = response.status(401).json({ error: 'Operation not permited' });
        } else {
            await connection('incidents').where('id', id).delete();
            ret = response.status(204).send();
        }
        return ret;
    }
}