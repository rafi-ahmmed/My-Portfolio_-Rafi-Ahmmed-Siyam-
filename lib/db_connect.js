import { MongoClient, ServerApiVersion } from 'mongodb';



export default async function dbConnect(collectionName = '') {
   const uri = process.env.MONGO_URI;
   try {
      const client = new MongoClient(uri, {
         serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
         },
      });
      await client.connect();
      return client.db(process.env.DB_NAME).collection(collectionName);
   } catch (err) {
      console.error('Database Error', err);
      throw err;
   }
}
