import dayjs from "dayjs";

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export const getCurrDate = () => {
    const day = {
        name: days[dayjs().day()],
        date: dayjs().format("MMM D YYYY")
    }

    return day;
};

export const getNextDay = (addValue) => {
    const nextDay = {
        name: days[dayjs().add(addValue, "day").day()],
        date: dayjs().add(addValue, "day").format("MMM D YYYY")
    }
    return nextDay
}