export const uploadImage = async (image) => {
   const imgData = new FormData();
   imgData.append('image', image);

   try {
      const res = await fetch(
         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
         {
            method: 'POST',
            body: imgData,
         }
      );
      const data = await res.json();
      console.log(data.data.display_url);
      return data.data.display_url;
   } catch (err) {
      return err;
   }
};
