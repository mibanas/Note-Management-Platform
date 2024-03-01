"use client"

import NoteCard from '@/components/NoteCard';
import { Note } from '@/types';
import { LoremIpsum } from 'lorem-ipsum';
import { Metadata } from 'next';
import { Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "@/app/Redux/slices/notesSlice";

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


export default function Home() {

  const dispatch = useDispatch();
  const mesNotes = useSelector((state: any) => state.notes);
  const [scroll, SetScroll] = useState(1)
  
  console.log("🚀 ~ Home ~ mesNotes:", mesNotes.notes)
  
  useEffect(() => {
      dispatch(fetchUsers(scroll));      
  }, [])

  const handleLoadMore =  () => {
    const nextPage = scroll + 1; // Incrémentez la page
    dispatch(fetchUsers(nextPage));
    SetScroll(nextPage); 
};
  
    //fetch notes
    const notess = [
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

    return (
        <main className='overflow-auto'>
            <div className='grid grid-cols-4 gap-4 p-8 overflow-auto'>
                {mesNotes.notes.notes?.length > 0 ? (
                    mesNotes.notes.notes?.map((note: Note, index: number) => (
                      <div key={note._id}>
                        <NoteCard {...note} />
                        {index === mesNotes.notes.notes.length - 1 && (
                            <button
                                onClick={() => handleLoadMore()}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
                            >
                                Load More
                            </button>
                        )}
                    </div>
                    ))
                ) : (
                    <div className='flex items-start justify-center h-screen bg-neutral-100'>
                        <p className='mt-8 text-2xl font-bold'>
                            Start adding notes!
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
