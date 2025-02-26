import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface Bike {
    id: string;
    name: string;
    type: string;
    price: number;
    discount: number;
    priceWithDiscount: number;
    description: string;
    category: string[];
}

interface BikeState {
    bikes: Bike[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BikeState = {
    bikes: [],
    status: 'idle',
    error: null,
};

export const fetchBikes = createAsyncThunk(
    'bikes/fetchBikes',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get('http://localhost:5000/bikes');
            return response.data;
        } catch (error) {
            const err = error as AxiosError; // Нашел решение
            return rejectWithValue(
                err.response?.data || 'Ошибка при получении данных',
            );
        }
    },
);

const bikeSlice = createSlice({
    name: 'bikes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBikes.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchBikes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.bikes = action.payload.map((bike: Bike) => ({
                    ...bike,
                    category: Array.isArray(bike.category) ? bike.category : [], // изменение
                    priceWithDiscount:
                        bike.price - (bike.price / 100) * bike.discount,
                }));
            })
            .addCase(fetchBikes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default bikeSlice.reducer;
