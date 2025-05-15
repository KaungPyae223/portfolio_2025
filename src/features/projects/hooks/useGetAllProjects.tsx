import { useEffect, useState } from "react";
import { supabase } from "@/lib/supbaseClient";

export const useGetAllProjects = () => {
  type ProjectItem = {
    id: number;
    image: string;
    name: string;
    description: string;
    frontend: string;
    backend: string;
    demo: string;
    tech: string;
  };

  const [data, setData] = useState<ProjectItem[]>([]);

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
