function formatDateForDisplay(isoDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = isoDate.split("-");
  const monthIndex = parseInt(month) - 1;

  return `${parseInt(day)} ${months[monthIndex]}, ${year}`;
}

export default formatDateForDisplay;
