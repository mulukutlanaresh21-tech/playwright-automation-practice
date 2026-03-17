//A module in TypeScript is a file that contains code and explicitly exposes a selected part of its using the "export" keyword. 
//Other files can access those exposed members using "import"

// Any file with export or import is a module
// Each module has its own scope
// Helps in clean, reusable, maintainable code


//Configurations to use modules ecosystem 

//1. package.json

//"type": "module"

//2. tsconfig.json

//{
//  "compilerOptions": {
//    "noEmit": true,
//    "allowImportingTsExtensions": true
//  }
//}