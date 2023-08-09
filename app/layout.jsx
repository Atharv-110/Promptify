import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Promptify",
  description: "Discover, Share & Create AI-Driven Prompts",
};

const RootLayout = ({ children }) => (
  <>
    <html lang="en">
      <body>
        <Provider>
          <div className="main bg-primary-white"></div>
          <main className="app">
            <Nav />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  </>
);

export default RootLayout;
