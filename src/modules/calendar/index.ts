import { Alert, NativeModules, PermissionsAndroid } from 'react-native'

const { CalendarModule } = NativeModules

async function createEvent(name: string, description: string) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR,
      {
        title: 'Calendar Permission',
        message: 'This app needs calendar access to add events',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    )

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Permission denied')
      return
    }

    CalendarModule.createCalendarEvent(
      name,
      description,
      () => {
        Alert.alert(`Reminder: ${name} created`)
      },
      () => {
        Alert.alert('Error adding reminder to calendar')
      },
    )
  } catch (error) {
    Alert.alert(`Error adding reminder to calendar: ${error}`)
  }
}

export const Calendar = {
  createEvent,
}
