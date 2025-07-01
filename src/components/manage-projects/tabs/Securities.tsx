// components/SecuritySettings.tsx
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Fingerprint,
  UserX,
  Link2,
  GaugeCircle,
} from "lucide-react";

type OptionGroup = {
  label: string;
  icon: React.ReactNode;
  options: {
    label: string;
    value: string;
  }[];
};

const OPTIONS: OptionGroup[] = [
  {
    label: "Geolocation & Device Fingerprinting",
    icon: <Globe className="w-4 h-4 text-sky-600" />,
    options: [
      { label: "Geo Location", value: "geo" },
      { label: "Mobile Study", value: "mobile" },
      { label: "Tablet Study", value: "tablet" },
      { label: "Desktop Study", value: "desktop" },
      { label: "Proxy/VPN", value: "vpn" },
      { label: "Unique IP", value: "ip" },
      { label: "PII", value: "pii" },
    ],
  },
  {
    label: "Threat Protection",
    icon: <Shield className="w-4 h-4 text-red-500" />,
    options: [
      { label: "RD Low", value: "rdlow" },
      { label: "RD Medium", value: "rdmed" },
      { label: "RD High", value: "rdhigh" },
      { label: "RD Custom", value: "rdcustom" },
    ],
  },
  {
    label: "Survey Protection",
    icon: <GaugeCircle className="w-4 h-4 text-purple-600" />,
    options: [
      { label: "Exclude", value: "exclude" },
      { label: "Url Protection", value: "url" },
      { label: "Speeder", value: "speeder" },
    ],
  },
];

export default function SecuritySettings() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
      {/* Left - Settings */}
      <div className="md:col-span-2 space-y-6">
        {OPTIONS.map((group) => (
          <Card key={group.label} className="p-4 shadow-sm">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold">
                {group.icon}
                {group.label}
              </div>
              <div className="flex flex-wrap gap-4">
                {group.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2">
                    <Checkbox
                      checked={selected.includes(opt.value)}
                      onCheckedChange={() => toggleOption(opt.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        <div className="flex justify-end gap-2">
          <Button variant="outline">Save draft</Button>
          <Button>Update</Button>
        </div>
      </div>

      {/* Right - Summary */}
      <Card className="px-4 shadow-sm">
        <CardContent className="space-y-4 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Feasibility:</span>
            <span className="text-blue-600 font-medium">928</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>CPI:</span>
            <span className="text-green-600 font-medium">$928</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Field:</span>
            <span className="text-green-600 font-medium">928</span>
          </div>
          <hr />
          <div>
            <div className="font-semibold text-sm mb-1">
              Geolocation & Device
            </div>
            <div className="text-muted-foreground">
              {selected.includes("tablet") && "Tablet Study, "}
              {selected.includes("desktop") && "Desktop Study"}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm mb-1">Threat Protection</div>
            <div className="text-muted-foreground">
              {["rdhigh", "rdcustom"]
                .filter((v) => selected.includes(v))
                .map((v) => v.toUpperCase().replace("RD", "RD "))
                .join(", ")}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm mb-1">Survey Protection</div>
            <div className="text-muted-foreground">
              {selected.includes("speeder") && "Speeder"}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
