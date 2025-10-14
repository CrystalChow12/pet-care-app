// This function takes an errors object and the input's name as arguments and returns the related errors. Then we pass the filtered error to the InputError component. You can check out this utility function for reference:

export function findInputError(errors, name) {
    const filtered = Object.keys(errors)
    .filter( key => key.includes(name))
    .reduce((cur, key) => {
        return Object.assign(cur, {error:errors[key]})
    }, {})
    return filtered; 
}