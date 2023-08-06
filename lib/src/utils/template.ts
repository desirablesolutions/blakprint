import { defineUtility } from "./utils"
import type { EffectorType } from "src/utils/index"

export type TemplateUtilityProps<ExtensionProps = {}> = {
    strTemplate: string,
    data: Record<string, any>,
    delimiter?: string
} & ExtensionProps


export function defineTemplate<TypeParams, ReturnParams>() {

    return defineUtility<any, EffectorType<string>, TemplateUtilityProps>(

        (params: { strTemplate: any, data: any, delimiter: any }): string => {

            let { strTemplate, data, delimiter } = params

            const startDelimiter: string = delimiter.slice(0, delimiter.length / 2);
            const endDelimiter: string = delimiter.slice(delimiter.length / 2);

            let result: string = "";
            let startDelimiterIndex: number = strTemplate.indexOf(startDelimiter);

            while (startDelimiterIndex as number !== -1) {
                let endDelimiterIndex = strTemplate.indexOf(endDelimiter, startDelimiterIndex + startDelimiter.length);
                if (endDelimiterIndex === -1) {
                    throw new Error(`No matching end delimiter for start delimiter at index ${startDelimiterIndex}`);
                }

                result += strTemplate.slice(0, startDelimiterIndex);
                const templateKey: string = strTemplate.slice(startDelimiterIndex + startDelimiter.length, endDelimiterIndex);
                const templateValue: string = templateKey.split('.').reduce((value, key) => value ? value[key] : '', data);
                result += templateValue;

                strTemplate = strTemplate.slice(endDelimiterIndex + endDelimiter.length);
                startDelimiterIndex = strTemplate.indexOf(startDelimiter);
            }

            return result + strTemplate as string;
        }

    )
}

