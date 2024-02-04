import supabase, { supabaseUrl } from "./supabase";

export async function getPosts() {
  let { data, error } = await supabase.from("posts").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function insertPost(newPost) {
  const imageName = `${Math.random()}-${newPost.image?.name}`.replaceAll(
    "/",
    "",
  );
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/postImages/${imageName}`;

  let { data, error } = await supabase
    .from("posts")
    .insert([{ ...newPost, image: imageUrl }])
    .select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  if (!newPost.image) return data;

  const { storageError } = await supabase.storage
    .from("postImages")
    .upload(imageName, newPost.image);

  if (storageError) {
    console.error(storageError);
    await supabase.from("posts").delete().eq("id", data.id);
  }
  return data;
}

export async function deletePost(id) {
  let { data, error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}
