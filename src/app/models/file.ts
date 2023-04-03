export interface IFile {
    id: number;
    name: string;
    size: number;
}

export class File implements IFile {
    id: number;
    name: string;
    size: number;

    constructor(id: number, name: string, size: number) {
        this.id = id;
        this.name = name;
        this.size = size;
    }
}