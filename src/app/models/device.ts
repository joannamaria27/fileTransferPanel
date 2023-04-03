import { DeviceFile, IDeviceFile } from "./device-file";

export interface IDevice {
    id: number;
    name: string;
    download: number;
    files: IDeviceFile[];
}

export class Device implements IDevice {
    id: number;
    name: string;
    download: number;
    files: DeviceFile[];

    constructor(id: number, name: string, download: number, files: DeviceFile[], values: Object = {}) {
        this.id = id;
        this.name = name;
        this.download = download;
        this.files = files;
        Object.assign(this, values);
    }
}