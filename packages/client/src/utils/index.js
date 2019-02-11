export function isNumber(variable) {
    return !isNaN(variable) && typeof variable === 'number';
}

export function isString(variable) {
    return typeof variable === 'string';
}
