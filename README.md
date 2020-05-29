# Example of `@template` tag in `tsd-jsdoc`

Just `npm install` then `npm run build` and look at the result in `/out`.

As far as I can tell, Typescript correctly interprets all the tags used here.
The output should have `declare class GenericClass<SomeClass extends Function>`
and `declare function privateFunc<T>` but both are missing the type parameters.
