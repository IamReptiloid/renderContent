export function getParams(path) {
    let mas = [];
    let regexpNames = /[\["'.](?<properties>[\w\d]+)/gm;
    let match = regexpNames.exec(path);
    if (match) {
        do {
            mas.push(match.groups.properties);
        } while ((match = regexpNames.exec(path)) !== null);
    }
    return mas;
}

export function getOmittinPropsLength(str) {
    const reg =
        /((\.|(\[['"]))(?<prop1>props)(['"]\])?)?((\[["'])|\.)(?<prop2>\w+)(["']\])?$/gm;

    const match = reg.exec(str);

    return [match.groups.prop1, match.groups.prop2].filter((value) => !!value)
        .length;
}

export function getComponentPath(str, props) {
    const ommitingPropsLength = getOmittinPropsLength(str);

    return props.slice(0, props.length - ommitingPropsLength);
}

export function normalizePatn(str) {
    try {
        str = str.replace(/'/gm, '"');
        str = JSON.parse(str);
        return str.trim();
    } catch (_) {
        return str.trim();
    }
}
