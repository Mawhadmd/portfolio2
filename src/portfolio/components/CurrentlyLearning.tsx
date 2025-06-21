import React from 'react';

const CurrentlyLearning = () => {
    return (
        <section className="w-full" aria-labelledby="learning-section">
            <h2
              id="learning-section"
              className="text-accent text-xl font-bold mb-1 text-left"
            >
              Currently Learning
            </h2>
            <p className="text-Muted text-xs mb-2 text-left">
              A mix of professional and personal interests I&apos;m exploring right
              now
            </p>
            <div
              className="flex p-2 flex-wrap gap-2 mt-2 items-center justify-center"
              aria-label="Currently learning technologies"
            >
              {[
          
                "AWS",
                "Kubernetes",
                "Next JS Advanced",
                "SEO for Next.js",
                "Building new projects",
                
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20 ${
                    tech === "Cooking ☕" ? "animate-pulse" : ""
                  }`}
                  aria-label={`Currently learning ${tech}`}
                >
                  {tech === "Cooking ☕" ? (
                    <span className="inline-flex items-center gap-1">
                      Cooking
                      <span className="animate-bounce">☕</span>
                    </span>
                  ) : (
                    tech
                  )}
                </span>
              ))}
            </div>
          </section>
    );
}

export default CurrentlyLearning;
