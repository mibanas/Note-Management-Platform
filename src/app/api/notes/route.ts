import { Note } from '@/models/Note';
import connectDb from '@/utils/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

// Get all notes
export async function GET(req: NextRequest, { params }: any) {
    await connectDb();
    try {
        const notes = await Note.find().exec();
        return NextResponse.json({ notes: notes });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

// Create new note
export async function POST(req: NextRequest) {
    await connectDb();

    try {
        //parse body payload
        const body = await req.json();
        const newNote = await Note.create(body);
        return NextResponse.json({ createdNote: newNote }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
