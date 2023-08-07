export function CommandLineInterface() {

    return {
        generate: () => {
            console.log("generate")
        }
    }
}


export const data = [
    {
        readme: `
    {
        "package": "package.json",
        "config": "docs.config.json",
        "blueprint": "DOCUMENTATION.md",
        "input": "DOCUMENTATION.md",
        "output": "README.md",
        "line": "dark",
        "placeholder": [
            "(",
            ")"
        ],
        "headingPrefix": {
            "1": "",
            "2": ""
        },
        "documentationConfig": {
            "markdown": {
                "titleLevel": 2
            }
        }
    }`
    }
]

const presets = {
    mvc: {
      models: {},
      views: {},
      controllers: {}
    },
    docs: {
  
    }
  }
  