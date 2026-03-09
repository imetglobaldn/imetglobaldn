import React, { useState, useEffect } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { Country, City, State } from "country-state-city";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  role: z.enum([
    "Student in High School",
    "Pursuing Graduation",
    "Pursuing PG",
    "Working Professional (Junior to Mid level)",
    "Working Professional (C-level)",
    "Entrepreneur",
    "Content Creator",
    "Self employed Professionals",
  ], { required_error: "Please select your role" }),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  organization: z.string().min(1, "Organization is required"),
  yearsOfExperience: z.string().optional(),
  socialProfile: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface Option {
  value: string;
  label: string;
}

const CompactContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);
  const [selectedState, setSelectedState] = useState<Option | null>(null);
  const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  const countries: Option[] = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry.value) || [];
      const stateOptions: Option[] = countryStates.map((state) => ({
        value: state.isoCode,
        label: state.name,
      }));
      setStates(stateOptions);
      setSelectedState(null);
      setSelectedCity(null);
      setCities([]);
    } else {
      setStates([]);
      setSelectedState(null);
      setSelectedCity(null);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const countryCities = City.getCitiesOfState(selectedCountry.value, selectedState.value) || [];
      const cityOptions: Option[] = countryCities.map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(cityOptions);
    } else {
      setCities([]);
    }
  }, [selectedCountry, selectedState]);

  useEffect(() => {
    if (selectedCountry) {
      setValue("country", selectedCountry.label);
    }
    if (selectedState) {
      setValue("state", selectedState.label);
    }
    if (selectedCity) {
      setValue("city", selectedCity.label);
    }
  }, [selectedCountry, selectedState, selectedCity, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setLoading(true);
    setSubmissionStatus({ success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmissionStatus({ success: true, message: "Thank you for submitting your details, we will get back to you shortly." });
      } else {
        setSubmissionStatus({ success: false, message: result.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-[#f3f4f6] rounded-lg w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 "
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder=""
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.name ? "border-red" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            placeholder=""
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.email ? "border-red" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            placeholder=""
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.phone ? "border-red" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-black">
            I am a
          </label>
          <select
            id="role"
            {...register("role")}
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.role ? "border-red" : "border-gray-300"
            }`}
          >
            <option value="">Select your role</option>
            {formSchema.shape.role.options.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-red text-xs mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country *
          </label>
          <Select
            id="country"
            options={countries}
            value={selectedCountry}
            onChange={(option) => {
              setSelectedCountry(option);
              setSelectedState(null);
              setSelectedCity(null);
            }}
            className="mt-1 text-black font-normal text-lg"
            placeholder="Select country"
            isSearchable
          />
          {errors.country && (
            <p className="mt-1 text-sm text-red">{errors.country.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State *
          </label>
          <Select
            id="state"
            options={states}
            value={selectedState}
            onChange={(option) => {
              setSelectedState(option);
              setSelectedCity(null);
            }}
            className="mt-1 text-black font-normal text-lg"
            placeholder="Select state"
            isSearchable
            isDisabled={!selectedCountry}
          />
          {errors.state && (
            <p className="mt-1 text-sm text-red">{errors.state.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City *
          </label>
          <Select
            id="city"
            options={cities}
            value={selectedCity}
            onChange={(option) => setSelectedCity(option)}
            className="mt-1 text-black font-normal text-lg"
            placeholder="Select city"
            isSearchable
            isDisabled={!selectedState}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red">{errors.city.message}</p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-black"
          >
            Current Institute/Organization *
          </label>
          <input
            id="organization"
            {...register("organization")}
            placeholder=""
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.organization ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.organization && (
            <p className="text-red text-xs mt-1">{errors.organization.message}</p>
          )}
        </div>
        {/* Years of Experience */}
        <div>
          <label
            htmlFor="yearsOfExperience"
            className="block text-sm font-medium text-black"
          >
            Years of Experience (Optional)
          </label>
          <input
            id="yearsOfExperience"
            {...register("yearsOfExperience")}
            placeholder=""
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.yearsOfExperience ? "border-red" : "border-gray-300"
            }`}
          />
          {errors.yearsOfExperience && (
            <p className="text-red-500 text-xs mt-1">
              {errors.yearsOfExperience.message}
            </p>
          )}
        </div>

        {/* Social Profile */}
        <div>
          <label htmlFor="socialProfile" className="block text-sm font-medium text-black">
            Social Profile (Optional)
          </label>
          <input
            id="socialProfile"
            {...register("socialProfile")}
            placeholder=""
            className={`w-full mt-1 p-2 border rounded-lg text-sm text-black ${
              errors.socialProfile ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.socialProfile && (
            <p className="text-red text-xs mt-1">{errors.socialProfile.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 w-full">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue hover:bg-red text-white px-4 py-2 rounded-lg w-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Submission Message */}
        {submissionStatus.message && (
          <div className="sm:col-span-2 ">
            <p
              className={`mt-4 text-sm ${
                submissionStatus.success ? "text-green-500" : "text-red"
              }`}
            >
              {submissionStatus.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CompactContactForm;
