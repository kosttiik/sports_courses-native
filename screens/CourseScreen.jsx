import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setCourse, resetCourse } from '../store/courseSlice';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native';

export default function CourseScreen({ route }) {
    const {name} = route.params

    const dispatch = useDispatch();

    const {course} = useSelector((store) => store.course)

    const [imageLink, setImageLink] = useState("http://192.168.1.93:9000/courseimages/basketball.png")

    useEffect(() => {
        async function getOneCourse() {
            await axiosInstance.get(`/course/${name?.toString()}`).then((response) => dispatch(setCourse(response?.data)));
        }

        getOneCourse()

        return () => {
            dispatch(resetCourse())
        }
    }, [dispatch])
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source= {{ uri: (course.ImageName ? `http://192.168.1.93:9000/courseimages/${course.ImageName}` : "http://192.168.1.93:9000/courseimages/basketball.png")}}
                resizeMode = 'contain'
            />
            <Text style = {styles.titleText}>{course.Title}</Text>
            <Text>{ course?.Description }</Text>
            <Text>Статус курса: { course?.Status }</Text>
            <Text>Место: { course?.Location }</Text>
            <Text>Количество мест: { course?.Capacity } чел.</Text>
            <Text>Зарегистрировано: { course?.Enrolled } чел.</Text>
            <Text>Курс проводит: { course?.CoachName }</Text>
            <Text>E-Mail: { course?.CoachEmail }</Text>
            <Text>Телефон: { course?.CoachPhone }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: { height: 320, alignSelf: 'stretch' },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center'
    }
});
