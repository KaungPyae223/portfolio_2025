import { useEffect, useState } from "react";
import { supabase } from "@/lib/supbaseClient";

export const useGetBestProject = () => {
  type ProjectItem = {
    Projects: {
      id: number;
      image: string;
      name: string;
      description: string;
      frontend: string;
      backend: string;
      demo: string;
      tech: string;
    };
  };

  const [data, setData] = useState<{ Projects: ProjectItem[] }[]>([]);

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
