"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Users, Sliders, PieChart, List, Eye, RefreshCcw } from "lucide-react";

const ethnicities = ["Black", "White", "Arab", "Latino"];
const ageRanges = ["20-30", "30-40", "40-50", "50-60"];
const maritalStatuses = ["Single", "Married", "Divorced"];

export default function AudienceQuota() {
  const [selectedEthnicities, setSelectedEthnicities] = useState(ethnicities);
  const [quotaSize, setQuotaSize] = useState(82);

  return (
    <div className="flex w-full  bg-accent text-sm">
      {/* Left Sidebar */}
      <aside className="w-64 border-r bg-background p-4 ">
        <h4 className="text-xs font-semibold text-muted-foreground mb-2">
          Demographics
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Users size={16} /> Gender
          </li>
          <li className="flex items-center gap-2">
            <List size={16} /> Ethnicity
          </li>
          <li className="flex items-center gap-2">
            <Sliders size={16} /> Marital Status
          </li>
          <li className="flex items-center gap-2">
            <PieChart size={16} /> Household Income
          </li>
        </ul>
        <Separator className="my-4" />
        <h4 className="text-xs font-semibold text-muted-foreground mb-2">
          Audience
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Users size={16} /> Gender
          </li>
          <li className="flex items-center gap-2">
            <List size={16} /> Ethnicity
          </li>
          <li className="flex items-center gap-2">
            <Sliders size={16} /> Marital Status
          </li>
          <li className="flex items-center gap-2">
            <PieChart size={16} /> Household Income
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Tabs */}
        <Tabs defaultValue="audience1">
          <TabsList className="gap-2 bg-muted px-2 py-1 rounded-lg">
            <TabsTrigger value="audience1">Audience 1 (600)</TabsTrigger>
            <TabsTrigger value="audience2">Audience 2 (600)</TabsTrigger>
            <TabsTrigger value="audience3">Audience 3 (600)</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Gender */}
        <div className="flex gap-6 items-center bg-background p-4 rounded-xl ">
          <Label className="text-muted-foreground text-sm w-20">Gender</Label>
          <div className="flex items-center gap-3">
            <Checkbox checked disabled /> <Label>Male</Label>
            <Checkbox checked disabled /> <Label>Female</Label>
          </div>
        </div>

        {/* Ethnicity Table */}
        <Card className=" border border-muted">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <List size={18} /> Ethnicity Breakdown
            </CardTitle>
            <Button variant="ghost" size="icon">
              <RefreshCcw size={16} />
            </Button>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b ">
                  <th className="p-3">Quota Name</th>
                  <th className="p-3">Quota Size</th>
                  <th className="p-3">Age Range</th>
                  <th className="p-3">Marital Status</th>
                  <th className="p-3 text-center">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {selectedEthnicities.map((ethnicity, index) => (
                  <tr key={index} className="border-b hover:bg-muted/20">
                    <td className="p-3 font-medium">{ethnicity}</td>
                    <td className="p-3">
                      <Input
                        value={quotaSize}
                        onChange={(e) => setQuotaSize(Number(e.target.value))}
                        className="w-20 text-center"
                      />
                    </td>
                    <td className="p-3">
                      <Select>
                        <SelectTrigger className="w-28">
                          <SelectValue placeholder="40-50" />
                        </SelectTrigger>
                        <SelectContent>
                          {ageRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3">
                      <Select>
                        <SelectTrigger className="w-28">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {maritalStatuses.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3 text-center text-green-600 font-semibold">
                      19.00%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">Save Draft</Button>
          <Button>Update</Button>
        </div>
      </main>

      {/* Preview Panel */}
      <aside className="w-72 border-l bg-background p-5 ">
        <h4 className="font-semibold text-sm mb-4">Preview</h4>
        <div className="mb-6">
          <Label className="text-xs">What’s your Gender?</Label>
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-2">
              <Checkbox id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="female" checked />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="others" />
              <Label htmlFor="others">Others</Label>
            </div>
          </div>
        </div>
        <div>
          <Label className="text-xs">
            How often do you use our product/service?
          </Label>
          <RadioGroup defaultValue="weekly" className="space-y-2 mt-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="daily" id="daily" />{" "}
              <Label htmlFor="daily">Daily</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="weekly" id="weekly" />{" "}
              <Label htmlFor="weekly">Weekly</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="monthly" id="monthly" />{" "}
              <Label htmlFor="monthly">Monthly</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="rarely" id="rarely" />{" "}
              <Label htmlFor="rarely">Rarely</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="never" id="never" />{" "}
              <Label htmlFor="never">Never</Label>
            </div>
          </RadioGroup>
        </div>
      </aside>
    </div>
  );
}
