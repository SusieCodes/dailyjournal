export const FormatDate = (obj) => {
    const dateStr = new Date(obj);
    const formattedDate = dateStr.toDateString();
    return formattedDate;
}