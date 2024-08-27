const monthAbbreviations = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function formatDate(inputDate: string | Date): string {
  // If inputDate is a string, parse it; otherwise, use the Date object directly
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;

  // Get current year
  const currentYear = new Date().getFullYear();

  // Include the year in the final result only if it's different from the current year
  const result = `${monthAbbreviations[date.getMonth()]} ${addOrdinalSuffix(date.getDate())}${date.getFullYear() !== currentYear ? `, ${date.getFullYear()}` : ''}`;

  return result;
}

// Function to add ordinal suffix to the day (e.g., 1st, 2nd, 3rd)
export function addOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  } else {
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }
}