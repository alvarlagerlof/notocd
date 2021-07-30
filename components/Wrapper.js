import Navbar from "components/Navbar";
import Footer from "components/Footer";
import TopBar from "components/TopBar";

import { PlausibleProvider } from "../components/Plausible";

export default function Wrapper({ children }) {
  return (
    <PlausibleProvider>
      <TopBar />
      <div className="flex flex-col min-h-screen bg-secondary space-y-20 sm:space-y-24">
        <div className="flex-1 flex flex-col space-y-12 sm:space-y-24">
          <Navbar />

          <div className="space-y-12 w-full">{children}</div>
        </div>
        <Footer />
      </div>
    </PlausibleProvider>
  );
}
