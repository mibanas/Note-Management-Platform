import {
    type Ref,
    prop,
    getModelForClass,
    modelOptions,
} from '@typegoose/typegoose';
import { ColorClass } from './Color';

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
const Note = getModelForClass(NoteClass);
export { Note, NoteClass };
