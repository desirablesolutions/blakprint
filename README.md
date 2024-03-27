<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Blakprint</h1>

<h4 align="center">a closure evaluator & composer for architecting software.</h4>

<h1 align="center">

<img src="https://github.com/desirablesolutions/blakprint/blob/main/docs/logo.png?raw=true" height="230" width="230" alt="blackprint-logo-desirable-solutions"/>

</h1>
<h2>⚒️Installation</h2>

**node**

```bash
npm i blakprint@latest
```
---

<h2>🔨Usage</h2>

<h3>creating a definition of a closure.</h3>

```ts
import { define } from "blakprint";

export const myProgram = define<any, Array, Error>( => {
  const dataCall = await useDatasource;
  store.savedataCall;
  return dataCall;
});

const programResults = myProgram.value;

```

<h3>extending semnatic view, model, or controller types.</h3>

```ts
import { ImageType, NavBarType, FooterType } from "blakprint";

export type MyImageProps = ImageType<{
  isFullscreen?: boolean;
}>;
```

---

<h3>creating semnatic view types.</h3>

```ts
import { definePage, defineComponent } from "blakprint";

const HomePage = definePage({
  metaData: {
    title: "Home",
  },
  data: {
    hero: async  => await {},
  },
});

const Header = defineComponent({
  render: (props: any, inner: any) => {
    return `<header>
                 ${inner}
               </header>`;
  },
});
```

---


<h3>✒️Definition & Effector</h3>

> An extensible meta-module for authoring arbituary closures through Definitions.



<h4>Definition & define</h4>

**Definitions** is an attempt to describe an extensible, light-weight encapsulation for closures, or syntactic quanta, that provide a transparent & functional abstraction for every kind of datam. Though the paradigm doesn't have a language syntax yet, this library was made from the growing need to standarize mixed-paradigmed computational solutions that was able to be:

* Read //given memory space
* Evaluated //given execution space 
* Mutated //change either spaces
  
<h4>EffectorType & Effector</h4>

**Effectors** are complementary and neccesary to **Definitions** in order to describe Evaluations & Mutations on datams. Basically, high-level descriptions of synchrnous & asynchronous actions.

<h4>Technical</h4>


```typescript

type TypeParams = null
type MetaParams = null
type ErrorParams = null
type ReturnParams = null 

enum DEFAULT_TYPE_PARAMS_TYPES
enum DEFAULT_RETURN_PARAMS_TYPES
enum DEFAULT_META_PARAMS_TYPES
enum DEFAULT_ERROR_PARAMS_TYPES

type ValidClosure = string | number | Function | Future<ValidClosure> | Object | null | Error | Array 

type Effector<TypeParams=DEFAULT_TYPE_PARAMS_TYPES, 
              MetaParams=DEFAULT_META_PARAMS_TYPES,        
              ReturnParams=DEFAULT_RETURN_PARAMS_TYPES,
              ErrorParams=DEFAULT_ERROR_PARAMS_TYPES> {

    (...args: TypeParams[]) => ReturnParams | ErrorParams & MetaParams
}


type Definition<TypeParams=DEFAULT_TYPE_PARAMS_TYPES,
                ReturnParams=DEFAULT_RETURN_PARAMS_TYPES, 
                MetaParams=DEFAULT_META_PARAMS_TYPES> {
   value: Effector<TypeParams, ReturnParams, ErrorParams, MetaParams>,
   log: Effector<MetaParams>,
   closure: Effector<ValidClosure>,
   
   meta: Effector<MetaParams>,
   generate: Effector<TypeParams>,
   redefine: Effector<Definition<TypeParams, ReturnParams, MetaParams>>
}

```
<h2>❓Frequently Asked Questions</h2>

<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>

<details>
<summary><em>Is this stable to use in production?</em></summary>

<em>Yes && No.</em> The library is just a collection of small typescript modules, types, and plugins commonly used for making M.V.C and generalized for.
It is very extensible, and is extremely high-level. There is no fancy-shmancy engine or compiler (technically,
the default effector functor uses <a href="">Effect</a> but its not required, the simplified option uses a generically typed identity function to abstract definition methods.

</details>


<details>
<summary><em>Is this able to be contributed to?</em></summary>

<em>Not yet! - but we'd love that.</em> The idea is simple, without bloating the end-developer memory space, load and define as many computations and data-sets as humanly possible while another contributing team generalize the build process for other lower interfaces (WebAssembly, Rust, DeviceScript, etc...). 

</details>

<h2>⚙️Dependencies</h2>

- [**meta-types**](https://npm.com/meta-types) _(thank you)_
- [**vite**](https://npm.com/meta-types) _(thank you)_
- [**effect**](https://npm.com/effect) _(thank you)_
- [**interface-forge**](https://npm.com/effect) _(thank you)_
- [**class-variance-authority**](https://npm.com/class-variance-authority) _(thank you)_


<h2>🫱🏿‍🫲🏿Contributions</h2>


**coming soon**...
<h2>❣️Support</h2>

[Email us | dev@desirablesolution.org](mailto:dev@desirable.solutions)

[Fund us | Buy us a coffee!](https://ko-fi.com/desirablesolutions)
<h2>✒️Authors</h2>

* [**👩🏿‍💻Jeffrey Desir**](https://desirablesolutions.org/team/jeffreydesir)
  

<h2>⏳Changelog</h2>



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)]#v17xy

## 🎉v17.X.Y
- **stable** `Definition` library had long-standing NPM alias issue with vite, making it unusable. This has been fixed.
- **stable** `Definition` library had long-standing NPM alias issue with vite, making it unusable. This has been fixed.
- **stable** `Definition` library had long-standing NPM alias issue with vite, making it unusable. This has been fixed.


### v13.2.2
- **cursed** `Definition` library had long-standing NPM alias issue with vite, making it unusable. This has been fixed.



### v13.2.1
- **stable** `Definition` library had long-standing NPM alias issue with vite, making it unusable. This has been fixed.
- **stable** Adding dependecy injections for definitions & extensions is corrected & stable.
- **stable** Type & Type helpers for generating definitions. 


<h2>©️Copyright</h2>

> ©️ Desirable Solutions 2024. All Rights Reserved. 
<h2>📜License</h2>

> **This project is under the GPL version 3.0 (the "License").** ☂️


