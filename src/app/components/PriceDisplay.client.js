"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { countryCurrencyMap, formatCurrency } from "@/utils/currency";

export default function PriceDisplay() {
  const [priceObj, setPriceObj] = useState({ price: 1000, currency: "USD" });

  useEffect(() => {
    const country = Cookies.get("country") || "US";
    const mapped = countryCurrencyMap[country] || { price: 1000, currency: "USD" };
    setPriceObj(mapped);
  }, []);

  return (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-3xl md:text-4xl font-bold text-emerald-400">
        {formatCurrency({ price: priceObj.price, currency: priceObj.currency })}
      </span>
      <span className="text-xs">· core Steeze Store setup</span>
    </div>
  );
}
