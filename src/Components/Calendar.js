import { useState } from "react";
import { DatePicker } from '@mantine/dates';
import 'dayjs/locale/de';
import { DataView, CurrentDate } from "./DataView";
import '@mantine/dates/styles.css';

export function CalendarView() {
    const date = new Date();
    const [value, setValue] = useState(date);
    const getCurrentDate = () => {
        return {
            day: value?.getDate(),
            month: value?.getMonth(),
            year: value?.getFullYear()
        }
    }
    console.log(value);


    return (
        <>
            <DatePicker 
                value={value}
                onChange={setValue}
                locale="locale"
            />
            <DataView {...getCurrentDate()}
            />
        </>
    )
};