import {NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;

function createEvent(name: string, description: string) {
  CalendarModule.createCalendarEvent(name, description);
}

export const Calendar = {
  createEvent,
};
