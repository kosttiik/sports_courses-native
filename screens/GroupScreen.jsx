import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setGroup, resetGroup } from '../store/groupSlice';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native';

export default function GroupScreen({ route }) {
    const {name} = route.params

    const dispatch = useDispatch();

    const {group} = useSelector((store) => store.group)

    useEffect(() => {
        async function getOneGroup() {
            await axiosInstance.get(`/group/${name?.toString()}`).then((response) => dispatch(setGroup(response?.data)));
        }

        getOneGroup()

        return () => {
            dispatch(resetGroup())
        }
    }, [dispatch])
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source= {{ uri: (group.ImageName ? `http://192.168.1.93:9000/groupimages/${group.ImageName}` : "http://192.168.1.93:9000/groupimages/basketball.png")}}
                resizeMode = 'contain'
            />
            <Text style = {styles.titleText}>{group.Title}</Text>
            <Text>Курс: { group?.Course }</Text>
            <Text>Расписание: { group?.Schedule }</Text>
            <Text>{ group?.Description }</Text>
            <Text>Статус: { group?.Status }</Text>
            <Text>Место: { group?.Location }</Text>
            <Text>Количество мест: { group?.Capacity } чел.</Text>
            <Text>Зарегистрировано: { group?.Enrolled } чел.</Text>
            <Text>Преподаватель: { group?.CoachName }</Text>
            <Text>E-Mail: { group?.CoachEmail }</Text>
            <Text>Телефон: { group?.CoachPhone }</Text>
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
