
<h3>Definition & Effector</h3>

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