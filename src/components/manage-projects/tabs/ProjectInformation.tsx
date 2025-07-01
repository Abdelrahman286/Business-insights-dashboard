"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarIcon, MapPin, Target, BadgeDollarSign } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SurveyPage() {
  const [dateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-background  text-gray-800 ">
      {/* Left Side Combined Card */}
      <div className="col-span-1 md:col-span-2">
        <Card className="border shadow-sm ">
          <CardHeader className="pb-0  ">
            <div className="flex items-center gap-2">
              <Target className="text-blue-600 w-5 h-5" />
              <CardTitle className="text-base font-semibold text-blue-700">
                Survey Targeting
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="space-y-8 ">
            {/* Survey Targeting Fields */}
            <div className="grid grid-cols-3 gap-3">
              {[
                ["Project Title", "Enter project title"],
                ["Client Name", "Enter client name"],
                ["LOI Minutes", "e.g., 15", "number"],
                ["IR (%)", "e.g., 10", "number"],
                ["Sample Size", "e.g., 1000"],
                ["CPI", "e.g., 2.50"],
              ].map(([label, placeholder, type = "text"]) => (
                <div key={label} className="flex flex-col space-y-1">
                  <Label className="text-sm">{label}</Label>
                  <Input type={type} placeholder={placeholder} />
                </div>
              ))}

              <div className="flex flex-col space-y-1">
                <Label className="text-sm">Currency Code</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="egp">EGP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1">
                <Label className="text-sm">Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Geolocation Targeting */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-green-600 w-5 h-5" />
                <h2 className="text-base font-semibold text-green-700">
                  Geolocation Targeting
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col space-y-1">
                  <Label className="text-sm">Region</Label>
                  <Input placeholder="e.g., California" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label className="text-sm">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="eg">Egypt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1">
                  <Label className="text-sm">City</Label>
                  <Input placeholder="e.g., Los Angeles" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label className="text-sm">ZIP Code</Label>
                  <Input placeholder="e.g., 90210" />
                </div>
                <div className="col-span-2 flex flex-col space-y-1">
                  <Label className="text-sm">Upload File</Label>
                  <Input type="file" />
                </div>
              </div>
            </div>

            {/* Dates Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CalendarIcon className="text-red-600 w-5 h-5" />
                <h2 className="text-base font-semibold text-red-700">Dates</h2>
              </div>

              <Button
                variant="outline"
                className="w-fit text-sm gap-2"
                onClick={() => setDateVisible(!dateVisible)}
              >
                <CalendarIcon className="w-4 h-4" />
                {date ? (
                  <span>{date.toDateString()}</span>
                ) : (
                  <span>Select a Date</span>
                )}
              </Button>
              {dateVisible && (
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline">Save Draft</Button>
              <Button>Update</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Side: Summary */}
      <div className="col-span-1">
        <Card className="border shadow-sm">
          <CardHeader className="flex items-center gap-2">
            <BadgeDollarSign className="text-yellow-600 w-5 h-5" />
            <CardTitle className="text-base font-semibold text-yellow-700">
              Project Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-1 space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://picsum.photos/seed/survey/100"
                alt="Survey"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="text-sm font-medium">Product Info</h3>
                <Badge variant="secondary" className="text-xs my-2">
                  Active
                </Badge>
              </div>
            </div>

            <div className="text-sm space-y-2">
              {[
                ["Client Name", "David John"],
                ["Language", "English"],
                ["IR (%)", "01"],
                ["Sample Size", "27 x 82 x 82"],
                ["CPI", "28"],
                ["Click Quota", "28"],
                ["Currency", "USD"],
                ["Dates", "July 01, 2024 → July 06, 2023"],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b pb-1 last:border-none"
                >
                  <span className="font-medium text-gray-600">{key}:</span>
                  <span className="text-right">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
