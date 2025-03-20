# GenSX Next.js Project

This project is an updated version of the [Next.js](https://nextjs.org) boilerplate, customized to run a GenSX workflow. It was initially bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

Before running the project, make sure to set your OpenAI API key:

```bash
export OPENAI_API_KEY=your_api_key_here
# or add it to your .env file
```

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `gensx/workflows/writeJoke.tsx`. The page auto-updates as you edit the file.
 

## GenSX Workflow

### Tracing and Debugging

To enable GenSX workflow tracing and debugging, run:

```bash
npx gensx login
```

This command sets up the necessary infrastructure for monitoring and debugging your GenSX workflows, providing valuable insights into execution paths and performance metrics.

## Learn More

To learn more about GenSX, take a look at the following resources:

- [GenSX Documentation](https://gensx.com/docs) 
- [Getting Started](https://gensx.com/docs/quickstart) 

You can check out [GenSX GitHub repository](https://github.com/gensx-inc/gensx) - your feedback and contributions are welcome!
