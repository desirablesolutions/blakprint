const docs_configuration = () => {
    return {
        "package": "package.json",
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
    }
}

export default docs_configuration