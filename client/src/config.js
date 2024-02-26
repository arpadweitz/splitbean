const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? 'http://localhost:5010'
    : 'https://splitbeancoffee.cyclic.app';


export {URL}