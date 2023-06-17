// Import the Luxon library
import { DateTime } from 'luxon';

const displayDateTime = () => {
  // Get the current date and time
  const now = DateTime.now();

  // Format the date and time as a string
  const formattedDate = now.toFormat('yyyy-MM-dd');
  document.getElementById('date-time').textContent = formattedDate;
};

export default displayDateTime;
