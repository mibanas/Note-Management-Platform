'use client';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteInputSchemaType, noteInputSchema } from '@/schemas/note.schema';
import { Textarea } from './ui/textarea';
import ColorPalette from './ColorPalette';
import { Note } from '@/types';

export default function EditForm({ _id, content, createdAt, color }: Note) {
    const formHandler = useForm<NoteInputSchemaType>({
        resolver: zodResolver(noteInputSchema),
        defaultValues: {
            content,
            color: color._id.toString(),
        },
    });

    const createNote = (values: NoteInputSchemaType) => {
        console.log('🚀 ~ createNote ~ values:', values);
        // update note
    };
    return (
        <Form {...formHandler}>
            <form
                onSubmit={formHandler.handleSubmit(createNote)}
                className='space-y-8 w-[50vw] shadow-xl p-8 rounded-md border-2'
            >
                <h1 className='text-xl'>Edit note</h1>

                <FormField
                    control={formHandler.control}
                    name='content'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder='write your note content here...'
                                    {...field}
                                    rows={40}
                                    className='max-h-40'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formHandler.control}
                    name='color'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <ColorPalette
                                    selectedColor={field.value}
                                    setSelectedColor={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>update</Button>
            </form>
        </Form>
    );
}
