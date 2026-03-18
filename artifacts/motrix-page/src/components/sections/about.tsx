export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <p>
            At Motrix, we are dedicated to advancing the capture and generation of expressive human motion in 3D, with parametric human body models as a unified representation. We study the full lifecycle of human motion: from large-scale motion datasets and robust pose and shape estimation across diverse visual inputs, to controllable, physically plausible motion synthesis.
          </p>
          <p>
            By bridging motion data, capture, and generation through shared representations and foundation models, Motrix aims to advance scalable, world-grounded human motion capture and generation across vision, graphics, and embodied AI.
          </p>
        </div>
      </div>
    </section>
  );
}
