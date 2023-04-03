import { File, IFile } from "./file";

export interface IDeviceFile {
    id: IFile["id"];
    progress: number;
}

export class DeviceFile implements IDeviceFile {
    id: File["id"];
    progress: number;

    constructor(id: number, progress: number) {
        this.id = id;
        this.progress = progress;
    }
}