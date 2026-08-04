import { SiteChrome } from './SiteChrome.js';
import { EventSchedule } from './EventSchedule.js';
import { CourseLibrary } from './CourseLibrary.js';

document.addEventListener('DOMContentLoaded', () => {
  new SiteChrome().init();
  new EventSchedule('#event-list').init();
  new CourseLibrary().init();
});