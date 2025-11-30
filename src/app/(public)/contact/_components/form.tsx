"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMutationToast } from "@/hooks/use-mutation-toast";
import { cn } from "@/lib/utils";
import type { MutationResponse } from "@/server/api/responses";
import { sendContactUsEmailInput } from "@/server/api/schemas/email.schema";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Info, Loader2, Lock, Send } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";

export default function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  const onSendToast = useMutationToast({
    loading: "Sending email...",
    success: (data: ReturnType<typeof MutationResponse>) => {
      router.push("/contact?success=true");
      return data.message;
    },
    error: (data: ReturnType<typeof MutationResponse>) => data.message,
  });

  const sendEmail = api.email.sendContactUsEmail.useMutation(onSendToast);

  const handleSubmit = (data: z.infer<typeof sendContactUsEmailInput>) => {
    posthog.identify(data.email, {
      name: data.name,
      email: data.email,
      website: data.website,
      painpoint: data.painpoint,
      address: data.address,
    });
    posthog.capture("contact_us_form_submitted", {
      name: data.name,
      email: data.email,
      website: data.website,
      painpoint: data.painpoint,
      address: data.address,
      current_rate: 499.0,
    });
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17260632331/IgXoCNz0xMkbEIuywaZA",
        value: 249.0,
        currency: "USD",
        enhanced_conversion_data: {
          email: data.email,
        },
      });
    }
    sendEmail.mutate({
      name: data.name,
      email: data.email,
      painpoint: data.painpoint,
      website: data.website,
      address: data.address,
    });
  };

  const form = useForm<z.infer<typeof sendContactUsEmailInput>>({
    resolver: zodResolver(sendContactUsEmailInput),
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "all",
  });

  useEffect(() => {
    const website = searchParams.get("website");
    if (website && !form.getValues("website")) {
      form.setValue("website", website);
    }
  }, [searchParams]);
  return (
    <div className="animate-in zoom-in-95 fade-in-0 w-full max-w-2xl duration-700" key="contact">
      <AnimatePresence mode="popLayout">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
            className="w-full"
            key="success"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Application Received!</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 text-center">
                <p>
                  We are reviewing your store's traffic eligibility now. Expect a personal email from our engineering
                  team within 24 hours to confirm your Pilot spot.
                </p>
                <div className="flex w-full justify-end gap-2">
                  <Button onClick={() => router.push("/")} className="!bg-indigo-500">
                    Back to home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
            className="w-full"
            key="contact"
          >
            <Card className="w-full">
              <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-4">
                      <Input
                        label="Name"
                        placeholder="Jane Smith"
                        required
                        type="text"
                        autoComplete="name"
                        {...form.register("name")}
                      />
                      <Input
                        label="Email"
                        placeholder="jane@example.com"
                        required
                        type="email"
                        autoComplete="email"
                        {...form.register("email")}
                        onBlur={() => {
                          // If website hasn't been touched, autofill it from the email domain.
                          const website = form.getValues("website");
                          const email = form.getValues("email");
                          if (!website) {
                            // Only run if email is truthy and has an @
                            const atIdx = email.indexOf("@");
                            if (atIdx !== -1 && atIdx < email.length - 1) {
                              const domain = email.slice(atIdx + 1).trim();
                              const commonProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
                              if (domain && !commonProviders.includes(domain) && !website) {
                                form.setValue("website", domain);
                              }
                            }
                          }
                        }}
                      />
                      <Input
                        label="Website"
                        placeholder="https://example.com"
                        {...form.register("website")}
                        autoComplete="website"
                        required
                      />
                      <Input
                        label="Address"
                        placeholder="123 Main St, Anytown, USA"
                        autoComplete="off"
                        {...form.register("address")}
                        className="absolute -top-[999rem]"
                        tabIndex={-1}
                      />
                      <Select
                        required
                        value={form.watch("painpoint")}
                        onValueChange={(value) => form.setValue("painpoint", value)}
                      >
                        <SelectTrigger label="Painpoint" className="w-full">
                          <SelectValue placeholder="Select a painpoint" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bot-protection">My marketing list is being inflated by bots</SelectItem>
                          <SelectItem value="analytics-shield">
                            My conversion analytics are showing fake data
                          </SelectItem>
                          <SelectItem value="web-application-firewall">
                            Bots are killing my return on ad spend
                          </SelectItem>
                          <SelectItem value="resource-waste">
                            My team is wasting resources cleaning up bot mess
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        type="submit"
                        className="mt-4 w-full !bg-indigo-500"
                        disabled={
                          sendEmail.isPending ||
                          !(
                            form.watch("name") &&
                            form.watch("email") &&
                            form.watch("website") &&
                            form.watch("painpoint")
                          )
                        }
                      >
                        {sendEmail.isPending && <Loader2 className="size-4 animate-spin text-white" />}
                        Get protection <Send />
                      </Button>
                      <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
                        <Lock className="size-4" />
                        <p>No credit card required for application.</p>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
