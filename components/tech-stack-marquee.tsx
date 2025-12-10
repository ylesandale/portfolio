'use client'

type TechStackMarqueeProps = {
  items: string[]
  animationClass: 'animate-marquee' | 'animate-marquee-reverse'
  keyPrefix: string
}

export const TechStackMarquee = ({
  items,
  animationClass,
  keyPrefix,
}: TechStackMarqueeProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 pointer-events-none gradient-fade-left" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 pointer-events-none gradient-fade-right" />
      <div className={`flex gap-4 ${animationClass} relative z-0`}>
        {items.map((tech, index) => (
          <div
            key={`${keyPrefix}-${tech}-${index}`}
            className="text-center hover:shadow-md transition-shadow shrink-0 min-w-[140px] px-4 py-3 bg-card border rounded-xl"
          >
            <p className="font-medium text-sm sm:text-base whitespace-nowrap">
              {tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
