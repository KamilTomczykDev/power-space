import { rest } from "msw";
import supabase from "../../services/supabase";

export const handlers = [
  rest.get(supabase.from("profiles").select("*"), (req, res, ctx) => {
    return res(ctx.json({ isVisible: "true" }));
  }),
];
