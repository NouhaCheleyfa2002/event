"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

type PackageType = "group" | "student" | "professional";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType: PackageType;
  packageName: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  packageType,
  packageName,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    studyLevel: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase
        .from("participants")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            university: formData.university || null,
            study_level: formData.studyLevel || null,
            package_type: packageType,
          },
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          university: "",
          studyLevel: "",
        });
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#021326] border border-white/[0.1] rounded-[28px] shadow-[0_0_80px_rgba(20,232,240,0.3)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-[#F5F5F5] mb-2">
              Register for <span className="text-[#14E8F0]">{packageName}</span>
            </h2>
            <p className="text-white/60 text-sm">
              Fill out the form below. We'll contact you with payment details and confirmation.
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 rounded-lg bg-[#14E8F0]/10 border border-[#14E8F0]/30 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#14E8F0] flex-shrink-0" />
              <p className="text-[#14E8F0] font-medium">
                Registration successful! We'll contact you soon with payment details.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-white/80 text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#14E8F0] focus:outline-none focus:ring-2 focus:ring-[#14E8F0]/20 transition-all"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-white/80 text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#14E8F0] focus:outline-none focus:ring-2 focus:ring-[#14E8F0]/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#14E8F0] focus:outline-none focus:ring-2 focus:ring-[#14E8F0]/20 transition-all"
                placeholder="john.doe@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#14E8F0] focus:outline-none focus:ring-2 focus:ring-[#14E8F0]/20 transition-all"
                placeholder="+216 XX XXX XXX"
              />
            </div>

            {/* University */}
            <div>
              <label htmlFor="university" className="block text-white/80 text-sm font-medium mb-2">
                University / Organization
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#14E8F0] focus:outline-none focus:ring-2 focus:ring-[#14E8F0]/20 transition-all"
                placeholder="University name"
              />
            </div>

            {/* Study Level */}
            <div>
              <label htmlFor="studyLevel" className="block text-white/80 text-sm font-medium mb-2">
                Study Level / Position
              </label>
              <select
                id="studyLevel"
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#14E8F0] focus:outline-none focus:ring-2 focus:ring-[#14E8F0]/20 transition-all [&>option]:bg-[#021326] [&>option]:text-white"
              >
                <option value="" className="bg-[#021326] text-white">Select...</option>
                <option value="undergraduate" className="bg-[#021326] text-white">Undergraduate</option>
                <option value="masters" className="bg-[#021326] text-white">Master's Student</option>
                <option value="phd" className="bg-[#021326] text-white">PhD Candidate</option>
                <option value="graduate" className="bg-[#021326] text-white">Recent Graduate</option>
                <option value="researcher" className="bg-[#021326] text-white">Researcher</option>
                <option value="professional" className="bg-[#021326] text-white">Professional</option>
                <option value="entrepreneur" className="bg-[#021326] text-white">Entrepreneur</option>
                <option value="other" className="bg-[#021326] text-white">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading || success}
                className="w-full bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium py-4 text-base rounded-full shadow-[0_0_20px_rgba(20,232,240,0.35)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : success ? "Registered!" : "Complete Registration"}
              </Button>
            </div>

            <p className="text-white/40 text-xs text-center pt-2">
              * Required fields. We'll contact you with payment instructions after registration.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
