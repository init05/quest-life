const getProgressColor = (value: number) => {
    if (value > 80) {
        return "error";
    } else if (value > 50) {
        return "warning"
    }
    return "primary"
}

export default getProgressColor;