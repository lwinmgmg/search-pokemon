export default function calculateOffset(page: number, limit: number): [number, number]{
    return [(page - 1)*limit, limit];
}