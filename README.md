<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Blakprint</h1>

<h4 align="center">our workbox of redefinable, composable, model, view, and controller meta-modules for architecting software.</h4>

<h2>🔨Usage</h2>


<h3>extending semnatic view, model, or controller types.</h3>

```ts

import { ImageType, NavBarType, FooterType, HeroType } from "blakprint"

export type PageImageProps = ImageType<{
    isFullscreen?: boolean
}>
```
---

<h3>extending semnatic view, model, or controller types.</h3>

```ts

import { ImageType, NavBarType, FooterType, HeroType } from "blakprint"

export type PageImageProps = ImageType<{
    isFullscreen?: boolean
}>
```

---





<h2>⚒️Installation</h2>

**node**

```bash
npm i blakprint@latest
```
---

##### coming soon...

**python**

```bash
pip install blakprint
```
---



**crate**

```bash
cargo install blakprint
```
---




### Definition & Effector

> An extensible meta-module for authoring arbituary closures through Definitions, implemented for any syntax.


### TL;DR

#### Definition & define
**Definitions** describe an extensible, light-weight encapsulation for closures, or syntactic energy, that provide a 
consistency & terseness 


#### Effector 
**Effectors** are high-level descriptions of synchrnous & asynchronous actions.

#### Technical

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
   closure: ValidClosure,
   
   meta: Effector<MetaParams>,
   generate: Effecto<MetaParams>,
   redefine: Effector<Definition<TypeParams, ReturnParams, MetaParams>>
}


```
<h2>Frequently Asked Questions</h2>

<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>

<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>


<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>


<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>


<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>


<h2>➰Feedback</h2>

[Email us | dev@desirable.solutions](mailto:dev@desirable.solutions)
<h2>Dependencies</h2>

- [**meta-types**](https://npm.com/meta-types) _(thank you)_
- [**vite**](https://npm.com/meta-types) _(thank you)_
- [**effect**](https://npm.com/effect) _(thank you)_
- [**interface-forge**](https://npm.com/effect) _(thank you)_

<h2>✒️Authors</h2>

* [**👩🏿‍💻Jeffrey Desir**](https://desirable.solutions/team/jeffreydesir)
  
* [**🤖Open A.I GPT-4**](https://chat.openai.com)
<h2>⏳Changelog</h2>


### 🎉v12.5.0

**@lib**
- **corrected** type query definition errors with `Definition`
- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.



### 🎉v12.3.0

**@lib**
- **corrected** type query definition errors with `Definition`
- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.


### 🎉v12.2.0

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

<h2>Copyright</h2>

> Desirable Solutions 2023. All Rights Reserved. 
<h2>📜License</h2>

> **This project is under the GPL version 3.0 (the "License").** ☂️


