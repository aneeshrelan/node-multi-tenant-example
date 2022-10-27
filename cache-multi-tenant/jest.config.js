module.exports = {
    displayName: "TESTS",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)$",
    collectCoverageFrom: [
        "src/routes/**/*.ts",
        "src/models/**/*.ts",
        "src/shared/**/*.ts",
        "src/controllers/**/*.ts",
        "src/helpers/**/*.ts",
        "src/middlewares/**/*.ts",
        "src/db/services/**/*.ts"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "tests/databaseModels"
    ],
    coverageReporters: ["text", "html", "json-summary"],
    reporters: ["default", "jest-junit"],
    roots: ["./tests/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
