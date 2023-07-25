<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Blakprint</h1>

<h4 align="center">our workbox of redefinable, composable, model, view, and controller meta-modules for architecting software.</h4>

<h2>🔨Usage</h2>


<h3>creating a definition of a closure.</h3>

```ts
import { define } from "blakprint";

export const myProgram = define<any, Array, Error>( => {

    return [
        0,0,0
    ]
})

const programResults = myProgram.value

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

<h2>⚒️Installation</h2>

**node**

```bash
npm i blakprint@latest
```
---

_coming soon..._

**python**

```bash
pip install blakprint
```
---



**rust**

```bash
cargo install blakprint
```
---

**clojure**

```bash
lein install blakprint
```
---






<h3>✒️Definition & Effector</h3>

> An extensible meta-module for authoring arbituary closures through Definitions, implemented for any syntax.


<h3>TL;DR</h3>


<h3>Definition & define</h3>

**Definitions** describe an extensible, light-weight encapsulation for closures, or syntactic energy, that provide a 
consistency & terseness 

* Read
* Evaluate
* Mutate
  


<h4>Effector</h4>

**Effectors** are high-level descriptions of synchrnous & asynchronous actions.

<h4>Technical</h4>

```bash


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)]#in-fix-psudocode-

# in-fix psudocode 


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

<h2>➰Feedback</h2>

[Email us | dev@desirable.solutions](mailto:dev@desirable.solutions)
<h2>⚙️Dependencies</h2>

- [**meta-types**](https://npm.com/meta-types) _(thank you)_
- [**vite**](https://npm.com/meta-types) _(thank you)_
- [**effect**](https://npm.com/effect) _(thank you)_
- [**interface-forge**](https://npm.com/effect) _(thank you)_
- [**class-variance-authority**](https://npm.com/class-variance-authority) _(thank you)_


<h2>✒️Authors</h2>

* [**👩🏿‍💻Jeffrey Desir**](https://desirable.solutions/team/jeffreydesir)
  
* [**🤖Open A.I GPT-4**](https://chat.openai.com)
<h2>⏳Changelog</h2>


### 🎉v12.5.0

**lib**
- **corrected** type query definition errors with `Definition`
- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.



### v12.3.0

**@lib**
- **corrected** type query definition errors with `Definition`
- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.


### v12.2.0

**@lib**
- **corrected** type query definition errors with `Definition`
- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.


---

### v12.1.0

**@lib**

- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.


---

### v11.0.1

**@lib**

- **testing** `define` function with parameterized type defintions and single responsibility.
- **testing** GPT-4 Integration for Intelligent Terminal Assitance

---

<h2>©️Copyright</h2>

> ©️ Desirable Solutions 2023. All Rights Reserved. 
<h2>📜License</h2>

> **This project is under the GPL version 3.0 (the "License").** ☂️


