'use client';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { FaPalette } from 'react-icons/fa';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ColorSelectProps } from '@/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';

export default function ColorSelect({
    selectedColor,
    setSelectedColor,
}: ColorSelectProps) {
    const colors = [
        { id: '1', hex: '#FBCE60' },
        { id: '2', hex: '#090909' },
        { id: '3', hex: '#EF5350' },
        { id: '4', hex: '#1F1F53' },
    ];
    return (
        <Select
            onValueChange={setSelectedColor}
            value={selectedColor}
        >
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Color' />
            </SelectTrigger>
            <SelectContent>
                {colors.length > 0 ? (
                    colors.map((color) => (
                        <SelectItem
                            value={color.id}
                            key={color.id}
                        >
                            <div
                                className={cn(
                                    'inline-flex h-5 w-[120px] items-center justify-center rounded-md   '
                                )}
                                style={{ backgroundColor: color.hex }}
                            ></div>
                        </SelectItem>
                    ))
                ) : (
                    <SelectItem value='null'>its gray in here</SelectItem>
                )}
            </SelectContent>
        </Select>
    );
}
