import React, { useState } from "react";
import { supabase } from "@/lib/supbaseClient";

export const useContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("Message").insert([formData]);

    setLoading(false);
    if (error) {
      alert("Failed to send message.");
      console.error(error);
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    loading,
    success,
  };
};
