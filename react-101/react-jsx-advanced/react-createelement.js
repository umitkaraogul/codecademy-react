/*
React.createElement

You can write React code without using JSX at all!

The majority of React programmers do use JSX, and we will use it for the remainder of this tutorial,
 but you should understand that it is possible to write React code without it.

When a JSX element is compiled, the compiler transforms the JSX element into the method.
Every JSX element is secretly a call to React.createElement().

*/
const greatestDivEver = React.createElement("div",null,"i am div");