import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Edit3,
  FileText,
  Filter,
  Mic,
  MoreHorizontal,
  Play,
  Plus,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Square,
  Star,
  Timer,
  Trash2,
  Users,
  Video,
  Volume2,
} from "lucide-react";

import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { Progress } from "./components/ui/progress";
import { Textarea } from "./components/ui/textarea";

type ScreenShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  aside?: ReactNode;
};

const brand = {
  purple: "#A100FF",
  purpleDark: "#420073",
  purpleHover: "#7400CC",
  purpleSoft: "#F0E8FF",
  cyan: "#00C8FF",
  pink: "#FF00C8",
  success: "#00A87A",
  warning: "#CC9A00",
  error: "#CC0000",
};

export type MockupScreen = {
  id: string;
  flow: "Candidato" | "Administrador";
  label: string;
  component: React.ComponentType;
};

function ScreenShell({ eyebrow, title, description, children, aside }: ScreenShellProps) {
  return (
    <section className="grid min-h-[720px] grid-cols-1 bg-[#FAFAFA] lg:grid-cols-[1fr_340px]">
      <main className="p-6 md:p-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 border-b border-[#E0E0E0] pb-6">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#A100FF]">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-1.2px] text-black md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#202020]">{description}</p>
          </div>
          {children}
        </div>
      </main>
      <aside className="border-l border-[#E0E0E0] bg-white p-6 md:p-8">{aside ?? <InterviewRail />}</aside>
    </section>
  );
}

function BrandButton({ children, className = "", variant = "primary" }: { children: ReactNode; className?: string; variant?: "primary" | "secondary" | "danger" | "ghost" }) {
  const variants = {
    primary: "border-[#A100FF] bg-[#A100FF] text-white hover:bg-[#7400CC] hover:border-[#7400CC]",
    secondary: "border-[#A100FF] bg-transparent text-[#A100FF] hover:bg-[#F5EEFF]",
    danger: "border-[#CC0000] bg-[#CC0000] text-white hover:bg-[#a50000]",
    ghost: "border-transparent bg-transparent text-[#A100FF] hover:bg-[#F5EEFF]",
  };

  return (
    <Button className={`rounded-none border px-6 py-5 transition-colors ${variants[variant]} ${className}`}>{children}</Button>
  );
}

function SharpCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <Card className={`rounded-none border-[#E0E0E0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] ${className}`}>{children}</Card>;
}

function StatusBadge({ children, tone = "new" }: { children: ReactNode; tone?: "new" | "success" | "warning" | "error" | "cyan" | "muted" }) {
  const colors = {
    new: "bg-[#F0E8FF] text-[#A100FF]",
    success: "bg-[#00A87A]/10 text-[#00A87A]",
    warning: "bg-[#CC9A00]/10 text-[#CC9A00]",
    error: "bg-[#CC0000]/10 text-[#CC0000]",
    cyan: "bg-[#00C8FF]/10 text-[#0088CC]",
    muted: "bg-[#999999]/10 text-[#666666]",
  };
  return <Badge className={`rounded-full border-transparent ${colors[tone]}`}>{children}</Badge>;
}

function InterviewRail() {
  return (
    <div className="sticky top-8 space-y-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#999]">Mockup kit</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.48px] text-black">InterviewOS</h2>
      </div>
      <div className="space-y-3 border-y border-[#E0E0E0] py-5">
        {[
          ["Duración", "38 min"],
          ["Preguntas", "7"],
          ["Formato", "Video async"],
        ].map(([label, value]) => (
          <div className="flex items-center justify-between" key={label}>
            <span className="text-sm text-[#666]">{label}</span>
            <span className="font-mono text-sm font-semibold text-[#A100FF]">{value}</span>
          </div>
        ))}
      </div>
      <div className="border-l-4 border-[#C2A3FF] bg-[#F0E8FF] p-4">
        <p className="text-sm leading-6 text-[#202020]">
          El prototipo usa componentes del resource sheet, geometría sharp y jerarquía Inter / Roboto Mono.
        </p>
      </div>
    </div>
  );
}

