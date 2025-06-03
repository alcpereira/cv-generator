# CV PDF Generator

The CV PDF Generator is a React app used to build a CV and export it as a PDF.

## Prerequisites

Make sure you have the correct version of Node.js installed. You can use a node version manager that supports `.node-version` file such [`fnm`](https://github.com/Schniz/fnm).

## How To Run

1. Add your picture in `src/assets/profile.jpeg`
2. Fill out your information in `data.json`
3. Adapt CSS or scale in `pdf.ts` if needed
4. Run the following commands in the terminal

```sh
npm install

npm run pdf
```

## Development / Debug

If you want to tweak your CV or debug some features you are implementing, you can run the dev server using:

```sh
npm run dev
```

## Built With

- React + Vite
- Puppeteer for PDF generation

Contributing: Here's a quick guide for writing commit messages:

1. Start with a type: Use fix:, feat:, docs:, etc., to indicate the nature of the change.
2. Add a brief description: Follow the type with a concise summary of the change (2-4 words).
3. Optional details: Use a blank line to separate the summary from a longer description if needed.
4. Reference issues: Include issue numbers or tags if applicable
5. Explore conventional commits documentation here: https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index
