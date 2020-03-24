module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: {
                inlineSourceMap: true,
                module: 'commonjs',
                paths: {
                    '@apestaartje/uuid/*': [
                        'src/*',
                    ],
                },
                sourceMap: false,
            },
        },
    },
    moduleNameMapper: {
        '^@apestaartje/uuid/(.*)$': '<rootDir>/src/$1',
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!@apestaartje).+(js|jsx)$',
    ],
};
