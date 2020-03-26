const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const ong = await connection('ongs').select('*').where('id', id).first();

        let ret;
        if (!ong) {
            ret = response.status(404).json({ error: "Ong not found" });
        } else {
            ret = response.json(ong);
        }
        return ret;


        return response.json(ongs);
    }
}