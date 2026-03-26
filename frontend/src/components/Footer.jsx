function Footer({ name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E5E7EB] px-6 py-10">
      <div className="mx-auto max-w-5xl text-sm text-[#6B7280]">
        <p>{name}</p>
        <p className="mt-1">Copyright {year}</p>
      </div>
    </footer>
  )
}

export default Footer

