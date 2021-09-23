module.exports = {
  root: true,
  ignorePatterns: [
    '**/polyfills.ts',
    '**/environments/*.*',
    '**/main.ts',
    '**/test.ts'
  ],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "./**/tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
      ],
      rules: {
        "import/prefer-default-export": "off",
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "import/order": ["error", { "newlines-between": "ignore" },
        ]
      },
      plugins: ['import']
    },
    {
      files: ["*.component.html", '*.html'],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 140 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
