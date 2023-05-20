/**
 * Generates a string based on a template and data provided.
 *
 * @param {string} format - The string template.
 * @param {Record<string, any>} data - The data to use to fill the template.
 * @param {string} delimiter - The delimiter to use for the template values.
 *
 * @returns {string} - The filled template.
 *
 * @author {Jeffrey Desir, GPT-4}
 */


export type TemplateUtilProps = {
    format: string,
    data: Record<string, any>,
    delimiter?: string
}

export default function template(strTemplate: string, data: Record<string, any>, delimiter: string = '{{}}'): string {
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
        const templateKey = strTemplate.slice(startDelimiterIndex + startDelimiter.length, endDelimiterIndex);
        const templateValue = templateKey.split('.').reduce((value, key) => value ? value[key] : '', data);
        result += templateValue;

        strTemplate = strTemplate.slice(endDelimiterIndex + endDelimiter.length);
        startDelimiterIndex = strTemplate.indexOf(startDelimiter);
    }

    return result + strTemplate;
}
