import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Members from "../components/Members";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PanchayatPage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/panchayat/${slug}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Header name={data.name} />
      <About about={data.about} />
      <Gallery gallery={data.gallery} />
      <News news={data.news} />
      <Members members={data.members} />
      <Contact contact={data.contact} />
      <Footer social={data.social} />
    </>
  );
}
