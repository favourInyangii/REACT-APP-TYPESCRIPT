"# REACT-APP-TYPESCRIPT" 
## TypeScript Conversion

The components `Greeting` and `Counter` have been converted to TypeScript and are located in the `typescript-components` folder.

### Running the TypeScript Code

1. Ensure TypeScript and necessary type definitions are installed:

    ```bash
    npm install typescript @types/react @types/react-dom --save-dev
    ```

2. Compile the TypeScript code:

    ```bash
    npx tsc
    ```

3. Run the application:

    ```bash
    npm start
    ```

4. Ensure that the `tsconfig.json` file is properly configured to include the `typescript-components` folder:

    ```json
    {
        "compilerOptions": {
            "outDir": "./dist/",
            "sourceMap": true,
            "noImplicitAny": true,
            "module": "commonjs",
            "target": "es6",
            "jsx": "react",
            "allowJs": true,
            "moduleResolution": "node",
            "esModuleInterop": true
        },
        "include": [
            "./src/**/*"
        ]
    }
    ```

This setup will help you maintain both the original JavaScript components and the new TypeScript components in an organized manner.
