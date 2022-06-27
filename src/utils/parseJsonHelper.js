export function parseJson(str) {
    try {
        str = str.replace(/(\w+):/gm, '"$1":');
        str = str.replace(/'/gm, '"');
        return JSON.parse(str);
    } catch (_) {
        return null;
    }
}
