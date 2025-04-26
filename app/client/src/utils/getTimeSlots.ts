import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default function getTimeSlots(startTime: string, endTime: string): string[] {
  const slots: string[] = [];
  let currentTime = dayjs(startTime, "hh:mm A");

  while (currentTime.isBefore(dayjs(endTime, "hh:mm A"))) {
    slots.push(currentTime.format("hh:mm A")); 
    currentTime = currentTime.add(30, "minute"); // 30 minute intervals
  }

  return slots;
}