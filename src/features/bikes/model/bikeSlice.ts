import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Bike, BikeState } from './types';

const initialState: BikeState = {
    bikes: [],
    status: 'idle',
    error: null,
};

const normalizeBike = (bike: Bike): Bike => ({
    ...bike,
    category: Array.isArray(bike.category) ? bike.category : [],
    specifications: {
        ...bike.specifications,
        frameSize: Array.isArray(bike.specifications?.frameSize)
            ? bike.specifications.frameSize
            : [],
    },
    priceWithDiscount: bike.price - (bike.price / 100) * bike.discount,
});

export const fetchBikes = createAsyncThunk(
    'bikes/fetchBikes',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('http://localhost:5000/bikes');
            return data.map(normalizeBike);
        } catch (error) {
            return rejectWithValue(
                error instanceof Error
                    ? error.message
                    : 'Ошибка при получении данных',
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
                state.bikes = action.payload;
            })
            .addCase(fetchBikes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string | null;
            });
    },
});

export default bikeSlice.reducer;
