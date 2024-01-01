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

export async function updateProfileUsername(profileId, newUsername) {
  let { data, error } = await supabase
    .from("profiles")
    .update({ username: newUsername })
    .eq("id", profileId)
    .select();

  console.log(data);

  if (error) throw new Error(Error.message);

  return data;
}

export async function updateProfile(stats, id) {
  let { data, error } = await supabase
    .from("profiles")
    .update({ ...stats })
    .eq("id", id)
    .select();

  if (error) throw new Error(Error.message);

  console.log(stats, id);

  return data;
}
