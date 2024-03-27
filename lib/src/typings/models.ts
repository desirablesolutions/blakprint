export type ModelType<
  RequiredParameters,
  OptionalParameters = unknown,
> = RequiredParameters & Partial<OptionalParameters>;