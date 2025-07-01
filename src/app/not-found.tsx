// app/not-found.tsx  OR  pages/404.tsx
"use client"; // only for app router

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-red-500 mb-4"
      >
        <AlertTriangle size={64} strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        className="text-5xl font-bold mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg text-muted-foreground mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button asChild>
          <Link href="/">← Go back home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
