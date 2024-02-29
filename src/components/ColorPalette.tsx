'use client';
import { PaintBucket, Plus } from 'lucide-react';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { FormEvent, useState } from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';

export default function ColorPalette() {
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [color, setColor] = useColor('#561ecb');

    const addColor = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add new color
        console.log('🚀 ~ ColorPalette ~ selectedColor:', color);
    };

    return (
        <Dialog open={isPaletteOpen}>
            <DialogTrigger asChild>
                <Button
                    className='p-2 w-full'
                    onClick={() => setIsPaletteOpen(true)}
                >
                    <Plus size={20} />
                    <PaintBucket size={20} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new color.</DialogTitle>
                </DialogHeader>
                <form onSubmit={addColor}>
                    <div className='my-6'>
                        <ColorPicker
                            color={color}
                            onChange={setColor}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            className='p-2 w-full'
                            type='submit'
                        >
                            <Plus size={20} />
                        </Button>
                        <Button
                            className='p-2 w-full'
                            type='button'
                            onClick={() => setIsPaletteOpen(false)}
                        >
                            close
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
