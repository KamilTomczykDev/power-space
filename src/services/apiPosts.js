import supabase from "./supabase";

export async function getPosts() {
  let { data, error } = await supabase.from("posts").select("*");

  if (error) throw new Error(error.message);

  return data;
}
