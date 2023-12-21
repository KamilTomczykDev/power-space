import supabase from "./supabase";

export async function getProfiles() {
  let { data, error } = await supabase.from("profiles").select("*");

  console.log(data);

  if (error) throw new Error(Error.message);

  return data;
}

export async function getProfile(id) {
  let { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id);

  console.log(data);

  if (error) throw new Error(Error.message);

  return data;
}
