import { useEffect, useState } from "react";
import { supabase } from "@/lib/supbaseClient";

export const useGetBestProject = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("BestProjects")
        .select("Projects(*)");

      if (error) console.error("Supabase Error:", error);
      else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return data;
};
