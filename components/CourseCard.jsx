import {View, Text, Button, Image} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

export default function CourseCard({ navigation, ...props}) {
    const handlePress = () => {
        navigation.navigate('Курс', {name: props.Title})
    }

    const [imageLink, setImageLink] = useState("http://192.168.1.93:9000/courseimages/basketball.png")

    useEffect(() => {
        if (props.ImageName) {
            setImageLink("http://192.168.1.93:9000/courseimages/" + props.ImageName)
        }
    })

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source= {{ uri: imageLink}}
                resizeMode = 'contain'
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.Title}</Text>
            </View>
            <Button title='Подробнее' onPress={handlePress}></Button>
            <Text>{props.Title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#000000', fontSize: 16, textAlign: 'center' },
    text: { color: '#f0f0f0', fontSize: 16 },
});
