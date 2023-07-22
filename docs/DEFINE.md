
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