import axios from "axios";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("params:", params.slug[0]);

  try {
    const id = params.slug[0].toString();
    const data = await axios.post("/user/getBlogs", { myServerParameterName: id });
    const body = await data.data;

    return (
      <div>
        {body}
      </div>
    );
  } catch (error) {
    console.error("Error in Server Components render:", error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}
