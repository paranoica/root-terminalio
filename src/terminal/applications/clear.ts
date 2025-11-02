import FileSystemBash, { FileSystemType } from "../fileSystemBash";
export default function clear(print: (s: string, md?: boolean) => void, path: FileSystemType) {
    const docs = {
        name: "clear",
        short: "clear terminal",
        long: "",
    };

    const app = (args: string[], options: string[]) => {
        if (options.find((o) => o === "-h" || o === '-help')) {
            print(`\n${docs.name} – ${docs.short}`);
            return;
        }

        for (let i: number = 0; i < 12; i++)
            print("\n");
    };
    
    return { docs, app };
}