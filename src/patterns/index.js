import enAbout from "raw-loader!./en/about.txt";
import enAttendees from "raw-loader!./en/attendees.txt";
import enContact from "raw-loader!./en/contact.txt";
import enSchedule from "raw-loader!./en/schedule.txt";
import enSpeakers from "raw-loader!./en/speakers.txt";
import enTickets from "raw-loader!./en/tickets.txt";
import enVenue from "raw-loader!./en/venue.txt";

import jpAbout from "raw-loader!./jp/about.txt";
import jpAttendees from "raw-loader!./jp/attendees.txt";
import jpContact from "raw-loader!./jp/contact.txt";
import jpSchedule from "raw-loader!./jp/schedule.txt";
import jpSpeakers from "raw-loader!./jp/speakers.txt";
import jpTickets from "raw-loader!./jp/tickets.txt";
import jpVenue from "raw-loader!./jp/venue.txt";

export default {
  ja: {
    about: jpAbout,
    attendees: jpAttendees,
    contact: jpContact,
    schedule: jpSchedule,
    speakers: jpSpeakers,
    tickets: jpTickets,
    venue: jpVenue
  },
  en: {
    about: enAbout,
    attendees: enAttendees,
    contact: enContact,
    schedule: enSchedule,
    speakers: enSpeakers,
    tickets: enTickets,
    venue: enVenue
  }
};
