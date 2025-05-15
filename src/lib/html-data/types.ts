/** The root interface for the HTML specification data.  */
export interface HtmlSpec {
  /** Version of the spec format */
  version: number

  /** List of HTML tags included in the spec */
  tags: HtmlTag[]
}

/** Represents a single HTML tag and its associated metadata.  */
export interface HtmlTag {
  /** The tag name (e.g., "div", "a", "meta") */
  name: string

  /** A markdown or plain text description of the element */
  description: HtmlDescription

  /** Optional list of attributes the tag supports */
  attributes?: HtmlAttribute[]

  /** Optional list of external documentation or spec references */
  references?: HtmlReference[]

  /** Optional list of browsers that support this tag */
  browsers?: string[]

  /** Optional status info, such as baseline support dates */
  status?: HtmlStatus

  /** Indicates whether the tag is a void element (e.g. <br>, <img>) */
  void?: boolean
}

/** Describes content with a kind (e.g. markdown).  */
export interface HtmlDescription {
  /** Kind of description content */
  kind: string

  /** The actual content */
  value: string
}

/** Represents an attribute available on an HTML tag.  */
export interface HtmlAttribute {
  /** Name of the attribute (e.g., "href", "target") */
  name: string

  /** Optional description string or markdown object */
  description?: string | HtmlDescription

  /** Optional value set category for the attribute */
  valueSet?: string

  /** Optional list of supported browsers */
  browsers?: string[]

  /** Optional support status */
  status?: HtmlStatus
}

/** Reference to external documentation or source.  */
export interface HtmlReference {
  /** Name of the reference source (e.g., "MDN Reference") */
  name: string

  /** URL of the reference */
  url: string
}

/** Indicates baseline support status across browsers.  */
export interface HtmlStatus {
  /** Whether the feature is baseline (boolean or "high"/"low") */
  baseline?: boolean | "high" | "low" | string

  /** Date when low-level baseline was established */
  baseline_low_date?: string

  /** Date when high-level baseline was established */
  baseline_high_date?: string
}
