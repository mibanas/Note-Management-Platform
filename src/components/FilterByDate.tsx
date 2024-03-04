'use client';

import { CalendarIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { Separator } from './ui/separator';
import { useDispatch } from 'react-redux';
import { filterNotesByDate } from '@/app/Redux/slices/notesSlice';

export function FilterByDate({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 2),
    });
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    function filterNotes() {
        dispatch(
            filterNotesByDate({
                from: date?.from?.getTime(),
                to: date?.to?.getTime(),
            })
        );
        setIsOpen(false);
    }
    function resetFiltering() {
        // reset notes state
        dispatch(
            filterNotesByDate({
                from: undefined,
                to: undefined,
            })
        );
        setDate({ from: undefined, to: undefined });
        setIsOpen(false);
    }
    return (
        <div className={cn('grid gap-2', className)}>
            <Popover open={isOpen}>
                <PopoverTrigger
                    asChild
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Button
                        id='date'
                        variant={'outline'}
                        className={cn(
                            'w-[300px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                        )}
                    >
                        <CalendarIcon className='mr-2 h-4 w-4' />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, 'LLL dd, y')} -{' '}
                                    {format(date.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(date.from, 'LLL dd, y')
                            )
                        ) : (
                            <div>
                                <span className='mr-2'>Filter by Date</span>
                                <ChevronDownIcon />
                            </div>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className='w-auto p-0'
                    align='start'
                >
                    <Calendar
                        initialFocus
                        mode='range'
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                    <Separator />
                    <div className='w-full  flex items-center p-2 gap-x-4'>
                        <Button
                            variant={'default'}
                            onClick={filterNotes}
                        >
                            Confirm
                        </Button>

                        <Button
                            variant={'default'}
                            onClick={resetFiltering}
                        >
                            Reset
                        </Button>

                        <Button
                            variant={'default'}
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
