import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({
    schemaOptions: {
        timestamps: true,
    },
})
class ColorClass {
    @prop({ required: true })
    public hex: string;
}

const Color = mongoose.models.ColorClass || getModelForClass(ColorClass);

export { Color, ColorClass };
