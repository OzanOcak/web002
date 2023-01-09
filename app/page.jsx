"use client";
import { Inter } from "@next/font/google";
import Name from "../components/Name";
import { Provider } from "react-redux";
import store from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex-1">
        home page
        <div>
          <Name />
        </div>
      </main>
    </Provider>
  );
}
