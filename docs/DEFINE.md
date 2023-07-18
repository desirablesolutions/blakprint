
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