import {
    type Ref,
    prop,
    getModelForClass,
    modelOptions,
} from '@typegoose/typegoose';
import { ColorClass } from './Color';
import mongoose from 'mongoose';

// schema options
@modelOptions({
    schemaOptions: {
        timestamps: true,
        collection: 'notes',
    },
})

//schema declaration
class NoteClass {
    @prop({ required: true })
    public content: string;

    @prop({ ref: () => ColorClass })
    public color?: Ref<ColorClass>;
}

// model
const Note = mongoose.models.NoteClass || getModelForClass(NoteClass);
export { Note, NoteClass };
