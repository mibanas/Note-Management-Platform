import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Note {
    _id: string;
    content: string;
    isArchived: boolean;
    color : string
}

interface NotesState {
    status : boolean,
    notes: Note[];
}

const initialState: NotesState = {
    status : false,
    notes: [],
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (page: number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/notes/all`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ page })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch notes');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("🚀 ~ fetchUsers ~ error:", error);
        throw error;
    }
})


const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = false
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("🚀 ~ builder.addCase ~ action:", action.payload)
            state.status = true,
            // state.notes = state.notes.concat(action.payload);
            state.notes = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = false
        });
    }
});


export default notesSlice.reducer;