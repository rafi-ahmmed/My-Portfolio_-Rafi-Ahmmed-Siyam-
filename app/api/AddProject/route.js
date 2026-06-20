import dbConnect from '@/lib/db_connect';

export async function POST(req) {
   const project = await req.json();

   try {
      const db = await dbConnect('projects');
      const result = await db.insertOne(project);
      console.log(result);
      return new Response(JSON.stringify(result));
   } catch (err) {
      return new Response(JSON.stringify(err))
   }
}
