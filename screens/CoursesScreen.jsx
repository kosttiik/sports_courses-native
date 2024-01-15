import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native'
import { setCourses } from '../store/courseSlice';
import CourseCard from '../components/CourseCard';

export default function CoursesScreen({ navigation }) {
    const dispatch = useDispatch()
    const {courses} = useSelector((store) => store.course)

    const handleTextChange = async (newText) => {
        await axiosInstance.get('/courses?title_pattern=' + newText).then((response) => dispatch(setCourses(response?.data)))
    }

    useEffect(() => {
        async function getAllCourses() {
            await axiosInstance.get('/courses').then((response) => dispatch(setCourses(response?.data)))
        }
        getAllCourses()
    }, [dispatch])
    return (
        <ScrollView>
            <TextInput style={styles.input} onChangeText={newText => handleTextChange(newText)}></TextInput>
            <View style={styles.page}>
                {!!courses &&
                    courses.map((course) => <CourseCard key={course.ID} {...course} navigation={navigation}></CourseCard>)
                    }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
