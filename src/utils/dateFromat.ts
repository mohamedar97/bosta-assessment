interface FormatOptions {
  timestamp: string | number | Date;
  format?:
    | "default"
    | "dd/mm/yyyy hh:mm"
    | "dd Month yyyy"
    | "dd/mm/yyyy"
    | "hh:mm";
  lang?: "en" | "ar";
}

function formatTimestamp({
  timestamp,
  format = "default",
  lang = "en",
}: FormatOptions): string {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "";
  }

  // Format date components
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  // Choose language-specific arrays for months and days
  const months = lang === "ar" ? getArabicMonths() : getEnglishMonths();
  const days = lang === "ar" ? getArabicDays() : getEnglishDays();

  // Format based on the specified format
  switch (format) {
    case "default":
      const dayName = days[date.getUTCDay()];
      return `${dayName} ${day}/${month}/${year} ${hours}:${minutes}`;
    case "dd/mm/yyyy hh:mm":
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    case "dd Month yyyy":
      const monthName = months[date.getUTCMonth()];
      return `${day} ${monthName} ${year}`;
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "hh:mm":
      return `${hours}:${minutes}`;
    default:
      throw new Error("Invalid format");
  }
}

function getEnglishMonths() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function getArabicMonths() {
  return [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
}

function getEnglishDays() {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}

function getArabicDays() {
  return [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
}

export default formatTimestamp;
