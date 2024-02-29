'use client';
import { type Note } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';
import { FilePenLine } from 'lucide-react';
import { contrastRatio } from '@/utils/lib/contrastRatio';
import Alert from './Alert';
import Link from 'next/link';
export default function NoteCard({
    _id,
    content,
    createdAt,
    color,
    isArchived,
}: Note) {
    // open edit modal
    function openEditModal() {}

    return (
        <div>
            <Card
                style={{
                    backgroundColor: color.hex,
                    color: contrastRatio(color.hex),
                }}
                className='p-2 pb-6 relative'
            >
                <CardFooter className='flex items-center justify-between p-4 pt-6 pb-0'>
                    <p>{createdAt}</p>

                    <Link href={`/note/${_id}`}>
                        <FilePenLine
                            size={20}
                            color={contrastRatio(color.hex)}
                            className='cursor-pointer transition-all duration-500 hover:rotate-6 hover:scale-125'
                        />
                    </Link>
                </CardFooter>
                <CardContent className='h-56 px-1 py-4 overflow-hidden flex'>
                    <p className='p-2'>{content}</p>
                </CardContent>

                <Alert noteID='dsdqsd' />
            </Card>
        </div>
    );
}
