import { Suspense } from "react";
import Loading from "./components/Loading";
import Routing from "./routing/Routing";

// Sahifalarni lazy load qilish


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routing/>
    </Suspense>
  );
}

export default App;
