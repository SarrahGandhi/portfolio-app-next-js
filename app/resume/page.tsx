import Navbar from "@/components/navbar/navbar";
import Resume from "@/components/resume/resume";
import Footer from "@/components/footer/footer";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <Resume />
        <Footer />
      </div>
    </>
  );
}