function Stepper({ active }: { active: number }) {
  const steps = ["Legal", "Prep", "Equipo", "Inicio", "Lectura", "Grabación", "Enviado"];
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex min-w-[720px] items-center">
        {steps.map((step, index) => (
          <div className="flex flex-1 items-center" key={step}>
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                  index < active
                    ? "border-[#A100FF] bg-[#A100FF] text-white"
                    : index === active
                      ? "border-[#A100FF] bg-white text-[#A100FF]"
                      : "border-[#E0E0E0] bg-white text-[#999]"
                }`}
              >
                {index < active ? <Check className="h-4 w-4" /> : index + 1}
              </span>
              <span className={`text-sm ${index === active ? "font-semibold text-[#A100FF]" : "text-[#666]"}`}>{step}</span>
            </div>
            {index < steps.length - 1 && <div className={`mx-3 h-px flex-1 ${index < active ? "bg-[#A100FF]" : "bg-[#E0E0E0]"}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TermsScreen() {
  return (
    <ScreenShell eyebrow="Candidato · Paso 01" title="Antes de comenzar, revisá y aceptá los términos" description="Validamos consentimiento, privacidad y condiciones del proceso antes de habilitar la entrevista asincrónica.">
      <Stepper active={0} />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <SharpCard>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Acuerdo de privacidad y uso de datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-[#202020]">
            <div className="h-64 overflow-hidden border border-[#E0E0E0] bg-[#FAFAFA] p-5">
              <p className="text-sm leading-7">
                Autorizo la grabación de audio y video para evaluación técnica y cultural. El material será accedido únicamente por el equipo de contratación y se conservará por el período definido por la política de privacidad.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "No se compartirá el video con terceros sin autorización.",
                  "Puedo solicitar eliminación o corrección de mis datos.",
                  "La evaluación combina criterios técnicos y habilidades blandas.",
                ].map((item) => (
                  <div className="flex items-start gap-3" key={item}>
                    <ShieldCheck className="mt-1 h-4 w-4 text-[#A100FF]" />
                    <span className="text-sm leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-3 border border-[#E0E0E0] p-4">
              <Checkbox className="rounded-none border-[#A100FF] data-[state=checked]:bg-[#A100FF]" />
              <span className="text-sm text-[#202020]">Acepto términos del servicio y política de privacidad.</span>
            </label>
            <div className="flex flex-wrap gap-3">
              <BrandButton>Continuar a instrucciones <ArrowRight className="h-4 w-4" /></BrandButton>
              <BrandButton variant="secondary">Descargar PDF</BrandButton>
            </div>
          </CardContent>
        </SharpCard>
        <SharpCard className="bg-gradient-to-br from-[#E6DCFF] to-[#C2A3FF]">
          <CardContent className="p-6">
            <Sparkles className="mb-8 h-10 w-10 text-[#420073]" />
            <h3 className="text-2xl font-semibold text-[#1E0040]">Tu entrevista está protegida</h3>
            <p className="mt-4 text-sm leading-6 text-[#420073]">Cifrado, acceso limitado y trazabilidad completa para el equipo evaluador.</p>
          </CardContent>
        </SharpCard>
      </div>
    </ScreenShell>
  );
}

export function InstructionsScreen() {
  const blocks = [
    [Code2, "Técnica", "4 preguntas · JS, React y arquitectura", "18 min"],
    [Users, "Soft skills", "3 preguntas · comunicación y criterio", "12 min"],
    [Video, "Entrega", "Respuestas en video 16:9", "8 min"],
  ] as const;

  return (
    <ScreenShell eyebrow="Candidato · Paso 02" title="Prepará tu entorno para una entrevista clara" description="Mostramos tiempos, estructura y requisitos técnicos para reducir fricción antes del cronómetro.">
      <Stepper active={1} />
      <div className="grid gap-6 md:grid-cols-3">
        {blocks.map(([Icon, title, text, time]) => (
          <SharpCard key={title}>
            <CardContent className="p-6">
              <Icon className="h-9 w-9 text-[#A100FF]" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#666]">{text}</p>
              <p className="mt-6 font-mono text-lg font-semibold text-[#A100FF]">{time}</p>
            </CardContent>
          </SharpCard>
        ))}
      </div>
      <SharpCard className="mt-6">
        <CardContent className="grid gap-6 p-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-xl font-semibold">Checklist de calidad</h3>
            <div className="mt-4 space-y-3">
              {["Lugar silencioso y bien iluminado", "Conexión estable", "Auriculares recomendados", "Documento de identidad opcional"].map((item) => (
                <div className="flex items-center gap-3" key={item}>
                  <CheckCircle2 className="h-5 w-5 text-[#00A87A]" />
                  <span className="text-sm text-[#202020]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-[#A100FF] bg-[#F0E8FF] p-5">
            <p className="font-mono text-sm text-[#A100FF]">IMPORTANTE</p>
            <p className="mt-2 text-sm leading-7 text-[#202020]">Una vez iniciada la entrevista, el reloj continúa. Podés hacer un retake por pregunta antes de confirmar el envío.</p>
          </div>
        </CardContent>
      </SharpCard>
    </ScreenShell>
  );
}

export function EquipmentTestScreen() {
  return (
    <ScreenShell eyebrow="Candidato · Paso 03" title="Calibrá cámara y micrófono" description="Una verificación visual y de audio evita problemas durante la grabación de respuestas.">
      <Stepper active={2} />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <SharpCard>
          <CardContent className="p-0">
            <div className="aspect-video bg-[#1E0040] p-6 text-white">
              <div className="flex h-full flex-col justify-between border border-white/20 bg-[radial-gradient(circle_at_50%_30%,rgba(161,0,255,.45),rgba(30,0,64,.9))] p-5">
                <div className="flex justify-between">
                  <StatusBadge tone="success">Cámara activa</StatusBadge>
                  <Camera className="h-5 w-5 text-[#C2A3FF]" />
                </div>
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#A100FF] text-4xl font-semibold">MR</div>
                <p className="font-mono text-xs text-[#C2A3FF]">Preview 1280×720 · 30 fps</p>
              </div>
            </div>
          </CardContent>
        </SharpCard>
        <div className="space-y-6">
          <SharpCard>
            <CardContent className="p-6">
              <div className="flex items-center justify-between"><span className="font-semibold">Micrófono</span><Mic className="text-[#A100FF]" /></div>
              <div className="mt-5 space-y-2">
                {[72, 84, 61, 90, 77].map((value, i) => <Progress key={i} value={value} className="h-2 rounded-full bg-[#F3F4F6] [&>div]:rounded-full [&>div]:bg-[#A100FF]" />)}
              </div>
              <p className="mt-4 text-sm text-[#666]">Nivel óptimo detectado.</p>
            </CardContent>
          </SharpCard>
          <SharpCard>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center justify-between"><span>Permisos del navegador</span><StatusBadge tone="success">OK</StatusBadge></div>
              <div className="flex items-center justify-between"><span>Conexión</span><StatusBadge tone="success">28 Mbps</StatusBadge></div>
              <div className="flex items-center justify-between"><span>Ruido ambiente</span><StatusBadge tone="warning">Medio</StatusBadge></div>
              <BrandButton className="w-full">Guardar configuración</BrandButton>
            </CardContent>
          </SharpCard>
        </div>
      </div>
    </ScreenShell>
  );
}

export function ConfirmStartScreen() {
  return (
    <ScreenShell eyebrow="Candidato · Paso 04" title="Última revisión antes de iniciar" description="Resumen del examen y punto de no retorno antes de activar el cronómetro general.">
      <Stepper active={3} />
      <div className="grid gap-6 md:grid-cols-3">
        {[[Clock, "38 min", "Duración estimada"], [FileText, "7", "Preguntas"], [RotateCcw, "1", "Retake por pregunta"]].map(([Icon, value, label]) => (
          <SharpCard key={label as string}>
            <CardContent className="p-6 text-center">
              <Icon className="mx-auto h-8 w-8 text-[#A100FF]" />
              <p className="mt-4 font-mono text-4xl font-semibold text-[#A100FF]">{value as string}</p>
              <p className="mt-2 text-sm text-[#666]">{label as string}</p>
            </CardContent>
          </SharpCard>
        ))}
      </div>
      <SharpCard className="mt-6 border-[#A100FF]">
        <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">¿Listo para empezar?</h3>
            <p className="mt-2 text-sm leading-6 text-[#666]">Al presionar iniciar se bloquea la navegación y comienza la primera pregunta.</p>
          </div>
          <BrandButton className="min-w-48">Iniciar entrevista <Play className="h-4 w-4" /></BrandButton>
        </CardContent>
      </SharpCard>
    </ScreenShell>
  );
}

export function QuestionReadingScreen() {
  return (
    <ScreenShell eyebrow="Candidato · Pregunta 02/07" title="Tenés 15 segundos para pensar" description="El enunciado se presenta antes de activar la cámara para permitir una respuesta estructurada.">
      <Stepper active={4} />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <SharpCard className="bg-[#420073] text-white">
          <CardContent className="p-6 text-center">
            <Timer className="mx-auto h-9 w-9 text-[#C2A3FF]" />
            <p className="mt-6 font-mono text-6xl font-semibold">00:15</p>
            <p className="mt-2 text-sm text-[#E6DCFF]">Lectura previa</p>
          </CardContent>
        </SharpCard>
        <SharpCard>
          <CardContent className="p-8">
            <StatusBadge>JavaScript avanzado</StatusBadge>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.48px]">Explicá el concepto de closure en JavaScript y compartí un caso real donde lo usarías.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Definición", "Ejemplo práctico", "Trade-offs"].map((hint) => <div className="border border-[#E0E0E0] bg-[#FAFAFA] p-4 text-sm text-[#666]" key={hint}>{hint}</div>)}
            </div>
          </CardContent>
        </SharpCard>
      </div>
    </ScreenShell>
  );
}

export function AnswerRecordingScreen() {
  return (
    <ScreenShell eyebrow="Candidato · Grabación" title="Respondé mirando a cámara" description="Interfaz de captura 16:9 con controles claros, pregunta fija y tiempo restante prominente." aside={<RecordingAside />}>
      <Stepper active={5} />
      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <SharpCard>
          <CardContent className="p-0">
            <div className="aspect-video bg-black p-4">
              <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_50%_25%,rgba(255,0,200,.28),rgba(0,0,0,.92))] p-5 text-white">
                <div className="flex justify-between"><StatusBadge tone="error">REC</StatusBadge><span className="font-mono text-2xl text-white">02:18</span></div>
                <div className="mx-auto h-36 w-36 rounded-full border-4 border-[#A100FF] bg-[#420073]" />
                <div className="flex items-center justify-between"><span className="font-mono text-xs text-[#C2A3FF]">16:9 · 1080p</span><Volume2 className="text-[#00C8FF]" /></div>
              </div>
            </div>
          </CardContent>
        </SharpCard>
        <SharpCard>
          <CardContent className="space-y-5 p-6">
            <StatusBadge>Pregunta actual</StatusBadge>
            <h3 className="text-xl font-semibold leading-7">Explicá el concepto de closure en JavaScript y compartí un caso real.</h3>
            <Progress value={54} className="h-2 rounded-full bg-[#F3F4F6] [&>div]:rounded-full [&>div]:bg-[#A100FF]" />
            <div className="grid grid-cols-2 gap-3">
              <BrandButton variant="secondary"><RotateCcw className="h-4 w-4" /> Retake</BrandButton>
              <BrandButton><Square className="h-4 w-4" /> Finalizar</BrandButton>
            </div>
          </CardContent>
        </SharpCard>
      </div>
    </ScreenShell>
  );
}

function RecordingAside() {
  return (
    <div className="sticky top-8 space-y-6">
      <div className="bg-[#420073] p-6 text-white">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C2A3FF]">Tiempo restante</p>
        <p className="mt-4 font-mono text-5xl font-semibold">02:18</p>
      </div>
      <SharpCard>
        <CardContent className="space-y-4 p-5">
          <div className="flex justify-between"><span className="text-sm text-[#666]">Ruido</span><StatusBadge tone="success">Bajo</StatusBadge></div>
          <div className="flex justify-between"><span className="text-sm text-[#666]">Mirada</span><StatusBadge tone="warning">Atención</StatusBadge></div>
          <div className="flex justify-between"><span className="text-sm text-[#666]">Upload buffer</span><span className="font-mono text-[#A100FF]">82%</span></div>
        </CardContent>
      </SharpCard>
    </div>
  );
}

export function CompletionScreen() {
  return (
    <ScreenShell eyebrow="Candidato · Final" title="Entrevista enviada correctamente" description="Confirmación final de carga exitosa y próximos pasos para el candidato.">
      <Stepper active={6} />
      <SharpCard className="mx-auto max-w-2xl text-center">
        <CardContent className="p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00A87A]/10"><CheckCircle2 className="h-10 w-10 text-[#00A87A]" /></div>
          <h2 className="mt-6 text-3xl font-semibold">Gracias, Martina</h2>
          <p className="mt-3 text-[#666]">Tu entrevista fue enviada al equipo de revisión. Te notificaremos cuando haya una actualización del proceso.</p>
          <div className="mt-8 grid gap-3 border-t border-[#E0E0E0] pt-6 md:grid-cols-3">
            {[["ID", "INT-2408"], ["Carga", "100%"], ["Estado", "Recibida"]].map(([label, value]) => <div key={label}><p className="text-xs text-[#999]">{label}</p><p className="font-mono font-semibold text-[#A100FF]">{value}</p></div>)}
          </div>
        </CardContent>
      </SharpCard>
    </ScreenShell>
  );
}

function AdminShell({ children, title, description }: { children: ReactNode; title: string; description: string }) {
  return (
    <section className="grid min-h-[720px] grid-cols-[130px_1fr] bg-[#FAFAFA]">
      <nav className="bg-[#420073] p-4 text-white">
        <div className="mb-10 font-mono text-xl font-semibold">IO</div>
        {[[BarChart3, "Panel"], [Users, "Talento"], [FileText, "Preguntas"], [Star, "Scores"]].map(([Icon, label]) => (
          <button className="mb-2 flex w-full items-center gap-2 px-2 py-3 text-left text-sm text-white transition-colors hover:bg-white/10" key={label as string}>
            <Icon className="h-4 w-4" /> {label as string}
          </button>
        ))}
      </nav>
      <main className="p-6 md:p-10">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#E0E0E0] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#A100FF]">Entrevistador / Administrador</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-1.2px] text-black">{title}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-[#202020]">{description}</p>
          </div>
          <BrandButton><Plus className="h-4 w-4" /> Nueva entrevista</BrandButton>
        </div>
        {children}
      </main>
    </section>
  );
}

export function DashboardScreen() {
  return (
    <AdminShell title="Dashboard general" description="Métricas clave, candidatos destacados y rendimiento por pregunta en una vista ejecutiva.">
      <div className="grid gap-6 md:grid-cols-3">
        {[["Entrevistas totales", "184", "+12%"], ["Revisiones pendientes", "27", "Hoy"], ["Puntaje promedio", "82", "/100"]].map(([label, value, meta]) => (
          <SharpCard key={label}>
            <CardContent className="p-6"><p className="text-sm text-[#666]">{label}</p><div className="mt-4 flex items-end justify-between"><p className="font-mono text-4xl font-semibold text-[#A100FF]">{value}</p><StatusBadge tone="cyan">{meta}</StatusBadge></div></CardContent>
          </SharpCard>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SharpCard>
          <CardHeader><CardTitle>Top 3 candidatos</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {["Martina Ríos", "Lucas Chen", "Ana Gómez"].map((name, index) => <div className="flex items-center justify-between border border-[#E0E0E0] p-4" key={name}><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A100FF] text-white">{index + 1}</span><span>{name}</span></div><span className="font-mono font-semibold text-[#A100FF]">{94 - index * 3}</span></div>)}
          </CardContent>
        </SharpCard>
        <SharpCard>
          <CardHeader><CardTitle>Rendimiento por pregunta</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            {[["Closures JS", 88], ["React state", 74], ["Comunicación", 91], ["Arquitectura", 68]].map(([label, value]) => <div key={label as string}><div className="mb-2 flex justify-between text-sm"><span>{label as string}</span><span className="font-mono text-[#A100FF]">{value as number}%</span></div><Progress value={value as number} className="h-2 rounded-full bg-[#F3F4F6] [&>div]:rounded-full [&>div]:bg-[#A100FF]" /></div>)}
          </CardContent>
        </SharpCard>
      </div>
    </AdminShell>
  );
}

export function CandidateListScreen() {
  const rows = [
    ["Martina Ríos", "Frontend Senior", "React", "Activa", "94"],
    ["Lucas Chen", "Fullstack", "Node", "Pendiente", "91"],
    ["Ana Gómez", "Frontend Mid", "CSS", "Activa", "88"],
    ["Sofía Vega", "Backend", "APIs", "Error", "--"],
  ];
  return (
    <AdminShell title="Lista de candidatos" description="Tabla centralizada con búsqueda, filtros por categoría o dificultad y estado de postulación.">
      <SharpCard>
        <CardContent className="p-0">
          <div className="flex flex-col gap-3 border-b border-[#E0E0E0] p-5 md:flex-row">
            <div className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-[#999]" /><Input className="rounded-none border-[#E0E0E0] pl-10 focus-visible:ring-[#A100FF]" placeholder="Buscar candidato" /></div>
            <BrandButton variant="secondary"><Filter className="h-4 w-4" /> Categoría</BrandButton>
            <BrandButton variant="secondary">Dificultad</BrandButton>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F9FAFB] text-xs uppercase tracking-wide text-[#6B7280]"><tr>{["Candidato", "Rol", "Categoría", "Estado", "Score", ""].map((h) => <th className="border-b border-[#F3F4F6] px-5 py-4" key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {rows.map((row, index) => <tr className={index === 1 ? "bg-[#F5EEFF]" : index % 2 ? "bg-[#FAFAFA]" : "bg-white"} key={row[0]}><td className="px-5 py-4 font-semibold">{row[0]}</td><td className="px-5 py-4 text-[#666]">{row[1]}</td><td className="px-5 py-4"><StatusBadge>{row[2]}</StatusBadge></td><td className="px-5 py-4"><StatusBadge tone={row[3] === "Activa" ? "success" : row[3] === "Error" ? "error" : "warning"}>{row[3]}</StatusBadge></td><td className="px-5 py-4 font-mono text-[#A100FF]">{row[4]}</td><td className="px-5 py-4"><MoreHorizontal className="h-4 w-4 text-[#666]" /></td></tr>)}
            </tbody>
          </table>
        </CardContent>
      </SharpCard>
    </AdminShell>
  );
}

export function CandidateDetailScreen() {
  return (
    <AdminShell title="Detalle de candidato" description="Reproductor de respuestas, evaluación por criterios y notas privadas del reclutador.">
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <SharpCard>
          <CardContent className="p-0"><div className="aspect-video bg-[#1E0040] p-5 text-white"><div className="flex h-full items-center justify-center border border-white/20"><Play className="h-16 w-16 text-[#C2A3FF]" /></div></div></CardContent>
        </SharpCard>
        <SharpCard>
          <CardHeader><CardTitle>Martina Ríos</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            {[["Técnica", 92], ["Claridad", 88], ["Resolución", 95], ["Cultura", 90]].map(([label, value]) => <div key={label as string}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><span className="font-mono text-[#A100FF]">{value}</span></div><Progress value={value as number} className="h-2 rounded-full bg-[#F3F4F6] [&>div]:rounded-full [&>div]:bg-[#A100FF]" /></div>)}
            <Textarea className="min-h-32 rounded-none border-[#E0E0E0] focus-visible:ring-[#A100FF]" placeholder="Notas del reclutador..." defaultValue="Excelente explicación de closures. Profundizar en testing durante entrevista final." />
            <BrandButton className="w-full">Guardar evaluación</BrandButton>
          </CardContent>
        </SharpCard>
      </div>
    </AdminShell>
  );
}

export function QuestionCrudScreen() {
  const questions = ["Explicá closures en JavaScript", "Diseñá un flujo de auth seguro", "Contanos un conflicto técnico resuelto"];
  return (
    <AdminShell title="Gestión de preguntas" description="CRUD del banco oficial para ajustar enunciados, límites de tiempo y categorías técnicas.">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SharpCard>
          <CardHeader><CardTitle>Nueva pregunta</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Input className="rounded-none border-[#E0E0E0] focus-visible:ring-[#A100FF]" placeholder="Título de pregunta" />
            <Textarea className="min-h-36 rounded-none border-[#E0E0E0] focus-visible:ring-[#A100FF]" placeholder="Enunciado completo" />
            <div className="grid grid-cols-2 gap-3"><Input className="rounded-none border-[#E0E0E0]" placeholder="Categoría" /><Input className="rounded-none border-[#E0E0E0]" placeholder="Tiempo límite" /></div>
            <BrandButton>Crear pregunta</BrandButton>
          </CardContent>
        </SharpCard>
        <SharpCard>
          <CardHeader><CardTitle>Banco oficial</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {questions.map((question, index) => <div className="grid grid-cols-[1fr_auto] gap-4 border border-[#E0E0E0] p-4" key={question}><div><p className="font-semibold">{question}</p><div className="mt-2 flex gap-2"><StatusBadge>{index === 0 ? "JavaScript" : index === 1 ? "Arquitectura" : "Soft skills"}</StatusBadge><StatusBadge tone="cyan">{index === 2 ? "90s" : "120s"}</StatusBadge></div></div><div className="flex gap-2"><BrandButton variant="secondary" className="px-3"><Edit3 className="h-4 w-4" /></BrandButton><BrandButton variant="danger" className="px-3"><Trash2 className="h-4 w-4" /></BrandButton></div></div>)}
          </CardContent>
        </SharpCard>
      </div>
    </AdminShell>
  );
}

export const screens: MockupScreen[] = [
  { id: "terms", flow: "Candidato", label: "Inicio (Términos)", component: TermsScreen },
  { id: "instructions", flow: "Candidato", label: "Instrucciones", component: InstructionsScreen },
  { id: "equipment", flow: "Candidato", label: "Prueba de Equipo", component: EquipmentTestScreen },
  { id: "confirm", flow: "Candidato", label: "Confirmar Inicio", component: ConfirmStartScreen },
  { id: "reading", flow: "Candidato", label: "Pregunta (Lectura)", component: QuestionReadingScreen },
  { id: "recording", flow: "Candidato", label: "Respuesta (Grabación)", component: AnswerRecordingScreen },
  { id: "completion", flow: "Candidato", label: "Finalización", component: CompletionScreen },
  { id: "dashboard", flow: "Administrador", label: "Dashboard General", component: DashboardScreen },
  { id: "candidates", flow: "Administrador", label: "Lista de Candidatos", component: CandidateListScreen },
  { id: "candidate-detail", flow: "Administrador", label: "Detalle de Candidato", component: CandidateDetailScreen },
  { id: "questions", flow: "Administrador", label: "Gestión de Preguntas", component: QuestionCrudScreen },
];

export { brand };
