export function isValidPath(str) {
    return /^(content)?((\.){1}|props|(props\.\w+)|content|type|\d|\[|\])*$/gm.test(
        str
    );
}
