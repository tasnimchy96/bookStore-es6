import { DateTime } from '../node_modules/luxon/src/luxon.js';

const displayDateTime = () => {
  const now = DateTime.local();
  // Format the date and time as a string
  const formattedDate = now.toFormat('MMMM d, yyyy');
  const formattedTime = now.toFormat('h:mm:ss a');
  document.getElementById(
    'date-time',
  ).textContent = `${formattedDate}, ${formattedTime}`;
};

export default displayDateTime;
