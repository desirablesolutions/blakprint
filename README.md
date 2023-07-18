<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Blakprint</h1>

<h4 align="center">our workbox of redefinable, composable, model, view, and controller meta-modules for architecting software.</h4>


### Define Functor

> A tiny, extensible module for authoring arbituary closures through Definitions, implemented for any syntax.

```bash

type Definition<TypeParams, MetaParams> = {
   value: MethodType<TypeParams>,
   log: MethodType<Void>,
   closure: ValidClosure<TypeParams>,
   meta: MethodType<MetaParams>,
   redefine: MethodType<Definition<TypeParams, MetaParams>>
}

```
<h2>🔨Usage</h2>


<h3>defining arbituary closures</h3>

```ts


import { defineComponent, defineStyles } from "blakprint"


const NavBar = defineComponent( => {
    return (<header>
    
          </header>)
}).value



```



---


<h3>defining arbituary closures</h3>

```ts


import { defineComponent, defineStyles } from "blakprint"


const NavBar = defineComponent( => {
    return (<header>
    
          </header>)
}).value



```



---


<h3>defining arbituary closures</h3>

```ts


import { defineComponent, defineStyles } from "blakprint"


const NavBar = defineComponent( => {
    return (<header>
    
          </header>)
}).value



```



---


<h3>defining arbituary closures</h3>

```ts


import { defineComponent, defineStyles } from "blakprint"


const NavBar = defineComponent( => {
    return (<header>
    
          </header>)
}).value



```



---



<h2>Dependencies</h2>

- [**meta-types**](https://npm.com/meta-types) _(thank you)_
- [**vite**](https://npm.com/meta-types) _(thank you)_

<h2>⚒️Installation</h2>

**node**

```bash
npm i blakprint@latest
```
---


<h2>Frequently Asked Questions</h2>

<summary>
<details><em>Who in their right mind would write software like this?</em></details>

<em>Engineers who love to generalize.</em>

</summary>

<h2>➰Feedback</h2>

**[Email us | dev@desirable.solutions](mailto:dev@desirable.solutions)**
<h2>✒️Authors</h2>

* [**👩🏿‍💻Jeffrey Desir**](https://desirable.solutions/team/jeffreydesir)
* [**🤖Open A.I GPT-4**](https://chat.openai.com)
<h2>Copyright</h2>

> Desirable Solutions 2023. All Rights Reserved. 
<h2>⏳Changelog</h2>

### 🎉v12.1.0

**@lib**

- **stable:** base definition functors and some plugins.
- **stable:** base typings system and unwrapping API.
- **added:**
  - **build:**
  - **assets:**
  - **views:**
  - **models:**
  - **controllers:**
  - **hooks:**

**@app**

- **unstable!**

**@cli**

- **unstable!**

**@cli**

- **unstable!**

---

### vX.0.1

**@lib**

- **testing** `define` function with parameterized type defintions and single responsibility.
- **testing** GPT-4 Integration for Intelligent Terminal Assitance

---

<h2>📜License</h2>

> **This project is under the GPL version 3.0 (the "License").** ☂️


