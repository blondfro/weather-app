import dayjs from "dayjs";

export const getCurrDate = () => {
    const day = dayjs().format("MMM D YYYY");
    return day;
};

export const getNextDay = (addValue) => {
    const nextDay = dayjs().add(addValue, "day").format("MMM D YYYY");
    return nextDay
}