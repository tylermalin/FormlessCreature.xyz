import { z } from "zod"

export const PRACTICE_OPTIONS = [
  "Growth Consulting",
  "AI Integration",
  "Automation",
  "Not sure yet",
] as const

export const SERVICE_LINE_OPTIONS = [
  "Lifecycle Marketing",
  "Paid Acquisition",
  "Conversion Optimization",
  "Brand & Design",
  "Content & Creative",
  "Data & Analytics",
  "AI Strategy & Roadmapping",
  "Custom AI Development",
  "AI Governance & Compliance",
  "AI Product Enablement",
  "AI Operations",
  "Workflow Automation",
  "Custom Internal Tools",
  "API Integration & Orchestration",
  "Data Infrastructure",
  "Agent-Based Process Automation",
] as const

export const STAGE_OPTIONS = [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "Established / Profitable",
  "Bootstrapped / Other",
] as const

export const HEADCOUNT_OPTIONS = [
  "1-10",
  "11-50",
  "51-200",
  "201-1000",
  "1000+",
] as const

export const TIMELINE_OPTIONS = [
  "ASAP (within 30 days)",
  "1-3 months",
  "3-6 months",
  "Exploring, no rush",
] as const

export const REGULATED_OPTIONS = [
  "TCPA",
  "Sweepstakes / state gaming law",
  "EU AI Act",
  "CSRD / sustainability reporting",
  "GDPR / CCPA",
  "HIPAA",
  "SOC 2 / ISO 27001",
  "Financial services (SEC / FINRA / CFTC)",
  "None apply",
] as const

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine(
    (val) => !val || /^https?:\/\/.+\..+/.test(val),
    "Please use a full URL (include https://)"
  )

export const auditFormSchema = z.object({
  // Contact
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().min(1, "Company name is required"),
  role: z.string().trim().min(1, "Role / title is required"),
  companyUrl: z
    .string()
    .trim()
    .min(1, "Company URL is required")
    .refine(
      (val) => /^https?:\/\/.+\..+/.test(val),
      "Please use a full URL (include https://)"
    ),
  linkedin: optionalUrl,

  // Company
  stage: z.enum(STAGE_OPTIONS, {
    errorMap: () => ({ message: "Please select a stage" }),
  }),
  headcount: z.enum(HEADCOUNT_OPTIONS, {
    errorMap: () => ({ message: "Please select headcount" }),
  }),
  industry: z.string().trim().min(1, "Industry / vertical is required"),

  // The work
  practices: z
    .array(z.enum(PRACTICE_OPTIONS))
    .min(1, "Pick at least one practice area"),
  serviceLines: z.array(z.enum(SERVICE_LINE_OPTIONS)).default([]),
  businessOutcome: z
    .string()
    .trim()
    .min(20, "A sentence or two helps us prep — what does success look like?"),
  currentState: z
    .string()
    .trim()
    .min(20, "A sentence or two helps us prep — what's currently in the way?"),
  currentTools: z.string().trim().default(""),
  regulatedDimensions: z.array(z.enum(REGULATED_OPTIONS)).default([]),
  otherRegulated: z.string().trim().default(""),

  // Scheduling
  timeline: z.enum(TIMELINE_OPTIONS, {
    errorMap: () => ({ message: "Please select a timeline" }),
  }),
  callWindows: z.string().trim().default(""),
  stakeholders: z.string().trim().default(""),

  // Other
  anythingElse: z.string().trim().default(""),
})

export type AuditFormValues = z.infer<typeof auditFormSchema>

export const auditFormDefaults: AuditFormValues = {
  fullName: "",
  email: "",
  company: "",
  role: "",
  companyUrl: "",
  linkedin: "",
  stage: undefined as unknown as AuditFormValues["stage"],
  headcount: undefined as unknown as AuditFormValues["headcount"],
  industry: "",
  practices: [],
  serviceLines: [],
  businessOutcome: "",
  currentState: "",
  currentTools: "",
  regulatedDimensions: [],
  otherRegulated: "",
  timeline: undefined as unknown as AuditFormValues["timeline"],
  callWindows: "",
  stakeholders: "",
  anythingElse: "",
}
