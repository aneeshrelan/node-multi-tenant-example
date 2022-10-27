const jsonreporter2Options = {
    outputDir: "./tests/integration",
    outputFile: "output.json",
    fullOutput: true
};

module.exports = {
    rootDir: process.cwd(),
    displayName: "INTEGRATION TEST: AIR SERVICE",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)$",
    collectCoverageFrom: [
        "src/**/*.ts"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "tests/databaseModels",
        "assetConsumer.spec.ts",
        "vectorConsumer.spec.ts"
    ],
    coverageReporters: ["text", "html", "json-summary"],
    reporters: [
        "default",
        "jest-junit",
        ["jest-json-reporter2", jsonreporter2Options]
    ],
    roots: ["./tests/integration/test/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
