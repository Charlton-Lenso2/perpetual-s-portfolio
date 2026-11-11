export default function SectionHeading({ tag, children }) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium">
        {tag}
      </span>
      <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl">
        {children}
      </h2>
    </div>
  )
}