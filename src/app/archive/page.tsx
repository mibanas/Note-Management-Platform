import InfiniteScrollDemo from '@/components/InfinitScrollDemo';
import Logo from '@/components/Logo';
import NoteCard from '@/components/NoteCard';
import { Note } from '@/types';
import { LoremIpsum } from 'lorem-ipsum';
import { Metadata } from 'next';
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

export const metadata: Metadata = {
    title: 'Archive | Notes Management Platform',
};

export default async function ArchivePage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const notes = [
        {
            _id: '1',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '1', hex: '#FBCE60' },
            isArchived: false,
        },
        {
            _id: '2',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '2', hex: '#090909' },
            isArchived: false,
        },
        {
            _id: '3',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '3', hex: '#EF5350' },
            isArchived: false,
        },
        {
            _id: '4',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#1F1F53' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
        {
            _id: '5',
            content: lorem.generateParagraphs(2),
            createdAt: new Date().toLocaleDateString(),
            color: { _id: '4', hex: '#F2F3F4' },
            isArchived: false,
        },
    ];

    const archivedNotes = notes.filter((note: Note) => note.isArchived);
    return (
        <main className='overflow-auto'>
            {archivedNotes.length > 0 ? (
                <div className='grid grid-cols-4 gap-4 p-8 overflow-auto'>
                    {archivedNotes.map((note: Note) => (
                        <NoteCard
                            {...note}
                            key={note._id}
                        />
                    ))}
                </div>
            ) : (
                <div className='flex items-start justify-center h-screen bg-neutral-100'>
                    <p className='mt-8 text-2xl font-bold'>
                        Go delete some notes and come back.
                    </p>
                </div>
            )}
            <InfiniteScrollDemo />
        </main>
    );
}
