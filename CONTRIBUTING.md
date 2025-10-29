# Contributing to Cyberfus

Thank you for your interest in contributing to the Cyberfus project! This document provides guidelines for contributing to the project.

## Development

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 16 or later)
*   [npm](https://www.npmjs.com/)

### Setting up the development environment

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/cyberfus.git
    ```
2.  Install the project dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env.local` file and add the required environment variables. You can use the `.env.example` file as a template.

### Running the development server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`.

## Linting

This project uses ESLint to enforce a consistent code style. To run the linter, use the following command:

```bash
npm run lint
```

Please fix any linting errors before submitting your changes.

## Testing

This project uses Jest for testing. To run the test suite, use the following command:

```bash
npm run test
```

Please add tests for any new features or bug fixes.

## Submitting changes

1.  Fork the repository and create a new branch for your changes.
2.  Make your changes and commit them with a clear and descriptive commit message.
3.  Push your changes to your fork and submit a pull request.

## Agent Instructions

For instructions and guidelines for AI agents working on the Cyberfus project, please see the [`AGENTS.md`](AGENTS.md) file.
