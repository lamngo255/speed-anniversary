# speedpass-anniversary

Development team can use Live Sass Compiler and Live Server, which are VsCode extensions for hot-loading capability. Otherwise, we can just use plain html and compiled vanilla css from the `dist` folder.

Configuration in `settings.json` file (Go to `Settings` -> Live Sass Server)

````
 "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/dist/css"
        },
    ]
    ```
````
