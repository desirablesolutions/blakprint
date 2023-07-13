<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1>Blakprint | TypeScript Utilities Package</h1>
<h4></h4>

### Define

> A tiny, extensible module for authoring arbituary closures through Definitions, implemented for any syntax"

```bash

type Definition<TypeParams, MetaParams> = {
   value: MethodType<TypeParams>,
   meta: MethodType<MetaParams>,
   redefine: MethodType<Definition<TypeParams, MetaParams>>
}

```
<h2>Installation</h2>


```js

npm i blakprint-utils-ts@latest

```


<h2>Usage</h2>



```js

import { define } from "blakprint-utils-ts"


const definition = define<number>( => {
    return 0
})

```
<h2>Dependencies</h2>

* Typescript
* Meta-types
<h2>License</h2>

> This project is under the GPL-version-3.0 License. 

