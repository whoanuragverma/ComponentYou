let lastID = 0;

export default function newID(prefix = "cy") {
    return `${prefix}-${lastID++}`;
}
