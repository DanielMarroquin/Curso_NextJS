import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database';
import { Entry, IEntry } from '@/models';

type Data = 
| { message: string }
| IEntry;


export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    if ( !mongoose.isValidObjectId(id) ) {
        return res.status(400).json({ message: 'El ID no es valido: ' + id });
    }

    switch ( req.method ) {
        case 'PUT':
            return updateEntry( req, res);

        default: 
            return res.status(400).json({ message: 'Metodo no existe' });

    }

}

const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;
    await db.connect();

    const entryToUpdate = await Entry.findById( id );

    if ( !entryToUpdate ) {
        await db.disconnect();
        return res.status(400).json({ message: 'No existe entrada con ese ID: ' + id });
    }

    const { 
        description = entryToUpdate.description,
        status = entryToUpdate.status
        
    } = req.body;

    const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true });

    res.status(200).json( updatedEntry! );
}