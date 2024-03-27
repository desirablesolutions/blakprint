
  import { define } from "..";


  export const meta = {
   methods: {
    get: null,
    GET: null,
    delete: null,
    DELETE: null,
    head: null,
    HEAD: null,
    options: null,
    OPTIONS: null,
    post: null,
    POST: null,
    put: null,
    PUT: null,
    patch: null,
    PATCH: null,
    purge: null,
    PURGE: null,
    link: null,
    LINK: null,
    unlink: null,
    UNLINK: null,
   }
  };

  export function defineAPI<
    ReturnParameters = any,
    TypeParameters = any,
    MetaParameters = unknown,
  >(closure: ReturnParameters, meta?: MetaParameters) {
    return define<ReturnParameters, TypeParameters, MetaParameters>(
      closure,
      meta
    );
  }
  
  
  
  