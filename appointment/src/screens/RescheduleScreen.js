import React from "react";
import { View, Text, StyleSheet, Button, Alert,TextInput } from "react-native";
import Api from "../api/Api";

const RescheduleScreen = ({ route,navigation }) => {
    const [appointments, setAppointments] = React.useState([]);
    const [id, setId] = React.useState([]);

    const [name, setName] = React.useState("");
    const { id: id1 } = route.params;

    const reschedule = () => {
        Api.put(`/appoints/${id1}`, { name })
            .then(res => {
                console.log(res);
                setName("");
                navigation.navigate("MyAppoints",appointments);

            }
            )


        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Reschedule Appointment</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button title="Reschedule" onPress={reschedule} />

        </View>
        
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
})

export default RescheduleScreen;