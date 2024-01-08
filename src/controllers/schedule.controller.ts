import { collections } from '../database';

export const findAllCodeSection = async (req, res) => {
    try {
        const searchCodigos = req.body;

        const schedules = await Promise.all(searchCodigos.map(async filter => {
            const [codigo, seccion] = filter.split(' ');
            const schedule = await collections.schedules.findOne({
                codigo: codigo,
                [`secciones.${seccion}`]: { $exists: true }
            }, {
                projection: { _id: 0, ciclo: 1, codigo: 1, nombre: 1, [`secciones.${seccion}`]: 1 }
            });

            return schedule;
        }));

        res.status(200).send(schedules);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const findAll = async (req, res) => {
    const schedule = await collections.schedules.find({}).toArray();
    res.status(200).send(schedule)
}

export const findOneCycle = async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = {ciclo: id};
        const cycle = await collections.schedules.find(query).toArray();

        if(cycle) {
            res.status(200).send(cycle);
        }else{
            res.status(404).send(`Failed to find an cycle: ID ${ id }`);
        }
    } catch(error) {
        res.status(404).send(`Failed to find an cycle: ID ${ req?.params.id }`)
    }
}

export const findOneCode = async (req, res) => {
    try {
        const code = req?.params?.code;
        const query = {codigo: code};
        const course = await collections.schedules.find(query).toArray();

        if(course) {
            res.status(200).send(course);
        }else{
            res.status(404).send(`Failed to find an ccode: CODE ${ code }`);
        }
    } catch(error) {
        res.status(404).send(`Failed to find an code: CODE ${ req?.params.code }`)
    } 
}