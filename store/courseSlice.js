import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    course: {},
};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourses: (state, { payload }) => {
            state.courses = payload;
        },
        setCourse: (state, { payload }) => {
            state.course = payload;
        },
        resetCourse: (state) => {
            state.course = {};
        },
    },
});

export const courseReducer = courseSlice.reducer;

export const { setCourses, setCourse, resetCourse } = courseSlice.actions;
