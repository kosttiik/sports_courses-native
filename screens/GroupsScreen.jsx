import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native'
import { setGroups } from '../store/groupSlice';
import GroupCard from '../components/GroupCard';

export default function GroupsScreen({ navigation }) {
    const dispatch = useDispatch()
    const {groups} = useSelector((store) => store.group)

    const handleTextChange = async (newText) => {
        await axiosInstance.get('/groups?title_pattern=' + newText).then((response) => dispatch(setGroups(response?.data)))
    }

    useEffect(() => {
        async function getAllGroups() {
            await axiosInstance.get('/groups').then((response) => dispatch(setGroups(response?.data)))
        }
        getAllGroups()
    }, [dispatch])
    return (
        <ScrollView>
            <TextInput style={styles.input} onChangeText={newText => handleTextChange(newText)}></TextInput>
            <View style={styles.page}>
                {!!groups &&
                    groups.map((group) => <GroupCard key={group.ID} {...group} navigation={navigation}></GroupCard>)
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
