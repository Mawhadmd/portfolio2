import { CURRENTLYLEARNING } from '@/lib/constants';
import React from 'react';

const CurrentlyLearning = () => {
    return (
        <section className="w-full" aria-labelledby="learning-section">
            <h2
              id="learning-section"
       
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
              {CURRENTLYLEARNING.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-xs border-accent/50 bg-accent/10 text-accent rounded-md border  ${
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
