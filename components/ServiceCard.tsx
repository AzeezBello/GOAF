"use client";

import { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function ServiceCard({
  title,
  desc,
  icon,
  className,
}: {
  title: string;
  desc: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-6 border rounded-xl hover:shadow-xl transition duration-300 bg-white group cursor-pointer",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 text-2xl group-hover:bg-slate-200 transition">
          {icon}
        </div>

        <h4 className="text-xl font-semibold tracking-tight">
          {title}
        </h4>
      </div>

      <p className="mt-4 text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
