import { PROJECT_NAME } from "./constants";

export const imagePath = (image: string) => {
  console.log(
    image,
    import.meta.env.PROD,
    `/assets/images/${image}`,
    `/${PROJECT_NAME}/assets/images/${image}`,
    "Test all images"
  );
  return `${import.meta.env.PROD && `/${PROJECT_NAME}`}/assets/images/${image}`;
};
