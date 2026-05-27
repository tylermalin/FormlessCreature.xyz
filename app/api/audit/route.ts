import { NextResponse } from "next/server"
import { Resend } from "resend"
import { auditFormSchema, type AuditFormValues } from "@/lib/audit-schema"

export const runtime = "nodejs"

const TO_EMAIL = process.env.AUDIT_FORM_TO_EMAIL || "tyler@formlesscreature.xyz"
const FROM_EMAIL =
  process.env.AUDIT_FORM_FROM_EMAIL || "Formless Creature Audits <audits@formlesscreature.xyz>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function fmtList(arr: readonly string[] | string[] | undefined) {
  if (!arr || arr.length === 0) return "—"
  return arr.join(", ")
}

function fmtText(value: string | undefined) {
  if (!value || value.trim() === "") return "—"
  return value
}

function buildPlainText(data: AuditFormValues) {
  return [
    "AUDIT INTAKE — FORMLESS CREATURE",
    "",
    `From: ${data.fullName} <${data.email}>`,
    `Company: ${data.company} (${data.companyUrl})`,
    `Role: ${data.role}`,
    data.linkedin ? `LinkedIn: ${data.linkedin}` : null,
    "",
    "COMPANY",
    `Stage: ${data.stage}`,
    `Headcount: ${data.headcount}`,
    `Industry / vertical: ${data.industry}`,
    "",
    "THE WORK",
    `Practice areas: ${fmtList(data.practices)}`,
    `Service lines: ${fmtList(data.serviceLines)}`,
    "",
    "Business outcome / what success looks like:",
    data.businessOutcome,
    "",
    "What's currently in the way:",
    data.currentState,
    "",
    `Current tools / vendors / agencies: ${fmtText(data.currentTools)}`,
    `Regulated dimensions: ${fmtList(data.regulatedDimensions)}`,
    data.otherRegulated ? `Other regulated context: ${data.otherRegulated}` : null,
    "",
    "SCHEDULING",
    `Timeline: ${data.timeline}`,
    `Preferred call windows: ${fmtText(data.callWindows)}`,
    `Other stakeholders: ${fmtText(data.stakeholders)}`,
    "",
    "ANYTHING ELSE",
    fmtText(data.anythingElse),
    "",
    `— Submitted ${new Date().toISOString()}`,
  ]
    .filter((line) => line !== null)
    .join("\n")
}

function buildHtml(data: AuditFormValues) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#111;font-size:14px;line-height:1.55;">${value}</td></tr>`

  const block = (label: string, value: string) =>
    `<div style="margin:18px 0;"><div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#888;margin-bottom:6px;">${escapeHtml(label)}</div><div style="font-size:14px;line-height:1.55;color:#111;white-space:pre-wrap;">${escapeHtml(value)}</div></div>`

  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#fafafa;margin:0;padding:32px;">
<div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #eee;border-radius:12px;padding:32px;">
<div style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:8px;">Audit intake — Formless Creature</div>
<h1 style="font-size:24px;font-weight:400;color:#111;margin:0 0 24px 0;letter-spacing:-0.01em;">${escapeHtml(data.fullName)} · ${escapeHtml(data.company)}</h1>
<table style="border-collapse:collapse;width:100%;">
${row("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:#111;">${escapeHtml(data.email)}</a>`)}
${row("Role", escapeHtml(data.role))}
${row("Company URL", `<a href="${escapeHtml(data.companyUrl)}" style="color:#111;">${escapeHtml(data.companyUrl)}</a>`)}
${data.linkedin ? row("LinkedIn", `<a href="${escapeHtml(data.linkedin)}" style="color:#111;">${escapeHtml(data.linkedin)}</a>`) : ""}
${row("Stage", escapeHtml(data.stage))}
${row("Headcount", escapeHtml(data.headcount))}
${row("Industry", escapeHtml(data.industry))}
${row("Timeline", escapeHtml(data.timeline))}
${row("Practices", escapeHtml(fmtList(data.practices)))}
${data.serviceLines.length > 0 ? row("Service lines", escapeHtml(fmtList(data.serviceLines))) : ""}
${data.regulatedDimensions.length > 0 ? row("Regulated", escapeHtml(fmtList(data.regulatedDimensions))) : ""}
${data.otherRegulated ? row("Other regulated", escapeHtml(data.otherRegulated)) : ""}
</table>
<hr style="border:0;border-top:1px solid #eee;margin:24px 0;" />
${block("Business outcome / what success looks like", data.businessOutcome)}
${block("What's currently in the way", data.currentState)}
${data.currentTools ? block("Current tools / vendors / agencies", data.currentTools) : ""}
${data.callWindows ? block("Preferred call windows", data.callWindows) : ""}
${data.stakeholders ? block("Other stakeholders", data.stakeholders) : ""}
${data.anythingElse ? block("Anything else", data.anythingElse) : ""}
<div style="margin-top:32px;padding-top:16px;border-top:1px solid #eee;font-size:11px;color:#aaa;">Submitted ${escapeHtml(new Date().toISOString())}</div>
</div>
</body></html>`
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 }
    )
  }

  const parsed = auditFormSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  const data = parsed.data
  const plainText = buildPlainText(data)
  const subject = `Audit intake — ${data.company} (${data.fullName})`

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Fail-soft: log submission so it's visible in Vercel function logs even
    // before Resend is configured. Submission still succeeds for the client.
    console.log("[audit-intake] RESEND_API_KEY not set — submission logged below")
    console.log(`[audit-intake] Subject: ${subject}`)
    console.log(plainText)
    return NextResponse.json({ ok: true, delivery: "logged" })
  }

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject,
      text: plainText,
      html: buildHtml(data),
    })

    if (result.error) {
      console.error("[audit-intake] Resend error:", result.error)
      console.log(`[audit-intake] Subject (fallback log): ${subject}`)
      console.log(plainText)
      return NextResponse.json({ ok: true, delivery: "logged-after-error" })
    }

    return NextResponse.json({ ok: true, delivery: "emailed" })
  } catch (err) {
    console.error("[audit-intake] Send threw:", err)
    console.log(`[audit-intake] Subject (fallback log): ${subject}`)
    console.log(plainText)
    return NextResponse.json({ ok: true, delivery: "logged-after-throw" })
  }
}
