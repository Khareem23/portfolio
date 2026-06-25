import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="bg-[#f7f8fc] px-0 pb-20 pt-28 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 xl:max-w-[70vw] xl:px-0">
        <div className="grid grid-cols-1 items-start gap-14 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.95fr)] xl:gap-16">
          <div className="max-w-[980px] pt-4">
            <div className="text-[0.84rem] font-bold uppercase tracking-[0.23em] text-blue-700 md:text-[0.92rem]">
              Software Engineering • Product UI/UX • AI Systems Evaluation & Integration
            </div>

            <h1 className="mt-8 text-[3.52rem] font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#0f172a] sm:text-[4.4rem] md:text-[5.65rem] lg:text-[5.65rem] xl:text-[5.65rem]">
              Olayinka U.
              <br />
              Kareem
            </h1>

            <div className="mt-10 max-w-[1080px] space-y-6 text-[1.01rem] leading-[1.6] text-slate-600 md:text-[1.28rem]">
              <p>
                <span className="bg-sky-200/90 px-1 py-1 box-decoration-clone">
                  Software Engineering, Product Design/UX, and AI Systems Evaluation Specialist
                  with 10+ years of combined experience across .Net, C#, Node, Javascript, Python
                  development, full-stack applications, user-focused digital workflows, and LLM
                  evaluation.
                </span>
              </p>
              <p className="max-w-[980px]">
                <span className="bg-sky-200/90 px-1 py-1 box-decoration-clone">
                  I evaluate, build, and improve digital products by combining software engineering
                  discipline, UX judgment, structured feedback systems, and AI interaction quality
                  assessment.
                </span>
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-[0.97rem] font-semibold text-white transition-colors hover:bg-blue-700 md:text-[1.05rem]"
              >
                View Portfolio
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="mailto:kareem.olayinka23@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-[0.97rem] font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 md:text-[1.05rem]"
              >
                Email Me
              </a>
              <a
                href="https://github.com/Khareem23"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-[0.97rem] font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 md:text-[1.05rem]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/olayinka-kareem-5575235a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-[0.97rem] font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 md:text-[1.05rem]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)] md:p-10">
            <h2 className="text-[1.35rem] font-bold tracking-[-0.04em] text-slate-900 md:text-[1.35rem] md:leading-none">
              Portfolio Snapshot
            </h2>

            <p className="mt-6 max-w-[26rem] text-[0.97rem] leading-[1.7] text-slate-500 md:text-[1.06rem]">
              Combining software engineering, product thinking, UX evaluation, and AI systems
              analysis to build and assess reliable digital experiences.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-4 md:p-5">
                <div className="text-[2.46rem] font-black tracking-[-0.06em] text-blue-700 md:text-[2.82rem]">
                  10+
                </div>
                <p className="mt-2 text-[0.86rem] leading-6 text-slate-500 md:text-[0.9rem]">
                  Years combined experience
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-4 md:p-5">
                <div className="text-[2.46rem] font-black tracking-[-0.06em] text-blue-700 md:text-[2.82rem]">
                  AI
                </div>
                <p className="mt-2 text-[0.86rem] leading-6 text-slate-500 md:text-[0.9rem]">
                  LLM evaluation &amp; RLHF-style review
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-4 md:p-5">
                <div className="text-[2.46rem] font-black tracking-[-0.06em] text-blue-700 md:text-[2.82rem]">
                  UX
                </div>
                <p className="mt-2 text-[0.86rem] leading-6 text-slate-500 md:text-[0.9rem]">
                  User journeys &amp; workflow critique
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-4 md:p-5">
                <div className="text-[2.46rem] font-black tracking-[-0.06em] text-blue-700 md:text-[2.82rem]">
                  Code
                </div>
                <p className="mt-2 text-[0.86rem] leading-6 text-slate-500 md:text-[0.9rem]">
                  Python, JavaScript, SQL
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-[0.84rem] font-semibold text-blue-800 md:text-[0.88rem]">
                Software Engineering
              </span>
              <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-[0.84rem] font-semibold text-blue-800 md:text-[0.88rem]">
                Product UI/UX
              </span>
              <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-[0.84rem] font-semibold text-blue-800 md:text-[0.88rem]">
                AI Systems
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
