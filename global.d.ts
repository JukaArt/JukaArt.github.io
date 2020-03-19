declare module '*.css' {
  const exports: { [exportName: string]: string };
  export = exports;
}

declare module 'react-hot-loader';
declare module 'graphiql';
declare module 'uuid/v4';
declare module 'numeral';
