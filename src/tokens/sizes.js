const defaults = {
    baseline: 4,
    fontBase: 16
}

export const Sizes = {
    baseline: defaults.baseline,
    space: (size) => {
        return defaults.baseline * parseInt(size);
    },
    px: (size) => {
        return `${defaults.baseline * parseInt(size)}px`;
    },
    rem: (size) => {
        return `${(defaults.baseline * parseInt(size)) / defaults.fontBase}rem`;
    },
    em: (size, base) => {
        return `${(defaults.baseline * parseInt(size)) / (defaults.baseline * base)}em`;
    }
};