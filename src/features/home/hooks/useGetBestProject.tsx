import { useEffect, useState } from "react";
import { supabase } from "@/lib/supbaseClient";

export const useGetBestProject = () => {
  type Project = {
    id: number;
    image: string;
    name: string;
    description: string;
    frontend: string;
    backend: string;
    demo: string;
    tech: string;
  };

  type BestProjectRecord = {
    Projects: Project[];
  };

  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("BestProjects")
        .select("Projects(*)");

      if (error) console.error("Supabase Error:", error);
      else {
        const flattened = (data as BestProjectRecord[]).flatMap(
          (item) => item.Projects
        );
        setData(flattened);
      }
    };

    fetchData();
  }, []);

  return data;
};
