require('module-alias/register')

import 'module-alias/register'
import * as moduleAlias from 'module-alias';

moduleAlias.addAliases({
  'blakprint': __dirname
});

export * as build from "./build/index"
export * as components from "./components/index"
export * as services from "./services/index"
export * as pages from "./pages/index"
export * as styles from "./styles/index"
export * as tests from "./tests/index"

export * as typings from "./typings/index"
