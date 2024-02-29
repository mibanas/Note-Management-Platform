'use client';
import { X } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './ui/alert-dialog';
import { useState } from 'react';

export default function Alert({ noteID }: { noteID: string }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    //delete note
    function deleteNote() {
        setTimeout(() => {
            setIsDialogOpen(false);
        }, 800);
    }
    return (
        <AlertDialog open={isDialogOpen}>
            <AlertDialogTrigger
                asChild
                onClick={() => setIsDialogOpen(true)}
            >
                <X
                    size={25}
                    className='rounded-full p-1 absolute top-1 right-1 cursor-pointer  transition-all duration-500 hover:rotate-45'
                />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the note.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={deleteNote}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
