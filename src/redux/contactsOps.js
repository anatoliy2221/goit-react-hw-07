import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6624dc3304457d4aaf9d258b.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/contacts');
        return responce.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);

export const addContact = createAsyncThunk("contacts/addContact", async ( newContact, thunkAPI) => {
    try {
        const responce = await axios.post('/contacts',  newContact );
        return responce.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactID, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactID}`);
        return responce.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
    
