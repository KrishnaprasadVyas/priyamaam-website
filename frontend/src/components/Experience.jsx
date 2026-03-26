import { Briefcase } from 'lucide-react'
import SectionShell from './SectionShell'

function Experience({ items }) {
  return (
    <SectionShell id="experience" eyebrow="Experience" title="Academic Roles and Leadership">
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.role}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex items-start gap-3">
              <Briefcase size={20} className="mt-1 text-blue-700 dark:text-blue-300" />
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {item.details}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default Experience

