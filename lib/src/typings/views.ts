export type ViewType<
  RequiredParameters,
  OptionalParameters = unknown,
> = RequiredParameters & Partial<OptionalParameters>;

export type ComponentType<
  RequiredParameters,
  OptionalParameters = unknown,
> = ViewType<RequiredParameters, OptionalParameters>;

export type IncludeType<RequiredParameters, OptionalParameters> = ViewType<
  RequiredParameters,
  OptionalParameters
>;

export type LayoutType<RequiredParameters, OptionalParameters> = ViewType<
  RequiredParameters,
  OptionalParameters
>;

export type HeaderType<Parameters> = IncludeType<Parameters, never>

export type FooterType<Parameters> = IncludeType<Parameters, never>