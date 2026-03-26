import { useReveal } from '../hooks/useReveal'

function SectionShell({ id, eyebrow, title, children, className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <section id={id} className="px-6 py-20">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-5xl ${visible ? 'revealed' : ''} ${className}`.trim()}
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
          {title}
        </h2>
        <div className="mt-8 text-[#6B7280]">{children}</div>
      </div>
    </section>
  )
}

export default SectionShell

