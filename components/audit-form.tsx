"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { ArrowRight, AlertCircle } from "lucide-react"

import {
  auditFormSchema,
  auditFormDefaults,
  PRACTICE_OPTIONS,
  SERVICE_LINE_OPTIONS,
  STAGE_OPTIONS,
  HEADCOUNT_OPTIONS,
  TIMELINE_OPTIONS,
  REGULATED_OPTIONS,
  type AuditFormValues,
} from "@/lib/audit-schema"

const inputBase =
  "w-full bg-[#0a0a0a] border border-border/40 rounded-lg px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#bbdef2]/60 transition-colors"

const labelBase =
  "block text-[13px] font-mono uppercase tracking-wider text-muted-foreground mb-2"

const requiredMark = (
  <span className="text-[#bbdef2] ml-1" aria-hidden="true">
    *
  </span>
)

const errorClass = "text-[12px] text-[#ff6467] mt-2 flex items-center gap-1.5"

function Section({
  num,
  title,
  description,
  children,
}: {
  num: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-border/20 pt-12 pb-2">
      <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
            {num}
          </div>
          <div className="text-2xl font-light tracking-tight text-foreground">
            {title}
          </div>
          {description ? (
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  )
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-[13px] px-3.5 py-2 rounded-full border transition-all ${
        selected
          ? "bg-gradient-to-r from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] text-background border-transparent font-medium"
          : "bg-[#0a0a0a] text-[#e5e5e5] border-border/40 hover:border-border/70"
      }`}
      aria-pressed={selected}
    >
      {selected ? <span aria-hidden="true">✓</span> : null}
      {label}
    </button>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className={errorClass}>
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {message}
    </p>
  )
}

export function AuditForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: auditFormDefaults,
    mode: "onBlur",
  })

  const practices = watch("practices") || []
  const serviceLines = watch("serviceLines") || []
  const regulatedDimensions = watch("regulatedDimensions") || []

  const toggle = <T extends string>(
    field: "practices" | "serviceLines" | "regulatedDimensions",
    current: T[],
    value: T
  ) => {
    if (current.includes(value)) {
      setValue(
        field,
        current.filter((v) => v !== value) as unknown as AuditFormValues[typeof field],
        { shouldValidate: true }
      )
    } else {
      setValue(
        field,
        [...current, value] as unknown as AuditFormValues[typeof field],
        { shouldValidate: true }
      )
    }
  }

  const onSubmit = async (values: AuditFormValues) => {
    setServerError(null)
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        setServerError(
          body?.error ||
            "Submission failed. Please email tyler@formlesscreature.xyz directly."
        )
        return
      }
      router.push("/audit/thank-you")
    } catch {
      setServerError(
        "Network error. Please email tyler@formlesscreature.xyz directly."
      )
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      noValidate
    >
      {/* ===== SECTION 01 — CONTACT ===== */}
      <Section num="Section 01" title="Contact">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelBase} htmlFor="fullName">
              Full name{requiredMark}
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className={inputBase}
              {...register("fullName")}
            />
            <FieldError message={errors.fullName?.message} />
          </div>
          <div>
            <label className={labelBase} htmlFor="email">
              Work email{requiredMark}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputBase}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelBase} htmlFor="company">
              Company name{requiredMark}
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              className={inputBase}
              {...register("company")}
            />
            <FieldError message={errors.company?.message} />
          </div>
          <div>
            <label className={labelBase} htmlFor="role">
              Your role / title{requiredMark}
            </label>
            <input
              id="role"
              type="text"
              autoComplete="organization-title"
              className={inputBase}
              {...register("role")}
            />
            <FieldError message={errors.role?.message} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelBase} htmlFor="companyUrl">
              Company URL{requiredMark}
            </label>
            <input
              id="companyUrl"
              type="url"
              placeholder="https://example.com"
              className={inputBase}
              {...register("companyUrl")}
            />
            <FieldError message={errors.companyUrl?.message} />
          </div>
          <div>
            <label className={labelBase} htmlFor="linkedin">
              LinkedIn (optional)
            </label>
            <input
              id="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/..."
              className={inputBase}
              {...register("linkedin")}
            />
            <FieldError message={errors.linkedin?.message} />
          </div>
        </div>
      </Section>

      {/* ===== SECTION 02 — COMPANY ===== */}
      <Section num="Section 02" title="Company">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelBase} htmlFor="stage">
              Stage{requiredMark}
            </label>
            <select
              id="stage"
              className={`${inputBase} appearance-none`}
              defaultValue=""
              {...register("stage")}
            >
              <option value="" disabled>
                Select stage
              </option>
              {STAGE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FieldError message={errors.stage?.message} />
          </div>
          <div>
            <label className={labelBase} htmlFor="headcount">
              Headcount{requiredMark}
            </label>
            <select
              id="headcount"
              className={`${inputBase} appearance-none`}
              defaultValue=""
              {...register("headcount")}
            >
              <option value="" disabled>
                Select headcount
              </option>
              {HEADCOUNT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FieldError message={errors.headcount?.message} />
          </div>
        </div>

        <div>
          <label className={labelBase} htmlFor="industry">
            Industry / vertical{requiredMark}
          </label>
          <input
            id="industry"
            type="text"
            placeholder="e.g. fintech, climate hardware, B2B SaaS, prediction markets"
            className={inputBase}
            {...register("industry")}
          />
          <FieldError message={errors.industry?.message} />
        </div>
      </Section>

      {/* ===== SECTION 03 — THE WORK ===== */}
      <Section
        num="Section 03"
        title="The work"
        description="Help us understand what you're trying to do and what's in your way. The more specific you are here, the more useful the audit will be."
      >
        <div>
          <label className={labelBase}>
            Practice areas you're exploring{requiredMark}
          </label>
          <Controller
            control={control}
            name="practices"
            render={() => (
              <div className="flex flex-wrap gap-2">
                {PRACTICE_OPTIONS.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    selected={practices.includes(opt)}
                    onClick={() => toggle("practices", practices, opt)}
                  />
                ))}
              </div>
            )}
          />
          <FieldError message={errors.practices?.message as string | undefined} />
        </div>

        <div>
          <label className={labelBase}>
            Specific service lines (optional)
          </label>
          <p className="text-[13px] text-muted-foreground -mt-1 mb-3 leading-relaxed">
            Tap any that already feel relevant. Leave all unselected if you're
            still scoping.
          </p>
          <Controller
            control={control}
            name="serviceLines"
            render={() => (
              <div className="flex flex-wrap gap-2">
                {SERVICE_LINE_OPTIONS.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    selected={serviceLines.includes(opt)}
                    onClick={() => toggle("serviceLines", serviceLines, opt)}
                  />
                ))}
              </div>
            )}
          />
        </div>

        <div>
          <label className={labelBase} htmlFor="businessOutcome">
            What does success look like in the next 6 months?{requiredMark}
          </label>
          <textarea
            id="businessOutcome"
            rows={4}
            placeholder="The outcome you actually need — not the activity. e.g. cut paid CAC by 30% while holding LTV, ship an AI feature into the product, or stand up SOC 2 in 90 days."
            className={`${inputBase} resize-y min-h-[112px]`}
            {...register("businessOutcome")}
          />
          <FieldError message={errors.businessOutcome?.message} />
        </div>

        <div>
          <label className={labelBase} htmlFor="currentState">
            What's currently in your way?{requiredMark}
          </label>
          <textarea
            id="currentState"
            rows={4}
            placeholder="What's broken, missing, stuck, or under-leveraged. Honest is better than polished — we'd rather hear the real thing."
            className={`${inputBase} resize-y min-h-[112px]`}
            {...register("currentState")}
          />
          <FieldError message={errors.currentState?.message} />
        </div>

        <div>
          <label className={labelBase} htmlFor="currentTools">
            Current tools, vendors, or agencies involved (optional)
          </label>
          <textarea
            id="currentTools"
            rows={3}
            placeholder="ESP, CDP, ad platforms, AI tooling, internal eng, agencies on retainer — whatever's already in the picture."
            className={`${inputBase} resize-y min-h-[88px]`}
            {...register("currentTools")}
          />
        </div>

        <div>
          <label className={labelBase}>
            Regulated or compliance dimensions (optional)
          </label>
          <p className="text-[13px] text-muted-foreground -mt-1 mb-3 leading-relaxed">
            Anything that meaningfully shapes how the work has to be built.
          </p>
          <Controller
            control={control}
            name="regulatedDimensions"
            render={() => (
              <div className="flex flex-wrap gap-2">
                {REGULATED_OPTIONS.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    selected={regulatedDimensions.includes(opt)}
                    onClick={() =>
                      toggle("regulatedDimensions", regulatedDimensions, opt)
                    }
                  />
                ))}
              </div>
            )}
          />
          <div className="mt-4">
            <input
              type="text"
              placeholder="Other regulated context (optional)"
              className={inputBase}
              {...register("otherRegulated")}
            />
          </div>
        </div>
      </Section>

      {/* ===== SECTION 04 — SCHEDULING ===== */}
      <Section num="Section 04" title="Scheduling">
        <div>
          <label className={labelBase} htmlFor="timeline">
            Ideal timeline to start{requiredMark}
          </label>
          <select
            id="timeline"
            className={`${inputBase} appearance-none`}
            defaultValue=""
            {...register("timeline")}
          >
            <option value="" disabled>
              Select timeline
            </option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <FieldError message={errors.timeline?.message} />
        </div>

        <div>
          <label className={labelBase} htmlFor="callWindows">
            Preferred call windows (optional)
          </label>
          <input
            id="callWindows"
            type="text"
            placeholder="e.g. Tue/Thu mornings ET, or any afternoon next week"
            className={inputBase}
            {...register("callWindows")}
          />
        </div>

        <div>
          <label className={labelBase} htmlFor="stakeholders">
            Other stakeholders who should be on the call (optional)
          </label>
          <input
            id="stakeholders"
            type="text"
            placeholder="Names and roles. We'll loop them in on the calendar invite."
            className={inputBase}
            {...register("stakeholders")}
          />
        </div>
      </Section>

      {/* ===== SECTION 05 — ANYTHING ELSE ===== */}
      <Section num="Section 05" title="Anything else">
        <div>
          <label className={labelBase} htmlFor="anythingElse">
            Context we should have before the audit (optional)
          </label>
          <textarea
            id="anythingElse"
            rows={3}
            placeholder="NDA preferences, vendor lock-ins to navigate, board context, anything that would change how we prep."
            className={`${inputBase} resize-y min-h-[88px]`}
            {...register("anythingElse")}
          />
        </div>
      </Section>

      {/* ===== SUBMIT ===== */}
      <div className="border-t border-border/20 pt-12">
        {serverError ? (
          <div className="mb-6 p-4 border border-[#ff6467]/40 bg-[#ff6467]/5 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#ff6467] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#e5e5e5]">{serverError}</p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-2xl font-medium hover:bg-transparent hover:text-foreground border border-foreground transition-all disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? "Sending…" : "Submit audit request"}
            {!isSubmitting && (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
          <p className="text-sm text-muted-foreground">
            We respond within 5 business days. No obligation either way.
          </p>
        </div>
      </div>
    </motion.form>
  )
}
