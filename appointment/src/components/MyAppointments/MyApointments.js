import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {styles} from './styles';
import Message from '../Common/Message/Message';


const MyAppointments = ({
    appointments,
    deleteAppointment,
    navigation,
    route,
    message,
    colors,
    
}) => {
    const renderAppointments = () => {
        if (loading1) {
          return <ActivityIndicator size="large" color="#0000ff" />;
        }
    
        if (appointments.length === 0) {
          return (
            <>
              <Message message="No Appointments" primary />
              <Pressable
                style={styles.addButton}
                onPress={() => navigation.navigate('Patients')}>
                <Text style={styles.addText}>Create Appointment</Text>
              </Pressable>
            </>
          );
        }
        return appointments.map(appointment => (
          <View key={appointment.id} style={styles.appointment}>
            <Text style={styles.appointmentText}>
              {appointment.date} - {appointment.time}
            </Text>
            <Text>{appointment.name}</Text>
            <View style={styles.pressableView}>
              <Pressable
                onPress={() =>
                  rescheduleAppointment(
                    appointment._id,
                    appointment.name,
                    appointment.date,
                    appointment.time,
                  )
                }
                style={styles.appointmentButton}>
                <Text style={styles.appointmentButtonText}>Reschedule</Text>
              </Pressable>
              <Pressable
                onPress={() => deleteAppointment(appointment._id)}
                style={styles.appointmentButton}>
                <Text style={styles.appointmentButtonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        ));
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Appoints</Text>
          {renderAppointments()}
        </View>
      );

}
export default MyAppointments;