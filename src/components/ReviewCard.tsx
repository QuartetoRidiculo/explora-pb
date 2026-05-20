import { Star } from "lucide-react";
import type { Review } from "../types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl p-5 border border-gray-200/50 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center rounded-full">
          <div className="bg-emerald-500/10 text-emerald text-sm font-semibold">
            {review.avatar}
          </div>
        </div>
        <div>
          <p className="font-semibold">{review.user}</p>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
          />
        ))}
      </div>
      <p className=" text-gray-500">{review.text}</p>
    </div>
  );
}
