## About The Project

This is a application for fetching, listing, and filtering media by status and/or language.

The components were built with reusability and single responsability in mind for this context and if the application scales.

- `Button` and `Select` components represent the equivalent HTML elements and are fully reusable.
- `Medium` component is responsible for rendering a card for a medium with their different status.
- `MediumList` renders a list of `Medium` or a "No data" message.
- `FilterableList` has the filters for Status and Language, passing the filtered list for the `MediumList`.

### Build With

- React
- TypeScript

### Demo

The live version of application can be accessed at:

- https://subly-media.vercel.app/

## Running the project

This is an example of how you can run the project locally.

### Installation

1.  Clone the repo

```sh
git clone https://github.com/ebarross/subly-media.git
```

2.  Install NPM packages

```sh
npm install
```

### Running

```sh
npm start
```

### Testing

```sh
npm test
```
