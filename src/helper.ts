export const getEndpoint = (url: string) => {
    const regex = /\/api\/(.*)/;
    const match = url?.match(regex);

    return match ? match[1] : '';
};

export const getDate = (date: string) => {
    const newDate = new Date(date);

    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}