import {Calendar as BigCalendar, CalendarProps, dayjsLocalizer, Views} from 'react-big-calendar'
import dayjs from 'dayjs'
import {useState, useCallback} from 'react'
import '../styles/Calendar.css'

const localizer = dayjsLocalizer(dayjs);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  type View = typeof Views[keyof typeof Views];

  const [date, setDate] = useState(dayjs())
  const [view, setView] = useState<View>(Views.MONTH)

  const onNavigate = useCallback((newDate: Date) => setDate(dayjs(newDate)), [setDate])
  const onView = useCallback((newView: View) => setView(newView), [setView])

  return (
    <BigCalendar {... props} 
    localizer={localizer}
    date={date.toDate()}
    onNavigate={onNavigate}
    onView={onView}
    view={view} />
  );
}