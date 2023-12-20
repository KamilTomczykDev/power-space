import supabase from "./supabase";

export async function getCurrentProfile() {
  const { data: profile, error } = await supabase.from("profiles").select();

  console.log(profile);

  if (error) throw new Error(Error.message);

  return profile, error;
}
