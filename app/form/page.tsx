import { Separator } from "@/components/ui/separator";
import RegistrationForm from "./registration-form";

const FormPage = () => {
  return (
    <div className="space-y-6 max-w-[640px] mx-auto mt-10">
      <div>
        <h2 className="text-2xl font-semibold my-2">Register for Eureka!</h2>
        <p className="text-sm text-muted-foreground">
          Fill out this form to register for Eureka, the biggest event for
          student entrepreneurs, proudly presented by the{" "}
          <span className="text-foreground font-medium">ECell REC.</span>
        </p>
      </div>
      <Separator />
      <RegistrationForm />
    </div>
  );
};

export default FormPage;
