import { FiBookOpen} from "react-icons/fi";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-Primary via-Primary to-Secondary/10 relative overflow-hidden">
      {/* Main Content Loading */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header Skeleton */}
        {/* Blog Posts Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="group animate-pulse"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="bg-Primary/80 rounded-2xl p-6 space-y-4 border border-border/50">
                {/* Thumbnail skeleton */}
                <div className="h-48 bg-Secondary/80 rounded-xl"></div>

                {/* Category skeleton */}
                <div className="h-4 w-20 bg-Secondary/80 rounded-full"></div>

                {/* Title skeleton */}
                <div className="space-y-2">
                  <div className="h-6 bg-Secondary/80 rounded-lg"></div>
                  <div className="h-6 w-3/4 bg-Secondary/80 rounded-lg"></div>
                </div>

                {/* Content skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-Secondary/60 rounded"></div>
                  <div className="h-4 bg-Secondary/60 rounded"></div>
                  <div className="h-4 w-2/3 bg-Secondary/60 rounded"></div>
                </div>

                {/* Metadata skeleton */}
                <div className="flex items-center justify-between pt-4">
                  <div className="h-4 w-24 bg-Secondary/60 rounded"></div>
                  <div className="h-4 w-16 bg-Secondary/60 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-3 text-Text/70">
            <FiBookOpen className="w-5 h-5 animate-spin" />
            <span className="text-lg font-medium">Loading articles...</span>
          </div>
        </div>
      </main>
    </div>
  );
}
