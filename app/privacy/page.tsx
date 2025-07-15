import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-md my-13">
        <CardContent className="px-6">
          <div className="flex items-center justify-between mb-4 text-[var(--thridary-foreground)]">
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--thridary-foreground)] hover:underline"
            >
              <Home size={32} />
            </Link>
          </div>
          <Separator className="mb-4" />
          <ScrollArea className="h-[70vh] pr-4">
            <div className="space-y-6 text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                <p>
                  I value your privacy and am committed to protecting your
                  personal information. This policy explains how I collect, use,
                  and share information when you use my website.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  2. Information I Collect
                </h2>
                <p>
                  I may collect personal information such as your name, email
                  address, and any other information you voluntarily provide. I
                  also collect non-personal information through cookies and
                  analytics tools.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  3. How I Use Information
                </h2>
                <p>
                  I use your information to operate and improve my services,
                  respond to inquiries, and send relevant updates. I do not sell
                  your personal information to third parties.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  4. Sharing Your Information
                </h2>
                <p>
                  I may share your information with service providers who help
                  me operate the website. I require them to protect your data
                  and use it only for specified purposes.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
                <p>
                  I implement appropriate security measures to protect your
                  information. However, no method of transmission over the
                  Internet is 100% secure.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal
                  information. Contact me if you would like to exercise these
                  rights.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  7. Changes to This Policy
                </h2>
                <p>
                  I may update this Privacy Policy occasionally. I encourage you
                  to review it regularly for any changes.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">8. Contact Me</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact me at{" "}
                  <a
                    href="mailto:eymas.ryan@gmail.com"
                    className="text-[var(--thridary-foreground)] underline"
                  >
                    eymas.ryan@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
