export type ControllerType<
  RequiredParameters,
  OptionalParameters = unknown,
> = RequiredParameters & Partial<OptionalParameters>;