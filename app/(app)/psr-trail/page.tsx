export default function ProductPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative min-h-screen flex overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/anscer/images/trial-product/hero.jpg" alt="ANSCER TRail CB2000 autonomous forklift — front three-quarter view with forks extended" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(12,21,32,0.95)] via-[rgba(12,21,32,0.65)] to-[rgba(12,21,32,0.15)]" style={{ background: 'linear-gradient(105deg, rgba(12,21,32,0.95) 38%, rgba(12,21,32,0.65) 60%, rgba(12,21,32,0.15) 100%)' }} />
        <div className="relative z-[2] flex flex-col justify-center px-14 pt-28 pb-20 max-w-[680px] max-md:px-6 max-md:pt-28 max-md:pb-16">
          <div className="inline-flex items-center gap-[7px] bg-[rgba(0,174,239,0.15)] border border-[rgba(0,174,239,0.3)] text-[#33C3F5] rounded-full px-3.5 py-[5px] text-[0.73rem] font-semibold tracking-[0.08em] uppercase mb-6 font-mono w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-[blink_1.8s_ease-in-out_infinite]" />
            Your Mobility, Our ANSCER
          </div>
          <h1 className="font-montserrat text-[clamp(3.2rem,6.5vw,5.5rem)] font-extrabold leading-[0.95] text-white tracking-[-0.03em] mb-6">
            Unload every trailer.<br />
            <em className="not-italic text-[#00AEEF] block">Autonomously.</em>
          </h1>
          <p className="text-[1.08rem] text-[rgba(255,255,255,0.65)] leading-[1.72] max-w-[480px] mb-10">
            ANSCER TRail is the next generation autonomous trailer unloading robot. Built on the proven TRail 2000 platform — it enters the trailer, picks every pallet, and exits. No operator. No downtime. No limits.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-14">
            <a href="#contact" className="bg-[#00AEEF] text-[#0C1520] px-7 py-3.5 rounded-full font-bold text-[0.9rem] no-underline inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#33C3F5] hover:-translate-y-0.5">
              Request a Pilot
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#how" className="border-[1.5px] border-[rgba(255,255,255,0.25)] text-white px-[26px] py-[13px] rounded-full font-medium text-[0.9rem] no-underline inline-flex items-center gap-2 transition-all duration-200 hover:border-[#00AEEF] hover:bg-[rgba(0,174,239,0.1)]">
              See How It Works
            </a>
          </div>
          <div className="flex gap-0 bg-[rgba(255,255,255,0.07)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] rounded-[14px] overflow-hidden w-fit max-sm:hidden">
            <div className="px-[22px] py-4 border-r border-[rgba(255,255,255,0.08)] text-center">
              <span className="font-montserrat text-[1.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">26–30<sup className="text-[0.9rem]">/hr</sup></span>
              <span className="text-[0.68rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.06em] font-medium mt-[3px] block">Pallets</span>
            </div>
            <div className="px-[22px] py-4 border-r border-[rgba(255,255,255,0.08)] text-center">
              <span className="font-montserrat text-[1.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">98<sup className="text-[0.9rem]">%</sup></span>
              <span className="text-[0.68rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.06em] font-medium mt-[3px] block">Dock Success</span>
            </div>
            <div className="px-[22px] py-4 border-r border-[rgba(255,255,255,0.08)] text-center">
              <span className="font-montserrat text-[1.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">24<sup className="text-[0.9rem]">/7</sup></span>
              <span className="text-[0.68rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.06em] font-medium mt-[3px] block">Operation</span>
            </div>
            <div className="px-[22px] py-4 text-center">
              <span className="font-montserrat text-[1.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">85<sup className="text-[0.9rem]">+</sup></span>
              <span className="text-[0.68rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.06em] font-medium mt-[3px] block">Sites Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="bg-[#F0F5FA] border-t border-b border-[rgba(12,21,32,0.09)] py-7 px-14 flex items-center gap-12 flex-wrap max-md:px-6 max-md:py-6">
        <span className="text-[0.73rem] font-semibold text-[#64748B] uppercase tracking-[0.1em] whitespace-nowrap shrink-0">Trusted by</span>
        <div className="flex gap-12 items-center flex-wrap">
          <span className="font-montserrat text-[0.88rem] font-bold text-[#94A3B8] tracking-[0.04em] cursor-default hover:text-[#0C1520] transition-colors duration-200">SCHNEIDER ELECTRIC</span>
          <span className="font-montserrat text-[0.88rem] font-bold text-[#94A3B8] tracking-[0.04em] cursor-default hover:text-[#0C1520] transition-colors duration-200">MOTHERSON GROUP</span>
          <span className="font-montserrat text-[0.88rem] font-bold text-[#94A3B8] tracking-[0.04em] cursor-default hover:text-[#0C1520] transition-colors duration-200">ROYAL ENFIELD</span>
          <span className="font-montserrat text-[0.88rem] font-bold text-[#94A3B8] tracking-[0.04em] cursor-default hover:text-[#0C1520] transition-colors duration-200">TATA GROUP</span>
          <span className="font-montserrat text-[0.88rem] font-bold text-[#94A3B8] tracking-[0.04em] cursor-default hover:text-[#0C1520] transition-colors duration-200">ABB</span>
          <span className="font-montserrat text-[0.88rem] font-bold text-[#94A3B8] tracking-[0.04em] cursor-default hover:text-[#0C1520] transition-colors duration-200">MOLEX</span>
        </div>
      </div>

      {/* MEET THE ROBOT */}
      <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6" id="meet">
        <div>
          <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">The Product</div>
          <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">Meet the <em className="not-italic text-[#0088CC]">ANSCER TRail</em></h2>
          <p className="text-base text-[#64748B] leading-[1.75] max-w-[520px] mt-3.5">TRail is an ANSCER concept solution for autonomous trailer unloading, built on ANSCER&apos;s proven mobile robot platform and fleet intelligence for dock and warehouse operations.</p>
        </div>
        <div className="grid grid-cols-2 gap-[4.5rem] items-center mt-16 max-md:grid-cols-1">
          <div className="rounded-[20px] overflow-hidden relative leading-[0]" style={{ aspectRatio: '4/3' }}>
            <img src="/anscer/images/trial-product/platform-section.jpg" alt="ANSCER TRail CB2000 autonomous forklift front view" className="w-full h-full object-cover block transition-transform duration-600 ease-out hover:scale-[1.03]" />
            <div className="absolute bottom-5 left-5 bg-[rgba(12,21,32,0.8)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] rounded-lg px-3.5 py-[9px] text-white text-[0.78rem] font-medium flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#22C55E] animate-[blink_1.4s_ease-in-out_infinite]" />
              ANSCER TRail 2000 · Active
            </div>
          </div>
          <div>
            <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Platform</div>
            <h3 className="font-montserrat text-[1.7rem] font-bold text-[#0C1520] leading-[1.18] mb-4">A proven forklift.<br />An extraordinary brain.</h3>
            <p className="text-[0.92rem] text-[#64748B] leading-[1.72] mb-7">We start with the battle-tested ANSCER TRail 2000 and equip it with safety-certified 3D LiDAR, depth cameras, and our autonomy stack to enable it to navigate unmapped trailer interiors and retrieve every pallet without human direction.</p>
            <div className="grid grid-cols-2 gap-[0.7rem] mt-7">
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Model</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">TRail 2000</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Trailer Target</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">53 ft Dry Van</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Sensors</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">3D LiDAR + Cam</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Safety</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">Designed around ANSI / ISO 3691-4</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Pallet Types</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">GMA Standard</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">IP Rating</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">IP54+</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Integration</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">VDA5050 / WMS</div>
              </div>
              <div className="border border-[rgba(12,21,32,0.09)] rounded-lg p-[0.9rem_1rem] bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_2px_10px_rgba(0,174,239,0.07)]">
                <div className="text-[0.69rem] text-[#94A3B8] font-medium tracking-[0.05em] uppercase mb-[3px]">Deployments</div>
                <div className="font-mono text-[0.87rem] text-[#0C1520] font-medium">Global deployments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL COMPARISON */}
      <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6" id="models">
        <div>
          <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Platform Options</div>
          <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">One autonomy stack.<br /><em className="not-italic text-[#0088CC]">Two payload options.</em></h2>
          <p className="text-base text-[#64748B] leading-[1.75] max-w-[520px] mt-3.5">Both models are presented as trailer-unloading concept options running the ANSCER autonomy and fleet-management stack. Final configuration can be matched to customer payload, pallet type, trailer condition, and dock environment.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-14 max-md:grid-cols-1">
          {/* Standard Model */}
          <div className="rounded-[20px] overflow-hidden border border-[rgba(12,21,32,0.09)] bg-white transition-all duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-[3px]">
            <div className="p-[2rem_2rem_1.5rem] bg-[#F0F5FA] relative">
              <span className="inline-block bg-[#E2EBF5] text-[#0C1520] text-[0.7rem] font-bold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5 font-mono">Standard Payload</span>
              <div className="font-montserrat text-[1.7rem] font-extrabold text-[#0C1520] leading-none mb-[0.4rem]">TRail 2000</div>
              <div className="font-inter text-[0.88rem] text-[#64748B]">2,000 kg payload · Most deployments</div>
            </div>
            <div className="p-[1.75rem_2rem]">
              <div className="flex gap-8 mb-6 flex-wrap">
                <div>
                  <div className="font-montserrat text-[2rem] font-extrabold text-[#0C1520] leading-none">2,000<span className="text-[1.1rem]">kg</span></div>
                  <div className="text-[0.72rem] text-[#64748B] uppercase tracking-[0.05em] font-medium mt-1">Payload Capacity</div>
                </div>
                <div>
                  <div className="font-montserrat text-[2rem] font-extrabold text-[#0C1520] leading-none">26–25</div>
                  <div className="text-[0.72rem] text-[#64748B] uppercase tracking-[0.05em] font-medium mt-1">Pallets / Hour</div>
                </div>
                <div>
                  <div className="font-montserrat text-[2rem] font-extrabold text-[#0C1520] leading-none">8<span className="text-[1.1rem]">hr+</span></div>
                  <div className="text-[0.72rem] text-[#64748B] uppercase tracking-[0.05em] font-medium mt-1">Runtime</div>
                </div>
              </div>
              <ul className="list-none flex flex-col gap-2">
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Ideal for standard GMA pallets and 53 ft dry van trailers</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Built for controlled trailer unloading up to 2,000 kg payload</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Compact profile — navigates tight trailer interiors</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Best suited for 3PL, retail DC, and FMCG operations</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Autonomy stack included</li>
              </ul>
            </div>
          </div>
          {/* Featured Model */}
          <div className="rounded-[20px] overflow-hidden border border-[rgba(0,174,239,0.18)] bg-white shadow-[0_4px_24px_rgba(0,174,239,0.1)] transition-all duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-[3px]">
            <div className="p-[2rem_2rem_1.5rem] bg-[#0C1520] relative">
              <span className="inline-block bg-[#00AEEF] text-[#0C1520] text-[0.7rem] font-bold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5 font-mono">Heavy Payload</span>
              <div className="font-montserrat text-[1.7rem] font-extrabold text-white leading-none mb-[0.4rem]">TRail 3000</div>
              <div className="font-inter text-[0.88rem] text-[rgba(255,255,255,0.55)]">3,000 kg payload · High-density loads</div>
            </div>
            <div className="p-[1.75rem_2rem]">
              <div className="flex gap-8 mb-6 flex-wrap">
                <div>
                  <div className="font-montserrat text-[2rem] font-extrabold text-[#0C1520] leading-none">3,000<span className="text-[1.1rem]">kg</span></div>
                  <div className="text-[0.72rem] text-[#64748B] uppercase tracking-[0.05em] font-medium mt-1">Payload Capacity</div>
                </div>
                <div>
                  <div className="font-montserrat text-[2rem] font-extrabold text-[#0C1520] leading-none">26–30</div>
                  <div className="text-[0.72rem] text-[#64748B] uppercase tracking-[0.05em] font-medium mt-1">Pallets / Hour</div>
                </div>
                <div>
                  <div className="font-montserrat text-[2rem] font-extrabold text-[#0C1520] leading-none">8<span className="text-[1.1rem]">hr+</span></div>
                  <div className="text-[0.72rem] text-[#64748B] uppercase tracking-[0.05em] font-medium mt-1">Runtime</div>
                </div>
              </div>
              <ul className="list-none flex flex-col gap-2">
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Handles heavy industrial and manufacturing pallet loads</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Built for controlled trailer unloading up to 3,000 kg payload</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Suited for automotive, manufacturing, and heavy FMCG</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Enhanced stability design for higher payload operations</li>
                <li className="font-inter flex items-start gap-2.5 text-[0.88rem] text-[#64748B] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0 before:mt-[1px]">Autonomy stack included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM HOW IT WORKS */}
      <section id="how" className="relative overflow-hidden py-[6.5rem] px-10 bg-gradient-to-b from-white to-[#F7FBFF] text-[#0C1520] border-t border-b border-[rgba(12,21,32,0.09)] max-md:py-20 max-md:px-5">
        <div className="absolute inset-0 opacity-[0.58] pointer-events-none" style={{ background: 'radial-gradient(circle at 78% 12%, rgba(0,174,239,0.10), transparent 34%), linear-gradient(rgba(0,174,239,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.035) 1px, transparent 1px)', backgroundSize: 'auto, 56px 56px, 56px 56px' }} aria-hidden="true" />
        <div className="relative z-[1] max-w-[1420px] mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[minmax(360px,0.95fr)_minmax(420px,0.75fr)] gap-12 items-end mb-12 max-md:grid-cols-1 max-md:mb-8">
            <div>
              <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">How It Works</div>
              <h2 className="font-montserrat text-[clamp(2.25rem,4vw,4.2rem)] font-extrabold leading-none tracking-[-0.045em] text-[#0C1520] mt-3">Autonomous trailer unloading,<br /><em className="not-italic text-[#0088CC]">from dock check to pallet drop.</em></h2>
            </div>
            <p className="text-[1.02rem] leading-[1.75] text-[#64748B] max-w-[600px]">TRail combines dock interlocks, trailer-aware navigation, pallet perception, fork alignment, and safe reverse travel into one clear dock-to-staging workflow.</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-[minmax(280px,360px)_minmax(540px,1fr)_minmax(285px,360px)] gap-5 items-stretch max-lg:grid-cols-[1fr_1.25fr] max-md:grid-cols-1">
            {/* Story Panel */}
            <div className="border border-[rgba(12,21,32,0.09)] bg-[rgba(255,255,255,0.92)] shadow-[0_18px_60px_rgba(12,21,32,0.07)] rounded-[24px] p-[1.65rem] flex flex-col justify-between gap-[1.35rem]">
              <div>
                <div className="font-mono uppercase tracking-[0.13em] text-[#0088CC] text-[0.7rem] font-medium">System overview</div>
                <h3 className="font-montserrat text-[1.42rem] leading-[1.16] tracking-[-0.025em] text-[#0C1520] mt-3">One command starts a controlled dock-to-staging workflow.</h3>
                <p className="text-[0.9rem] leading-[1.68] text-[#64748B] mt-3">The system verifies the bay, understands the trailer and pallet position, aligns the equipment, confirms pickup, and delivers the pallet to the assigned staging lane.</p>
              </div>
              <div className="rounded-[18px] p-[1.1rem_1.15rem] border border-[rgba(0,174,239,0.22)]" style={{ background: 'linear-gradient(135deg, rgba(0,174,239,0.08), #fff)' }}>
                <span className="block font-mono uppercase tracking-[0.1em] text-[0.66rem] text-[#64748B]">Operator command</span>
                <strong className="block my-[0.35rem] text-[#0C1520] font-montserrat text-[1.05rem]">Unload Trailer · Bay 03</strong>
                <em className="block font-mono uppercase tracking-[0.1em] text-[0.66rem] text-[#0088CC] font-semibold not-italic">Dock verified · trailer restrained · robot ready</em>
              </div>
              <div className="grid gap-[0.65rem]">
                <div className="flex items-center gap-[0.7rem] p-[0.75rem_0.85rem] border border-[rgba(12,21,32,0.09)] rounded-[14px] bg-[#F0F5FA]">
                  <span className="font-mono text-[#0088CC] text-[0.72rem] font-semibold">01</span>
                  <strong className="text-[0.82rem] text-[#132035]">Dock safety verified</strong>
                </div>
                <div className="flex items-center gap-[0.7rem] p-[0.75rem_0.85rem] border border-[rgba(12,21,32,0.09)] rounded-[14px] bg-[#F0F5FA]">
                  <span className="font-mono text-[#0088CC] text-[0.72rem] font-semibold">02</span>
                  <strong className="text-[0.82rem] text-[#132035]">Trailer geometry acquired</strong>
                </div>
                <div className="flex items-center gap-[0.7rem] p-[0.75rem_0.85rem] border border-[rgba(12,21,32,0.09)] rounded-[14px] bg-[#F0F5FA]">
                  <span className="font-mono text-[#0088CC] text-[0.72rem] font-semibold">03</span>
                  <strong className="text-[0.82rem] text-[#132035]">Pallet pose confirmed</strong>
                </div>
                <div className="flex items-center gap-[0.7rem] p-[0.75rem_0.85rem] border border-[rgba(12,21,32,0.09)] rounded-[14px] bg-[#F0F5FA]">
                  <span className="font-mono text-[#0088CC] text-[0.72rem] font-semibold">04</span>
                  <strong className="text-[0.82rem] text-[#132035]">Pickup and exit monitored</strong>
                </div>
              </div>
            </div>

            {/* Visual Stage */}
            <div className="border border-[rgba(12,21,32,0.09)] bg-white shadow-[0_18px_60px_rgba(12,21,32,0.07)] rounded-[28px] overflow-hidden">
              <div className="h-[52px] flex items-center gap-3 px-[1.1rem] bg-gradient-to-r from-white to-[#f4f8fb] text-[#0C1520] border-b border-[rgba(12,21,32,0.09)]">
                <span className="w-[9px] h-[9px] rounded-full bg-[#00AEEF] shadow-[0_0_0_6px_rgba(0,174,239,0.12)]" />
                <strong className="font-montserrat text-[0.82rem] uppercase tracking-[0.06em]">TRail perception stack</strong>
                <em className="ml-auto not-italic text-[0.74rem] text-[#64748B] font-semibold">Live sensor view</em>
              </div>
              <div className="bg-white p-0 flex items-center justify-center">
                <img src="/anscer/images/trial-product/system-overview.jpg" alt="ANSCER TRail CB2000 sensor canopy and trailer-unloading perception stack" className="w-full h-auto block object-contain bg-white" />
              </div>
              <div className="p-[1.2rem_1.35rem] bg-[#F0F5FA] border-t border-[rgba(12,21,32,0.09)]">
                <strong className="block font-montserrat text-[0.95rem] text-[#0C1520] mb-[0.35rem]">Real-time understanding of trailer, pallet, fork pockets, walls and people.</strong>
                <p className="text-[0.83rem] leading-[1.58] text-[#64748B]">Sensor data is fused locally on the robot so the mission can continue safely even when dock WiFi quality changes inside the trailer.</p>
              </div>
            </div>

            {/* System Panel */}
            <div className="border border-[rgba(12,21,32,0.09)] bg-[rgba(255,255,255,0.92)] shadow-[0_18px_60px_rgba(12,21,32,0.07)] rounded-[24px] p-[1.4rem] flex flex-col gap-3.5 max-lg:col-span-full">
              <div className="font-mono uppercase tracking-[0.13em] text-[#0088CC] text-[0.7rem] font-medium">Control layers</div>
              <div className="p-4 rounded-[16px] bg-white border border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:bg-[rgba(0,174,239,0.08)] hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,174,239,0.08)] bg-[rgba(0,174,239,0.08)] border-[rgba(0,174,239,0.28)]">
                <span className="font-mono text-[0.66rem] text-[#0088CC] uppercase tracking-[0.11em] font-semibold">Layer 01</span>
                <strong className="block font-montserrat text-[0.95rem] my-[0.35rem] text-[#0C1520]">Dock readiness</strong>
                <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Checks trailer presence, restraint, door, dock leveler and operator enable before entry.</p>
              </div>
              <div className="p-4 rounded-[16px] bg-white border border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:bg-[rgba(0,174,239,0.08)] hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,174,239,0.08)]">
                <span className="font-mono text-[0.66rem] text-[#0088CC] uppercase tracking-[0.11em] font-semibold">Layer 02</span>
                <strong className="block font-montserrat text-[0.95rem] my-[0.35rem] text-[#0C1520]">Trailer navigation</strong>
                <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Tracks trailer walls, dock plate transition, pitch, roll and available reverse path.</p>
              </div>
              <div className="p-4 rounded-[16px] bg-white border border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:bg-[rgba(0,174,239,0.08)] hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,174,239,0.08)]">
                <span className="font-mono text-[0.66rem] text-[#0088CC] uppercase tracking-[0.11em] font-semibold">Layer 03</span>
                <strong className="block font-montserrat text-[0.95rem] my-[0.35rem] text-[#0C1520]">Pallet engagement</strong>
                <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Detects pallet face, fork pockets, yaw angle, insertion depth and load confirmation.</p>
              </div>
              <div className="p-4 rounded-[16px] bg-white border border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:bg-[rgba(0,174,239,0.08)] hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,174,239,0.08)]">
                <span className="font-mono text-[0.66rem] text-[#0088CC] uppercase tracking-[0.11em] font-semibold">Layer 04</span>
                <strong className="block font-montserrat text-[0.95rem] my-[0.35rem] text-[#0C1520]">Safety supervision</strong>
                <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Human detection, obstacle stop, speed zones, localization fault stop and recovery mode.</p>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="mt-5 grid grid-cols-6 gap-3.5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[rgba(12,21,32,0.09)] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(12,21,32,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#00AEEF] before:opacity-55 hover:-translate-y-1 hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_14px_36px_rgba(0,174,239,0.10)]">
              <span className="font-montserrat text-[2.15rem] font-extrabold text-[#E2EBF5] leading-none">01</span>
              <strong className="block mt-3.5 mb-[0.45rem] font-montserrat text-[0.95rem] text-[#0C1520]">Verify Dock</strong>
              <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Trailer restraint, dock leveler and door state are confirmed before the robot moves.</p>
            </div>
            <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[rgba(12,21,32,0.09)] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(12,21,32,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#00AEEF] before:opacity-55 hover:-translate-y-1 hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_14px_36px_rgba(0,174,239,0.10)]">
              <span className="font-montserrat text-[2.15rem] font-extrabold text-[#E2EBF5] leading-none">02</span>
              <strong className="block mt-3.5 mb-[0.45rem] font-montserrat text-[0.95rem] text-[#0C1520]">Enter Trailer</strong>
              <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Robot crosses the dock plate slowly while monitoring pitch, roll and traction.</p>
            </div>
            <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[rgba(12,21,32,0.09)] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(12,21,32,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#00AEEF] before:opacity-55 hover:-translate-y-1 hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_14px_36px_rgba(0,174,239,0.10)]">
              <span className="font-montserrat text-[2.15rem] font-extrabold text-[#E2EBF5] leading-none">03</span>
              <strong className="block mt-3.5 mb-[0.45rem] font-montserrat text-[0.95rem] text-[#0C1520]">Scan Pallet</strong>
              <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">3D perception estimates pallet position, yaw angle, fork pockets and load condition.</p>
            </div>
            <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[rgba(12,21,32,0.09)] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(12,21,32,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#00AEEF] before:opacity-55 hover:-translate-y-1 hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_14px_36px_rgba(0,174,239,0.10)]">
              <span className="font-montserrat text-[2.15rem] font-extrabold text-[#E2EBF5] leading-none">04</span>
              <strong className="block mt-3.5 mb-[0.45rem] font-montserrat text-[0.95rem] text-[#0C1520]">Align Forks</strong>
              <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Robot body and fork approach are corrected for safe, repeatable pallet entry.</p>
            </div>
            <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[rgba(12,21,32,0.09)] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(12,21,32,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#00AEEF] before:opacity-55 hover:-translate-y-1 hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_14px_36px_rgba(0,174,239,0.10)]">
              <span className="font-montserrat text-[2.15rem] font-extrabold text-[#E2EBF5] leading-none">05</span>
              <strong className="block mt-3.5 mb-[0.45rem] font-montserrat text-[0.95rem] text-[#0C1520]">Pick & Reverse</strong>
              <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Load presence is confirmed before reversing through a monitored safety corridor.</p>
            </div>
            <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[rgba(12,21,32,0.09)] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(12,21,32,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#00AEEF] before:opacity-55 hover:-translate-y-1 hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_14px_36px_rgba(0,174,239,0.10)]">
              <span className="font-montserrat text-[2.15rem] font-extrabold text-[#E2EBF5] leading-none">06</span>
              <strong className="block mt-3.5 mb-[0.45rem] font-montserrat text-[0.95rem] text-[#0C1520]">Drop & Repeat</strong>
              <p className="text-[0.78rem] leading-[1.55] text-[#64748B]">Pallet is placed at staging, WMS/FMS is updated and the next cycle begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6" id="capabilities">
        <div>
          <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Technology</div>
          <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">Built for the hardest<br /><em className="not-italic text-[#0088CC]">environment in logistics</em></h2>
        </div>
        <div className="grid grid-cols-2 gap-20 items-start mt-16 max-md:grid-cols-1">
          <div className="flex flex-col gap-0">
            <div className="flex gap-5 items-start py-6 border-b border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:pl-[0.4rem]">
              <div className="w-[42px] h-[42px] shrink-0 rounded-[9px] bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.15rem] transition-all duration-200 group-hover:bg-[rgba(0,174,239,0.08)] group-hover:border-[rgba(0,174,239,0.18)]">🎯</div>
              <div>
                <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.3rem]">Hybrid Sensor Fusion Localization</div>
                <div className="font-inter text-[0.85rem] text-[#64748B] leading-[1.65]">3D LiDAR + depth camera + IMU gives robust positioning inside dark, featureless trailers with reflective shrink-wrap and uneven floors — environments that defeat standard AMRs.</div>
              </div>
            </div>
            <div className="flex gap-5 items-start py-6 border-b border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:pl-[0.4rem]">
              <div className="w-[42px] h-[42px] shrink-0 rounded-[9px] bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.15rem]">🧠</div>
              <div>
                <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.3rem]">Deep Learning Pallet Perception</div>
                <div className="font-inter text-[0.85rem] text-[#64748B] leading-[1.65]">Trained visual models detect pallet pose, fork pocket gap, and load state in any orientation — from trailers never previously mapped. Handles shifted, damaged, and partially visible pallets.</div>
              </div>
            </div>
            <div className="flex gap-5 items-start py-6 border-b border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:pl-[0.4rem]">
              <div className="w-[42px] h-[42px] shrink-0 rounded-[9px] bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.15rem]">🛡️</div>
              <div>
                <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.3rem]">Safety-Certified Architecture</div>
                <div className="font-inter text-[0.85rem] text-[#64748B] leading-[1.65]">Safety PLC, front & rear LiDAR scanners, E-stops, human detection inside trailer, and mandatory dock interlock checks before every single cycle entry.</div>
              </div>
            </div>
            <div className="flex gap-5 items-start py-6 border-b border-[rgba(12,21,32,0.09)] transition-all duration-200 hover:pl-[0.4rem]">
              <div className="w-[42px] h-[42px] shrink-0 rounded-[9px] bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.15rem]">📊</div>
              <div>
                <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.3rem]">Fleet & Dock Orchestration</div>
                <div className="font-inter text-[0.85rem] text-[#64748B] leading-[1.65]">Multi-robot traffic management, trailer queue scheduling, live dock utilization analytics, and VDA5050-compliant WMS/ERP integration out of the box.</div>
              </div>
            </div>
            <div className="flex gap-5 items-start py-6 transition-all duration-200 hover:pl-[0.4rem]">
              <div className="w-[42px] h-[42px] shrink-0 rounded-[9px] bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.15rem]">🔄</div>
              <div>
                <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.3rem]">Real-World Exception Handling</div>
                <div className="font-inter text-[0.85rem] text-[#64748B] leading-[1.65]">Missed pallet recovery, partial insertion retry, no-pallet detection, dock plate condition monitoring — all handled autonomously with configurable retry logic.</div>
              </div>
            </div>
          </div>
          <div className="sticky top-[130px] flex flex-col gap-5">
            <div className="rounded-[20px] overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src="/anscer/images/trial-product/technology-section.jpg" alt="ANSCER TRail CB2000 side profile with forks lowered" className="w-full h-full object-cover block" />
            </div>
            <div className="mt-5">
              <div className="font-montserrat text-[0.88rem] font-bold text-[#0C1520] mb-3 tracking-[0.01em]">Core tech stack</div>
              <div className="flex flex-wrap gap-[7px]">
                <span className="bg-[#0C1520] text-white font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em]">3D LiDAR</span>
                <span className="bg-[#0C1520] text-white font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em]">Depth Camera</span>
                <span className="bg-[#0C1520] text-white font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em]">IMU Fusion</span>
                <span className="bg-[#0C1520] text-white font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em]">Safety PLC</span>
                <span className="bg-[#0C1520] text-white font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em]">Neural AI</span>
                <span className="bg-[#0C1520] text-white font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em]">SLAM</span>
                <span className="bg-[#F0F5FA] text-[#0C1520] font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em] border border-[rgba(12,21,32,0.09)]">VDA5050</span>
                <span className="bg-[#F0F5FA] text-[#0C1520] font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em] border border-[rgba(12,21,32,0.09)]">WMS / ERP</span>
                <span className="bg-[#F0F5FA] text-[#0C1520] font-mono text-[0.7rem] px-3 py-[5px] rounded-full tracking-[0.03em] border border-[rgba(12,21,32,0.09)]">IP54+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <div className="bg-[#0C1520] py-[6.5rem] px-14 max-md:py-16 max-md:px-6" id="performance">
        <div className="max-w-[1320px] mx-auto">
          <div>
            <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Performance Benchmarks</div>
            <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-white tracking-[-0.025em]">Real numbers.<br /><em className="not-italic text-[#0088CC]">Not estimates.</em></h2>
          </div>
          <div className="grid grid-cols-5 gap-5 mt-14 max-lg:grid-cols-3 max-md:grid-cols-2">
            <div className="bg-[#132035] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-[2.5rem_1.25rem] text-center transition-all duration-200 hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-[3px]">
              <span className="font-montserrat text-[2.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">26–30</span>
              <span className="text-[0.73rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] font-semibold mt-[0.7rem] block">Pallets / Hour</span>
              <span className="text-[0.69rem] text-[rgba(255,255,255,0.25)] mt-[3px] block">Target throughput</span>
            </div>
            <div className="bg-[#132035] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-[2.5rem_1.25rem] text-center transition-all duration-200 hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-[3px]">
              <span className="font-montserrat text-[2.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">98<span className="text-[1.3rem] text-[rgba(0,174,239,0.5)]">%</span></span>
              <span className="text-[0.73rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] font-semibold mt-[0.7rem] block">Docking Success</span>
              <span className="text-[0.69rem] text-[rgba(255,255,255,0.25)] mt-[3px] block">Alignment accuracy</span>
            </div>
            <div className="bg-[#132035] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-[2.5rem_1.25rem] text-center transition-all duration-200 hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-[3px]">
              <span className="font-montserrat text-[2.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">99<span className="text-[1.3rem] text-[rgba(0,174,239,0.5)]">%</span></span>
              <span className="text-[0.73rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] font-semibold mt-[0.7rem] block">Trailer Entry</span>
              <span className="text-[0.69rem] text-[rgba(255,255,255,0.25)] mt-[3px] block">First-attempt success</span>
            </div>
            <div className="bg-[#132035] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-[2.5rem_1.25rem] text-center transition-all duration-200 hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-[3px]">
              <span className="font-montserrat text-[2.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">&lt;5<span className="text-[1.3rem] text-[rgba(0,174,239,0.5)]">%</span></span>
              <span className="text-[0.73rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] font-semibold mt-[0.7rem] block">Human Interventions</span>
              <span className="text-[0.69rem] text-[rgba(255,255,255,0.25)] mt-[3px] block">Per cycle</span>
            </div>
            <div className="bg-[#132035] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-[2.5rem_1.25rem] text-center transition-all duration-200 hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-[3px]">
              <span className="font-montserrat text-[2.7rem] font-extrabold text-[#00AEEF] leading-none block tabular-nums">0</span>
              <span className="text-[0.73rem] text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] font-semibold mt-[0.7rem] block">Safety Incidents</span>
              <span className="text-[0.69rem] text-[rgba(255,255,255,0.25)] mt-[3px] block">Target per deployment</span>
            </div>
          </div>
        </div>
      </div>

      {/* USE CASES */}
      <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6" id="usecases">
        <div>
          <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Applications</div>
          <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">Three ways TRail <em className="not-italic text-[#0088CC]">transforms</em><br />your operation</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-2 max-md:grid-cols-1">
          {/* Use Case 1 */}
          <div className="rounded-[14px] overflow-hidden border border-[rgba(12,21,32,0.09)] bg-white transition-all duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1">
            <div className="relative h-[230px] overflow-hidden">
              <img src="/anscer/images/trial-product/application-1.jpg" alt="ANSCER TRail CB2000 side profile — trailer unloading configuration" className="w-full h-full object-cover block transition-transform duration-600 ease-out hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,21,32,0.75)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-around p-[14px_8px] z-[1]">
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">55<span className="text-[0.9rem]">min</span></div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Full trailer</div>
                </div>
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">24/7</div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Operation</div>
                </div>
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">Zero</div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Operators</div>
                </div>
              </div>
            </div>
            <div className="p-[1.4rem_1.5rem]">
              <div className="font-montserrat text-[1.05rem] font-bold text-[#0C1520] mb-[0.45rem]">Trailer Loading & Unloading</div>
              <div className="font-inter text-[0.86rem] text-[#64748B] leading-[1.65]">Unload a full 53 ft trailer in 55 minutes or less — 24 hours a day, every day. No forklift operator, no dock attendant, no waiting for shift change.</div>
            </div>
          </div>
          {/* Use Case 2 */}
          <div className="rounded-[14px] overflow-hidden border border-[rgba(12,21,32,0.09)] bg-white transition-all duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1">
            <div className="relative h-[230px] overflow-hidden">
              <img src="/anscer/images/trial-product/application-2.jpg" alt="ANSCER TRail CB2000 rear three-quarter view with charging contacts" className="w-full h-full object-cover block transition-transform duration-600 ease-out hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,21,32,0.75)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-around p-[14px_8px] z-[1]">
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">50<span className="text-[0.9rem]">%</span></div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Cost savings</div>
                </div>
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">&lt; 2<span className="text-[0.9rem]">yr</span></div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Payback</div>
                </div>
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">850</div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Hrs of Operation</div>
                </div>
              </div>
            </div>
            <div className="p-[1.4rem_1.5rem]">
              <div className="font-montserrat text-[1.05rem] font-bold text-[#0C1520] mb-[0.45rem]">Warehouse Labor Augmentation</div>
              <div className="font-inter text-[0.86rem] text-[#64748B] leading-[1.65]">Meet peak demand at any time. Build resiliency against labor shortages with clear ROI potential compared with manual dock operations and imported automation alternatives.</div>
            </div>
          </div>
          {/* Use Case 3 */}
          <div className="rounded-[14px] overflow-hidden border border-[rgba(12,21,32,0.09)] bg-white transition-all duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1">
            <div className="relative h-[230px] overflow-hidden">
              <img src="/anscer/images/trial-product/application-3.jpg" alt="ANSCER TRail CB2000 rear three-quarter view" className="w-full h-full object-cover block transition-transform duration-600 ease-out hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,21,32,0.75)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-around p-[14px_8px] z-[1]">
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">0<span className="text-[0.9rem]">%</span></div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Incident</div>
                </div>
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">Higher</div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Skill jobs</div>
                </div>
                <div>
                  <div className="font-montserrat text-[1.2rem] font-extrabold text-[#00AEEF] leading-none text-center">Better</div>
                  <div className="text-[0.62rem] text-[rgba(255,255,255,0.55)] uppercase tracking-[0.05em] text-center mt-[2px]">Retention</div>
                </div>
              </div>
            </div>
            <div className="p-[1.4rem_1.5rem]">
              <div className="font-montserrat text-[1.05rem] font-bold text-[#0C1520] mb-[0.45rem]">Workforce Enhancement</div>
              <div className="font-inter text-[0.86rem] text-[#64748B] leading-[1.65]">Move workers away from high-injury dock unloading into higher-value roles. Dock operations are a high-risk area in warehouses; TRail is designed to move people away from repetitive dock unloading tasks into higher-value roles.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS TILES */}
      <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6" id="benefits">
        <div>
          <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Why TRail</div>
          <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">Built for <em className="not-italic text-[#0088CC]">best performance</em></h2>
          <p className="text-base text-[#64748B] leading-[1.75] max-w-[520px] mt-3.5">Five measurable outcomes every TRail deployment delivers — from day one.</p>
        </div>
        <div className="grid grid-cols-5 gap-[1px] bg-[rgba(12,21,32,0.09)] border border-[rgba(12,21,32,0.09)] rounded-[14px] overflow-hidden mt-14 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="bg-white p-[2.25rem_1.5rem] text-center transition-colors duration-200 hover:bg-[#F0F5FA]">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.4rem] mx-auto mb-5">👥</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-2">Augment Your People</div>
            <div className="font-inter text-[0.82rem] text-[#64748B] leading-[1.6]">Reduce manual dock driving with autonomous pallet retrieval, supervised exception handling, and 24/7-ready operation planning.</div>
          </div>
          <div className="bg-white p-[2.25rem_1.5rem] text-center transition-colors duration-200 hover:bg-[#F0F5FA]">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.4rem] mx-auto mb-5">🛡️</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-2">Improve Safety</div>
            <div className="font-inter text-[0.82rem] text-[#64748B] leading-[1.6]">360° sensing, mandatory interlocks, and controlled operating zones help reduce dock safety risks and equipment damage.</div>
          </div>
          <div className="bg-white p-[2.25rem_1.5rem] text-center transition-colors duration-200 hover:bg-[#F0F5FA]">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.4rem] mx-auto mb-5">⚡</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-2">Simplify Automation</div>
            <div className="font-inter text-[0.82rem] text-[#64748B] leading-[1.6]">Designed for pilot deployment with minimal disruption, structured training, and site-specific commissioning.</div>
          </div>
          <div className="bg-white p-[2.25rem_1.5rem] text-center transition-colors duration-200 hover:bg-[#F0F5FA]">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.4rem] mx-auto mb-5">🔗</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-2">Optimize Workflows</div>
            <div className="font-inter text-[0.82rem] text-[#64748B] leading-[1.6]">Seamless WMS/WES/MES integration and real-time dock analytics orchestrate your inbound and outbound operations automatically.</div>
          </div>
          <div className="bg-white p-[2.25rem_1.5rem] text-center transition-colors duration-200 hover:bg-[#F0F5FA]">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#F0F5FA] border border-[rgba(12,21,32,0.05)] flex items-center justify-center text-[1.4rem] mx-auto mb-5">🏗️</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-2">Light on Infrastructure</div>
            <div className="font-inter text-[0.82rem] text-[#64748B] leading-[1.6]">Designed to reduce dependency on floor markers or QR codes, subject to site validation and safety requirements.</div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <div className="bg-[#F0F5FA]">
        <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6">
          <div>
            <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Safety & Compliance</div>
            <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">Certified safe.<br /><em className="not-italic text-[#0088CC]">Engineered safer.</em></h2>
            <p className="text-base text-[#64748B] leading-[1.75] max-w-[520px] mt-3.5">TRail should be deployed with safety architecture designed around ANSI/ITSDF B56.5 and ISO 3691-4 principles for unmanned industrial vehicles. Final compliance depends on the certified robot configuration, site layout, risk assessment, and commissioning process.</p>
          </div>
          <div className="grid grid-cols-2 gap-[1px] bg-[rgba(12,21,32,0.09)] border border-[rgba(12,21,32,0.09)] rounded-[14px] overflow-hidden mt-11 max-md:grid-cols-1">
            <div className="bg-white p-[1.85rem_2rem] flex gap-[1.2rem] items-start transition-colors duration-200 hover:bg-[#F0F5FA]">
              <div className="font-montserrat text-[1.4rem] font-bold text-[#E2EBF5] shrink-0 leading-none min-w-[2rem] transition-colors duration-200">01</div>
              <div>
                <div className="text-[0.93rem] font-semibold text-[#0C1520] mb-[0.3rem]">Trailer Restraint Interlock</div>
                <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Robot will not enter unless trailer restraint is confirmed — prevents trailer drift during operation.</div>
              </div>
            </div>
            <div className="bg-white p-[1.85rem_2rem] flex gap-[1.2rem] items-start transition-colors duration-200 hover:bg-[#F0F5FA]">
              <div className="font-montserrat text-[1.4rem] font-bold text-[#E2EBF5] shrink-0 leading-none min-w-[2rem] transition-colors duration-200">02</div>
              <div>
                <div className="text-[0.93rem] font-semibold text-[#0C1520] mb-[0.3rem]">Human Detection Inside Trailer</div>
                <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">LiDAR-based presence detection triggers immediate safe stop if any person enters the active trailer.</div>
              </div>
            </div>
            <div className="bg-white p-[1.85rem_2rem] flex gap-[1.2rem] items-start transition-colors duration-200 hover:bg-[#F0F5FA]">
              <div className="font-montserrat text-[1.4rem] font-bold text-[#E2EBF5] shrink-0 leading-none min-w-[2rem] transition-colors duration-200">03</div>
              <div>
                <div className="text-[0.93rem] font-semibold text-[#0C1520] mb-[0.3rem]">Front & Rear Safety Scanners</div>
                <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Continuous 360° monitoring. Zone-based speed reduction and full stop on obstacle detection.</div>
              </div>
            </div>
            <div className="bg-white p-[1.85rem_2rem] flex gap-[1.2rem] items-start transition-colors duration-200 hover:bg-[#F0F5FA]">
              <div className="font-montserrat text-[1.4rem] font-bold text-[#E2EBF5] shrink-0 leading-none min-w-[2rem] transition-colors duration-200">04</div>
              <div>
                <div className="text-[0.93rem] font-semibold text-[#0C1520] mb-[0.3rem]">Emergency Stop System</div>
                <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Physical E-stops plus remote capability. Safe Torque Off (STO) on all drive systems.</div>
              </div>
            </div>
            <div className="bg-white p-[1.85rem_2rem] flex gap-[1.2rem] items-start transition-colors duration-200 hover:bg-[#F0F5FA]">
              <div className="font-montserrat text-[1.4rem] font-bold text-[#E2EBF5] shrink-0 leading-none min-w-[2rem] transition-colors duration-200">05</div>
              <div>
                <div className="text-[0.93rem] font-semibold text-[#0C1520] mb-[0.3rem]">Dock Leveler Status Check</div>
                <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Deployment confirmed before entry. Dock plate condition monitored throughout traversal.</div>
              </div>
            </div>
            <div className="bg-white p-[1.85rem_2rem] flex gap-[1.2rem] items-start transition-colors duration-200 hover:bg-[#F0F5FA]">
              <div className="font-montserrat text-[1.4rem] font-bold text-[#E2EBF5] shrink-0 leading-none min-w-[2rem] transition-colors duration-200">06</div>
              <div>
                <div className="text-[0.93rem] font-semibold text-[#0C1520] mb-[0.3rem]">Auto-Stop on System Fault</div>
                <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Automatic safe stop on localization loss, network drop, battery low, or any safety sensor fault.</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* DEPLOYMENT & CHARGING */}
      <section className="py-[6.5rem] px-14 max-w-[1320px] mx-auto max-md:py-16 max-md:px-6" id="deployment">
        <div>
          <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Deployment Approach</div>
          <h2 className="font-montserrat text-[clamp(2rem,3.5vw,2.85rem)] font-bold leading-[1.08] text-[#0C1520] tracking-[-0.025em]">Up and running<br /><em className="not-italic text-[#0088CC]">in hours — not months.</em></h2>
          <p className="text-base text-[#64748B] leading-[1.75] max-w-[520px] mt-3.5">TRail is positioned for low-disruption pilot deployments, with site mapping, WMS coordination, safety validation, and operator training planned as part of commissioning.</p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-12 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="border border-[rgba(12,21,32,0.09)] rounded-[14px] p-7 bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_4px_20px_rgba(0,174,239,0.08)]">
            <div className="font-montserrat text-[2.2rem] font-extrabold text-[#0088CC] leading-none mb-2">Phased</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.4rem]">Pilot Deployment</div>
            <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Assess dock geometry, validate pallet conditions, map operating zones, connect to WMS/WES where required, and commission through a controlled pilot process.</div>
          </div>
          <div className="border border-[rgba(12,21,32,0.09)] rounded-[14px] p-7 bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_4px_20px_rgba(0,174,239,0.08)]">
            <div className="font-montserrat text-[2.2rem] font-extrabold text-[#0088CC] leading-none mb-2">8hr+</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.4rem]">Opportunity Charging</div>
            <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">TRail uses opportunity charging during staging cycles to stay ready all shift — reliably on call beyond 8 continuous hours of operation.</div>
          </div>
          <div className="border border-[rgba(12,21,32,0.09)] rounded-[14px] p-7 bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_4px_20px_rgba(0,174,239,0.08)]">
            <div className="font-montserrat text-[2.2rem] font-extrabold text-[#0088CC] leading-none mb-2">Zero</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.4rem]">Infrastructure Changes</div>
            <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Designed to minimize infrastructure dependency. Final requirements are confirmed after dock assessment, pallet audit, and safety review.</div>
          </div>
          <div className="border border-[rgba(12,21,32,0.09)] rounded-[14px] p-7 bg-white transition-all duration-200 hover:border-[rgba(0,174,239,0.18)] hover:shadow-[0_4px_20px_rgba(0,174,239,0.08)]">
            <div className="font-montserrat text-[2.2rem] font-extrabold text-[#0088CC] leading-none mb-2">80%</div>
            <div className="font-montserrat text-[0.97rem] font-bold text-[#0C1520] mb-[0.4rem]">Less Manual Driving</div>
            <div className="font-inter text-[0.83rem] text-[#64748B] leading-[1.6]">Redeploy dock operators to higher-value warehouse roles. TRail handles every unloading cycle — no human needed at the dock.</div>
          </div>
        </div>

        <div className="bg-[#0C1520] rounded-[14px] p-[2rem_2.5rem] mt-12 flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
          <div className="w-12 h-12 rounded-[10px] bg-[rgba(0,174,239,0.15)] border border-[rgba(0,174,239,0.25)] flex items-center justify-center text-[1.4rem] shrink-0">🏆</div>
          <div>
            <div className="font-montserrat text-[1.05rem] font-bold text-white mb-[0.3rem]">Designed to reduce operator dependency from the first pallet to the last.</div>
            <div className="font-inter text-[0.88rem] text-[rgba(255,255,255,0.5)] leading-[1.6]">TRail is positioned as a complete-cycle autonomous trailer unloading concept, with exception handling, dock interlocks, and controlled validation during pilot deployment.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0C1520] py-[6.5rem] px-14 relative overflow-hidden max-md:py-16 max-md:px-6" id="contact">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,174,239,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.03) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="relative z-[1] max-w-[1320px] mx-auto grid grid-cols-[1fr_auto] gap-12 items-center max-md:grid-cols-1">
          <div>
            <div className="font-mono text-[0.72rem] font-medium tracking-[0.13em] uppercase text-[#0088CC] flex items-center gap-2.5 mb-3.5 before:content-[''] before:w-7 before:h-[1.5px] before:bg-[#00AEEF]">Get Started</div>
            <h2 className="font-montserrat text-[clamp(2rem,3vw,2.8rem)] font-bold text-white leading-[1.1] mb-3.5">Ready to automate<br /><em className="not-italic text-[#00AEEF]">your trailer dock?</em></h2>
            <p className="text-[0.98rem] text-[rgba(255,255,255,0.5)] max-w-[520px] leading-[1.72]">We work with 3PL operators, retail DCs, and manufacturers globally. Talk to our team about a pilot deployment at your facility.</p>
          </div>
          <div className="flex flex-col gap-3.5 items-center shrink-0 max-md:flex-row">
            <a href="mailto:info@anscer.com" className="bg-[#00AEEF] text-[#0C1520] px-8 py-[15px] rounded-full font-bold text-[0.92rem] no-underline inline-flex items-center gap-2 whitespace-nowrap transition-all duration-200 hover:bg-[#33C3F5] hover:-translate-y-0.5">
              Request a Pilot
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="https://anscer.com" className="text-[rgba(255,255,255,0.5)] no-underline text-[0.85rem] font-medium flex items-center gap-[5px] transition-colors duration-200 whitespace-nowrap hover:text-white">
              Visit anscer.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
