import { getModelForClass, prop } from '@typegoose/typegoose';

class ColorClass {
    @prop({ required: true })
    public hex: string;
}

const Color = getModelForClass(ColorClass);

export { Color, ColorClass };
