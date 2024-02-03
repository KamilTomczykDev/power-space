import supabase from "./supabase";

export async function getPosts() {
  let { data, error } = await supabase.from("posts").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function insertPost(newPost) {
  let { data, error } = await supabase.from("posts").insert([newPost]).select();
  console.log(newPost, data);
  if (error) throw new Error(error.message);

  return data;
}

export async function deletePost(id) {
  let { data, error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}
