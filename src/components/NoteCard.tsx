'use client';
import { type Note } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';
import { FilePenLine } from 'lucide-react';
import { contrastRatio } from '@/utils/lib/contrastRatio';
import Alert from './Alert';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
export default function NoteCard({
    _id,
    content,
    createdAt,
    color,
    isArchived,
}: Note) {
    return (
        <div>
            <Card
                style={{
                    backgroundColor: !isArchived ? color.hex : '#f2f3f4',
                    color: contrastRatio(color.hex),
                }}
                className={cn('p-2 pb-6 relative', isArchived && ' border-2')}
            >
                <CardFooter
                    className={cn(
                        'flex items-center justify-between p-4 pt-6 pb-0 ',
                        isArchived && ' opacity-60'
                    )}
                >
                    <p>{createdAt}</p>

                    {!isArchived && (
                        <Link href={`/note/${_id}`}>
                            <FilePenLine
                                size={20}
                                color={contrastRatio(color.hex)}
                                className='cursor-pointer transition-all duration-500 hover:rotate-6 hover:scale-125'
                            />
                        </Link>
                    )}
                </CardFooter>

                <CardContent
                    className={cn(
                        'h-56 px-1 py-4 overflow-hidden flex',
                        isArchived && ' opacity-60'
                    )}
                >
                    <p className='p-2'>{content}</p>
                </CardContent>

                {!isArchived && <Alert noteID={_id} />}
                {isArchived && (
                    //TODO
                    <Button className='mt-4 w-full '>Restore</Button>
                )}
            </Card>
        </div>
    );
}
