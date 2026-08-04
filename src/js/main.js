import { SiteChrome } from './SiteChrome.js';
import { BlogFeed } from './BlogFeed.js';
import { EventSchedule } from './EventSchedule.js';
import { CourseLibrary } from './CourseLibrary.js';
import { CourseCatalog } from './CourseCatalog.js';
import { QuantumCourse } from './QuantumCourse.js';
import { QuantumCourse2016 } from './QuantumCourse2016.js';
import { PowerElectronicsCourse } from './PowerElectronicsCourse.js';
import { NuclearEngineeringCourse } from './NuclearEngineeringCourse.js';
import { StanfordCme295Course } from './StanfordCme295Course.js';

document.addEventListener('DOMContentLoaded', () => {
  new SiteChrome().init();
  new BlogFeed('#blog-post-list').init();
  new EventSchedule('#event-list').init();
  new CourseLibrary().init();
  new CourseCatalog().init();
  new QuantumCourse().init();
  new QuantumCourse2016().init();
  new PowerElectronicsCourse().init();
  new NuclearEngineeringCourse().init();
  new StanfordCme295Course().init();
});