import {
    type Ref,
    prop,
    getModelForClass,
    modelOptions,
    DocumentType,
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
    public color?: Ref<ColorClass> | DocumentType<typeof ColorClass>;

    @prop()
    public isArchived: boolean;
}

// model
const Note = mongoose.models.NoteClass || getModelForClass(NoteClass);
export { Note, NoteClass };
