import { Separator } from "@/components/ui/separator";
import RegistrationForm from "./registration-form";
import Image from "next/image";
import Illuminate from "@/app/images/illuminate_2024.pdf.png";
import EcellLogo from "@/app/images/EcellREClogo.png";

const FormPage = () => {
  return (
    <div className="relative overflow-hidden">
      <video
        src="/color-bg-video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative space-y-6 max-w-[640px] mx-auto my-10 p-4 bg-white rounded-lg">
        <div>
            <div className="flex items-center mb-4">
            <Image
              src={EcellLogo}
              alt="Ecell REC Logo"
              width={100}
              height={100}
              className="mr-4"
            />
            <h2 className="text-xl -ml-3">Presents</h2>
            </div>
          <div className="mb-5">
        <Image
          src={Illuminate}
          alt="Illuminate Workshop 2024"
          width={640}
          height={320}
          className="rounded-lg shadow-sm"
          layout="responsive"
        />
          </div>
          <h2 className="text-2xl font-semibold my-2">
            Register for the Illuminate Workshop!
          </h2>
          <p className="mb-4">
            Empowering the Next Generation of Changemakers, 
            organized by the Entrepreneurship Cell, IIT Bombay. 
            This workshop aims to create awareness about entrepreneurship, 
            covering crucial topics like Business Model Creation, Marketing, 
            Finance, and Startup Development. Attendees will benefit from 
            hands-on experience and sessions led by seasoned entrepreneurs and experts.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">🚀 Workshop Highlights</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Comprehensive 5-6 hour workshop</li>
              <li>Speaker sessions, case studies, and team activities</li>
              <li>Training on creating a Business Model Canvas (BMC)</li>
              <li>Insights into finance, MVP development, and pitching</li>
            </ul>
          </div>
            <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              <span className="font-semibold">Workshop Fee:</span> <span className="line-through text-red-500">₹799</span>(20% off) <span className="text-green-600">₹649</span> per student (inclusive of service tax, certification, and startup kit)
            </span>
            </div>
          <p className="text-sm text-muted-foreground">
        Fill out this form to register for the{" "}
        <span className="text-foreground">Illuminate Workshop</span>, the
        biggest event for student entrepreneurs, proudly presented by the{" "}
        <span className="text-foreground">ECell REC.</span>
          </p>
        </div>
        <Separator />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default FormPage;
