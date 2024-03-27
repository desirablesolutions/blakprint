
export type ViewType<
  RequiredParameters,
  OptionalParameters = unknown,
> = RequiredParameters & Partial<OptionalParameters>;




export type ComponentType = ViewType<>
export type IncludeType = ViewType<>
export type LayoutType = ViewType<>