'use client';
import { ChevronDownIcon, CircleIcon } from '@radix-ui/react-icons';

import { useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { FaPalette } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export default function FilterByColor() {
    const [selectedColor, setSelectedColor] = useState<string | undefined>(
        undefined
    );
    // fetch colors
    const colors = [
        { id: '1', hex: '#FBCE60' },
        { id: '2', hex: '#090909' },
        { id: '3', hex: '#EF5350' },
        { id: '4', hex: '#1F1F53' },
    ];
    useEffect(() => {
        // filter notes based on selected color
        // take care of case undefined
        console.log('🚀 ~ FilterByColor ~ selectedColor:', selectedColor);
    }, [selectedColor]);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                    <span className='mr-2 flex items-center justify-center gap-x-2  '>
                        <FaPalette /> Filter by Color
                    </span>
                    <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup
                    value={selectedColor}
                    onValueChange={setSelectedColor}
                >
                    {colors.length > 0 ? (
                        colors.map((color) => (
                            <DropdownMenuRadioItem
                                value={color.hex}
                                key={color.id}
                            >
                                <div
                                    className={cn(
                                        'inline-flex h-5 w-5 items-center justify-center rounded-full a text-xs text-gray-600 bg-gray-700'
                                    )}
                                    style={{ backgroundColor: color.hex }}
                                ></div>
                            </DropdownMenuRadioItem>
                        ))
                    ) : (
                        <DropdownMenuItem>its gray in here</DropdownMenuItem>
                    )}
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button
                        className='w-full'
                        onClick={() => setSelectedColor(undefined)}
                    >
                        Reset
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
