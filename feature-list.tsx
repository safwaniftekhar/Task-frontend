"use client"

import React from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

interface Feature {
  id: number
  code: string
  name: string
  parent_id: number
  is_premium: number
  children: Feature[]
}

const featureList: Feature[] = [
  {
    id: 1,
    code: "BDG-0011",
    name: "Budget",
    parent_id: 0,
    is_premium: 0,
    children: [],
  },
  {
    id: 8,
    code: "OP-BAL-190",
    name: "Opening balance",
    parent_id: 0,
    is_premium: 0,
    children: [],
  },
  {
    id: 9,
    code: "COA-1109",
    name: "Chart Of Accounts ",
    parent_id: 0,
    is_premium: 0,
    children: [
      {
        id: 18,
        code: "Mo-Close-112",
        name: "Month open & Closing",
        parent_id: 9,
        is_premium: 0,
        children: [],
      },
      {
        id: 22,
        code: "DS-1101",
        name: "Data Security",
        parent_id: 9,
        is_premium: 0,
        children: [],
      },
    ],
  },
  {
    id: 20,
    code: "CP-976",
    name: "Cash Payment",
    parent_id: 0,
    is_premium: 0,
    children: [
      {
        id: 21,
        code: "BR-098-0",
        name: "Bank Receive",
        parent_id: 20,
        is_premium: 0,
        children: [],
      },
    ],
  },
  {
    id: 33,
    code: "ERP-0838775",
    name: "Master Data",
    parent_id: 0,
    is_premium: 0,
    children: [],
  },
]

const FeatureItem: React.FC<{ feature: Feature; level: number }> = ({ feature, level }) => {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const hasChildren = feature.children && feature.children.length > 0

  return (
    <div className="w-full">
      <div
        className={`
          flex items-center p-3 hover:bg-gray-50 rounded-md
          ${level === 0 ? "bg-gray-100 font-medium" : "bg-white"}
        `}
        style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
      >
        {hasChildren ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        ) : (
          <div className="w-6 mr-2"></div>
        )}

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span>{feature.name}</span>
            <span className="text-xs text-gray-500">{feature.code}</span>
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="ml-2 border-l-2 border-gray-200">
          {feature.children.map((child) => (
            <FeatureItem key={child.id} feature={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FeatureList() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Feature List</h2>
      <div className="space-y-1">
        {featureList.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} level={0} />
        ))}
      </div>
    </div>
  )
}
