import React from "react";
import { Footer, Header, MapView } from "../components";


export function Home() {

  return (
    <section>
      <Header />
      <Footer style={{zIndex: "1", position: "relative"}} />
      <MapView />
    </section>
  );
}
