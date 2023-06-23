import { PROJECT_NAME } from "Helpers/constants";

export const imagePath = (image: string) => {
  const env = import.meta.env.PROD ? `/${PROJECT_NAME}` : "";
  return `${env}/assets/images/${image}`;
};
