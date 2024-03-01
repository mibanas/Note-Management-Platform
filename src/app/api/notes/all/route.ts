import { Note } from '@/models/Note';
import connectDb from '@/utils/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: any) {
    await connectDb()
    try {
        // const body = await req.json()
        // const { page } = body
        // const limit = 2
        // const skip = (page - 1) * limit

        // const notes = await Note.find().skip(skip).limit(limit).populate("color").exec()
        const notes = await Note.find().populate("color").exec()

        return NextResponse.json({ notes })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}