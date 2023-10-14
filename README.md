# npm-module-react-counter
test npm react component
---

1. initial package.json
    
    ```markdown
    npm init -y
    ```
    
2.  安裝 react 套件
    
    ```jsx
    yarn add -D react react-dom typescript @types/react
    ```
    
3. .gitignore
    
    ```jsx
    node_modules
    .idea
    dist
    yarn-error.log
    ```
    
4. tsconfig.json
    
    ```jsx
    {
      "include": ["src"],
      "exclude": ["dist", "node_modules"],
      "compilerOptions": {
        "module": "esnext",
        "lib": ["dom", "esnext"],
        "importHelpers": true,
        "declaration": true,
        "sourceMap": true,
        "rootDir": "./src",
        "outDir": "dist",
        "strict": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "moduleResolution": "node",
        "jsx": "react",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
      }
    }
    ```
    
5. package.json
    
    ```jsx
    {
      "name": "react-counter-joeban0608",
      "version": "1.0.0",
      "description": "test npm react component",
      "main": "dist/index.js",
      "files": [
        "dist"
      ],
      "exports": {
        ".": {
          "types": "./dist/index.d.ts",
          "default": "./dist/index.js"
        }
      },
      "scripts": {
        "clean": "rimraf dist",
        "prebuild": "npm run clean",
        "build": "tsc",
        "preVersion": "npm run build",
        "publish": "npm publish"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/joeban0608/npm-module-react-counter.git"
      },
      "keywords": [
        "react",
        "typescript"
      ],
      "author": "joeban0608",
      "license": "ISC",
      "devDependencies": {
        "@types/react": "^18.2.28",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "typescript": "^5.2.2"
      },
      "dependencies": {
        "rimraf": "^5.0.5"
      }
    }
    ```
    
6. publish
    
    ```jsx
    npm run preVersion
    npm run publish
    ```