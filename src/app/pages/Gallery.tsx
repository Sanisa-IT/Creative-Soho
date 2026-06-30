import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3ODI0ODE1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Creative studio workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwYnVzaW5lc3MlMjBldmVudHxlbnwxfHx8fDE3ODI0ODE2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Industry conference and event",
  },
  {
    src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgyNDgxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Design workshop collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    caption: "Networking session",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    caption: "Creative panel discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    caption: "Mentorship in action",
  },
];

export function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4 font-medium">
            Gallery
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-8">
            Moments from The Creative Soho
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            A look back at our events, workshops, and the community that makes
            it all possible.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.src}
              onClick={() => setActiveImage(image.src)}
              className="relative aspect-square overflow-hidden bg-gray-200 group"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium text-left">
                  {image.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl leading-none"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <ImageWithFallback
            src={activeImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
