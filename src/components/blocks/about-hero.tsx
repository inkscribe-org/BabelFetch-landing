import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "1M+",
    label: "Conversations Processed",
  },
  {
    value: "50+",
    label: "Languages Supported",
  },
  {
    value: "99.9%",
    label: "Accuracy Rate",
  },
  {
    value: "10K+",
    label: "Active Users",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming chaotic conversations into actionable insights
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            BabelFetch leverages Gemini SDK and API agents to organize,
            translate, summarize, and query your messaging history.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Instant messaging apps are great for communication, but they often
            lead to disorganized and overwhelming conversations. Important
            information gets buried, language barriers fragment communities, and
            spam increases cognitive load.
            <br />
            <br />
            BabelFetch solves this by combining the power of advanced AI models
            and modular API agents. Our agent-centric architecture enables
            seamless processing of user queries, delivering accurate and
            actionable results for intelligent messaging management.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
