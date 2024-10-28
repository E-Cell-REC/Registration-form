import { Separator } from "@/components/ui/separator";
import RegistrationForm from "./registration-form";
import Image from "next/image";
import Illuminate from "@/app/images/illuminate_2024.pdf.png";

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
      <div className="relative space-y-6 max-w-[640px] mx-auto my-10 p-4 bg-white bg-opacity-60 z-10 backdrop-blur-lg rounded-lg">
        <div>
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
