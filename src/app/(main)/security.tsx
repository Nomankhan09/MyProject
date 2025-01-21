import React from 'react';
import { View, Text, TouchableOpacity, SectionList, StyleSheet, Alert } from 'react-native';

// Define data for the SectionList
const data = [
    {
        title: 'Send Message',
        data: [
            { id: '1', name: 'Admin', action: () => Alert.alert('Send Message to Admin') },
            { id: '2', name: 'Security', action: () => Alert.alert('Send Message to Security') },
        ],
    },
    {
        title: 'Security Alert',
        data: [
            { id: '3', name: 'Fire Alert', action: () => Alert.alert('Fire Alert Triggered') },
            { id: '4', name: 'Stuck in Lift', action: () => Alert.alert('Stuck in Lift Alert') },
            { id: '5', name: 'Animal Threat', action: () => Alert.alert('Animal Threat Alert') },
            { id: '6', name: 'Visitor Threat', action: () => Alert.alert('Visitor Threat Alert') },
        ],
    },
];

const SectionedList = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.box} onPress={item.action}>
                        <Text style={styles.boxText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    box: {
        backgroundColor: '#005bb5',
        padding: 20,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    boxText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default SectionedList;
