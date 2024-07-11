import { useEffect, useState } from "react";
import { Dessert } from "../types";
import data from "../../data.json";

export default function useDesserts() {
  const [desserts, setDesserts] = useState<Dessert[]>([]);

  useEffect(() => {
    setDesserts(data);
  }, []);

  return desserts;
}
