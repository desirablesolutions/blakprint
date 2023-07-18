import { defineUtility } from "./utils"

export type TemplateUtilityProps<ExtensionProps = {}> = {
    strTemplate: string,
    data: Record<string, any>,
    delimiter?: string
} & ExtensionProps


export function defineTemplate<ExtensionProps>() {

    return defineUtility<any, any>(

        (params?: any): string => {

            let { strTemplate, data, delimiter } = params

            const startDelimiter = delimiter.slice(0, delimiter.length / 2);
            const endDelimiter = delimiter.slice(delimiter.length / 2);

            let result = "";
            let startDelimiterIndex = strTemplate.indexOf(startDelimiter);

            while (startDelimiterIndex !== -1) {
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

            return result + strTemplate;
        }

    )
}

