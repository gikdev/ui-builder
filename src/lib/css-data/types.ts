/** The root interface for the CSS specification data.  */
export interface CssSpec {
  /** Version of the spec data format */
  version: number

  /** List of CSS properties and their metadata */
  properties: CssProperty[]
}

/** Represents a CSS property entry.  */
export interface CssProperty {
  /** The CSS property name (e.g., "animation", "color") */
  name: string

  /** List of browser codes that support this property */
  browsers?: string[]

  /** Optional at-rule this property is part of (e.g., "@counter-style") */
  atRule?: string

  /** Syntax definition for the property */
  syntax?: string

  /** Relevance score used for sorting/prioritization */
  relevance?: number

  /** Text description of what the property does */
  description?: string

  /** List of possible values this property accepts */
  values?: CssValue[]

  /** Set of allowed value types (like "enum", "length", etc.) */
  restrictions?: CssRestriction[]

  /** External documentation links */
  references?: CssReference[]

  /** Baseline support info across browsers */
  baseline?: CssBaseline
}

/** A specific value that a CSS property may accept.  */
export interface CssValue {
  /** The literal name of the value (e.g., "auto", "none", "inherit") */
  name: string

  /** Optional explanation of what the value does */
  description?: string

  /** Optional list of browsers supporting this value */
  browsers?: string[]
}

/** A reference to external documentation like MDN.  */
export interface CssReference {
  /** The label of the reference (e.g., "MDN Reference") */
  name: string

  /** The link URL */
  url: string
}

/** Indicates baseline support status for a property.  */
export interface CssBaseline {
  /** Status value such as "high", "false", or custom */
  status: "high" | "false" | string

  /** When baseline low support started */
  baseline_low_date?: string

  /** When baseline high support started */
  baseline_high_date?: string
}

/** List of known value type restrictions for CSS properties.  */
export type CssRestriction =
  | "enum"
  | "string"
  | "identifier"
  | "image"
  | "time"
  | "timing-function"
  | "number"
  | "length"
  | "percentage"
  | "position"
  | "color"
  | "repeat"
  | "box"
  | "url"
  | "line-width"
  | "line-style"
