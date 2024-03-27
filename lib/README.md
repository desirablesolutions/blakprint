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

<h2>❓Frequently Asked Questions</h2>

<details>
<summary><em>Who in their right mind would write software like this?</em></summary>

<em>Engineers who love to generalize.</em>

</details>

<details>
<summary><em>Is this stable to use in production?</em></summary>

<em>No. -- however</em> The library is just a collection of small typescript modules, types, and plugins commonly used for making M.V.C and generalized for.
It is very extensible, and is extremely high-level. There is no fancy-shmancy engine or compiler. Just logic.

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


