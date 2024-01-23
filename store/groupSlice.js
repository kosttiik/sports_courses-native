import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    groups: [],
    group: {},
};

export const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        setGroups: (state, { payload }) => {
            state.groups = payload;
        },
        setGroup: (state, { payload }) => {
            state.group = payload;
        },
        resetGroup: (state) => {
            state.group = {};
        },
    },
});

export const groupReducer = groupSlice.reducer;

export const { setGroups, setGroup, resetGroup } = groupSlice.actions;
