import { Note } from '@/models/Note';
import connectDb from '@/utils/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: any) {
    // connect to mongodb on page load
    // I have no idea where I should put this
    await connectDb();
    const notes = await Note.find().exec();
    return NextResponse.json({ notes: notes });
}

export async function POST(req: NextRequest) {
    //parse body payload
    const body = await req.json();
    return NextResponse.json({ data: body });
}
