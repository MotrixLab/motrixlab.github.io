const NEWS_ITEMS = [
  {
    date: "2026-02-11",
    content: (
      <>
        <a href="https://github.com/MotrixLab/InfiniteDance" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">InfiniteDance</a>
        {", "}
        <a href="https://github.com/MotrixLab/insactor" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">InsActor</a>
        {", "}
        <a href="https://github.com/MotrixLab/MKA" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">MKA</a>
        {" are now available on Motrix"}
      </>
    ),
  },
  {
    date: "2026-01-20",
    content: (
      <>
        {"Release of "}
        <a href="https://github.com/MotrixLab/ViMoGen" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ViMoGen</a>
        {" (ICLR'26)"}
      </>
    ),
  },
  {
    date: "2026-01-20",
    content: (
      <>
        {"Check out our expanded repos on "}
        <a href="https://github.com/MotrixLab#motion-generation" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">motion generation</a>
        {" and "}
        <a href="https://github.com/MotrixLab#motion-dataset" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">human motion dataset</a>
      </>
    ),
  },
  {
    date: "2026-01-20",
    content: <>🔥🔥🔥 SMPLCap is now <strong>Motrix</strong> 🔥🔥🔥</>,
  },
  {
    date: "2026-01-07",
    content: (
      <>
        <a href="https://github.com/MotrixLab/PointHPS" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PointHPS</a>
        {" accepted to IJCV"}
      </>
    ),
  },
  {
    date: "2025-10-21",
    content: (
      <>
        <a href="https://github.com/MotrixLab/SMPLest-X" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SMPLest-X</a>
        {" accepted to TPAMI"}
      </>
    ),
  },
  {
    date: "2025-05-15",
    content: (
      <>
        {"Release of "}
        <a href="https://github.com/MotrixLab/ADHMR" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ADHMR</a>
        {" (ICML'25)"}
      </>
    ),
  },
  {
    date: "2025-04-11",
    content: <>Projects and homepage updated</>,
  },
  {
    date: "2025-04-10",
    content: <>🚀🚀🚀 Announcing the launch of SMPLCap 🚀🚀🚀</>,
  },
];

export function News() {
  return (
    <section id="news" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">News</h2>
        <ul className="list-disc list-inside space-y-4">
          {NEWS_ITEMS.map((item, index) => (
            <li key={index} className="text-white/80 text-base leading-relaxed">
              <span className="text-white/40 font-mono text-sm mr-2">
                [{item.date}]
              </span>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
