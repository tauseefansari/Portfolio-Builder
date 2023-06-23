export const imagePath = (image: string) => {
  console.log(
    image,
    import.meta.env.PROD,
    `/assets/images/${image}`,
    "Test all images"
  );
  return `/assets/images/${image}`;
};
