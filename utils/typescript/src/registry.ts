import chalk from "chalk";
import Table from "cli-table3";
import type { RegistryEntry } from "./types"


export const GlobalRegistry = {
    data: [] as Array<RegistryEntry<any>>,

    add: function <MetaTypes>(entry: RegistryEntry<MetaTypes>) {
        this.data.push(entry);
    },

    remove: function (index: number) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    },

    get: function (index: number): RegistryEntry<any> | null {
        if (index >= 0 && index < this.data.length) {
            return this.data[index];
        } else {
            return null;
        }
    },

    render: () => { },

    print: function () {
        const table = new Table({
            head: [chalk.cyan('Index'), chalk.cyan('Meta')],
        });

        this.data.forEach((entry, i) => {
            table.push([
                i,
                JSON.stringify(entry.meta, null, 2),
            ]);
        });

        console.log(table.toString());
    }
};
