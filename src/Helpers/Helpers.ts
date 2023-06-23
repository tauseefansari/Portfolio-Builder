import { PROJECT_NAME } from "./constants";

export const imagePath = (image: string) => {
  const env = import.meta.env.PROD ? `/${PROJECT_NAME}` : "";
  console.log(env, "ENV");
  return `${env}/assets/images/${image}`;
};
