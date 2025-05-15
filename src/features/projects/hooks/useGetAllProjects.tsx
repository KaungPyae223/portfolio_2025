import { useEffect, useState } from "react";
import { supabase } from "@/lib/supbaseClient";

export const useGetAllProjects = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Projects").select("*");

      if (error) console.error("Supabase Error:", error);
      else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return data;
};
