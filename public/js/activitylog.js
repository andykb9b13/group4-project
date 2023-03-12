import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css';

//https://vanilla-calendar.frontend.uvarov.tech/api/ api documentation to reference later

const calendar = new VanillaCalendar('#calendar');
calendar.init();