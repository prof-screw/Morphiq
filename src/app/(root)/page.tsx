//we moved this page.tsx for Home into root because we want to have the root layout for this homepage

import { connectToDatabase } from "@/lib/database/mongoose";




const Home = () => {
  connectToDatabase();
  return (
    <div>
      <p>
        Home
      </p>

    
    </div>
  );
}
 
export default Home;