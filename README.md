<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Blakprint</h1>

<h4 align="center">an editor & workbox of reusable, composable, model, view, and controller modules for architecting creative projects.</h4>


### Define

> A tiny, extensible module for authoring arbituary closures through Definitions, implemented for any syntax"

```bash

type Definition<TypeParams, MetaParams> = {
   value: MethodType<TypeParams>,
   meta: MethodType<MetaParams>,
   redefine: MethodType<Definition<TypeParams, MetaParams>>
}

```