import axios from "axios";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("params:", params.slug[0].toString());

  async function getData() {
    try {
      const id:string = params.slug[0].toString();
      const data = await axios.post("http://localhost:3000/api/user/getBlogs", {id});
      const body = await data.data;
      return body.data;
  
     
    } 
    catch(error){
      console.log("error: ",error)
    }
    }
    const body = await getData();
    return (
      <>
        {JSON.stringify(body)}
      </>
    )
    
  }
 

