import { Separator } from "@/components/ui/separator";
import RegistrationForm from "./registration-form";

const FormPage = () => {
  return (
    <div className="space-y-6 max-w-[640px] mx-auto mt-10">
      <div>
        <h2 className="text-2xl font-semibold my-2">
          Register for the Illuminate Workshop!
        </h2>
        <p className="text-sm text-muted-foreground">
          Fill out this form to register for the{" "}
          <span className="text-foreground">Immluminate Workshop</span>, the
          biggest event for student entrepreneurs, proudly presented by the{" "}
          <span className="text-foreground">ECell REC.</span>
        </p>
      </div>
      <Separator />
      <RegistrationForm />
    </div>
  );
};

export default FormPage;
