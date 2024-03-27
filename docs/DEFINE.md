
<h3>✒️Definition & Effector</h3>

> An extensible meta-module for authoring arbituary closures through Definitions.



<h4>Definition & define</h4>

**Definitions** is an attempt to describe an extensible, light-weight encapsulation for closures, or syntactic quanta, that provide a transparent & functional abstraction for every kind of datam. Though the paradigm doesn't have a language syntax (yet), this library was made from the growing need to standarize mixed-paradigmed computational solutions that was able to be:

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