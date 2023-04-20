import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "@/interfaces";


export interface IEntry extends Entry {
    //Objento las mismas propiedades del INTERFACE "Entry" 
    // En mi nueva interface, pero si quiero seguir agregando mas propiedades 
    // a este INTERFACE, simplemente la agrego. 

}

const entrySchema = new Schema({
    description: { type: String, required: true },
    createdAt: { type: Number, required: true },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: ' {VALUE} NO ES UN ESTADO PERMITIDO'
        }
    }
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);



export default EntryModel;