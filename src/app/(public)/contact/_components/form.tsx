"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMutationToast } from "@/hooks/use-mutation-toast";
import { CONTACT_US_TYPE } from "@/lib/globals";
import { cn } from "@/lib/utils";
import type { MutationResponse } from "@/server/api/responses";
import { sendContactUsEmailInput } from "@/server/api/schemas/email.schema";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";

export default function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  const defaultType = searchParams.get("type");
  const defaultSubType = searchParams.get("subType");

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
    sendEmail.mutate({
      name: data.name,
      email: data.email,
      type: data.type,
      subType: data.subType,
      message: data.message,
      website: data.website,
    });
  };

  const form = useForm<z.infer<typeof sendContactUsEmailInput>>({
    resolver: zodResolver(sendContactUsEmailInput),
    defaultValues: {
      name: "",
      email: "",
      type: defaultType ?? "",
      subType: defaultSubType ?? "",
      message: "",
    },
    mode: "all",
  });

  useEffect(() => {
    if (defaultType) {
      form.setValue("type", defaultType);
    }
    if (defaultSubType) {
      form.setValue("subType", defaultSubType);
    }
  }, [defaultType, defaultSubType, form.setValue]);

  const type = form.watch("type");

  const subTypes = useMemo(() => {
    form.setValue("subType", "");
    if (!type) return [];
    return CONTACT_US_TYPE.find((t) => t.key === type)?.subTypes || [];
  }, [type, form.setValue]);

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
                <CardTitle>We got the message!</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 text-center">
                <p>Thanks for contacting us! We will get back to you as soon as possible.</p>
                <div className="flex w-full justify-end gap-2">
                  <Button onClick={() => router.push("/")} variant="secondary">
                    Back to home
                  </Button>
                  <Button onClick={() => router.push("/contact")} className="!bg-indigo-500">
                    Send another message
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
              <CardHeader>
                <CardTitle>Get in touch!</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-4">
                      <Input
                        label="Name"
                        placeholder="Who are you?"
                        required
                        type="text"
                        autoComplete="name"
                        {...form.register("name")}
                      />
                      <Input
                        label="Email"
                        placeholder="What's your email?"
                        required
                        type="email"
                        autoComplete="email"
                        {...form.register("email")}
                      />
                      <Input
                        label="Website"
                        placeholder="What's your website?"
                        autoComplete="off"
                        {...form.register("website")}
                        className="hidden"
                        tabIndex={-1}
                      />
                      <Select onValueChange={(value) => form.setValue("type", value)} value={form.watch("type")}>
                        <SelectTrigger label="Type" className="w-full">
                          <SelectValue placeholder="What are you looking for?" />
                        </SelectTrigger>
                        <SelectContent>
                          {CONTACT_US_TYPE.map((type) => (
                            <SelectItem key={type.key} value={type.key}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div
                        className={cn("-mt-4 max-h-0 overflow-y-hidden blur-sm transition-all duration-500", {
                          "mt-0 max-h-32 blur-none": !!type && subTypes.length > 0,
                        })}
                      >
                        <Select
                          onValueChange={(value) => form.setValue("subType", value)}
                          value={form.watch("subType") ?? undefined}
                        >
                          <SelectTrigger label="Subtype" className="w-full">
                            <SelectValue placeholder="What specifically are you looking for?" />
                          </SelectTrigger>
                          <SelectContent>
                            {subTypes.map((subType) => (
                              <SelectItem key={subType.key} value={subType.key}>
                                {subType.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Textarea
                        label="Message"
                        placeholder="What's your message?"
                        required
                        {...form.register("message")}
                      />
                      <Button
                        type="submit"
                        className="w-full !bg-indigo-500"
                        disabled={sendEmail.isPending || !form.formState.isValid}
                      >
                        {sendEmail.isPending && <Loader2 className="size-4 animate-spin text-white" />}
                        Send
                      </Button>
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
