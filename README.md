# Handle global state management

People usually use global state management libraries in 2 different cases:
- To share data across components and avoid prop drilling
- To handle asynchronous calls and store the response

### Share data across components

This is what this repo will try to show, there are multiple ways to share data and avoid prop-drilling. Our
show case will focus on the React [Context API](https://react.dev/reference/react/createContext).

### Asynchronous calls (ie calls to an API)

I'd personally recommend to use a very good library like [React-Query](https://tanstack.com/query/v3/docs/react/overview)