import supabase from "./supabase";

export async function getProfiles({ filter }) {
  let query = supabase.from("profiles").select("*");

  // console.log(data);
  if (filter.queryKey.at(1).value === "juniors") query = query.lte("age", 23);
  if (filter.queryKey.at(1).value === "seniors") query = query.gte("age", 24);

  const { data, error } = await query;

  if (error) throw new Error(Error.message);

  return data;
}

export async function getProfile(id) {
  let { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id);

  if (error) throw new Error(Error.message);

  return data;
}

export async function updateProfileUsername(profileId, newUsername) {
  let { data, error } = await supabase
    .from("profiles")
    .update({ username: newUsername })
    .eq("id", profileId)
    .select();

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

  return data;
}
