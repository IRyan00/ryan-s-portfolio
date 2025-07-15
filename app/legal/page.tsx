import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import Link from "next/link";

const LegalPage: React.FC = () => {
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
                <h2 className="text-xl font-semibold mb-2">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using my website, you agree to be bound by
                  these Terms and Conditions. If you do not agree with any part,
                  you must not use my services.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  2. Use of the Service
                </h2>
                <p>
                  You agree to use the service only for lawful purposes and in a
                  way that does not infringe the rights of, restrict, or inhibit
                  anyone else’s use and enjoyment of the service.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  3. Intellectual Property
                </h2>
                <p>
                  All content provided on this site, including text, graphics,
                  logos, and images, is my property and protected by applicable
                  intellectual property laws.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  4. Limitation of Liability
                </h2>
                <p>
                  I am not liable for any damages that may occur to you as a
                  result of your use of my website, to the fullest extent
                  permitted by law.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  5. Changes to Terms
                </h2>
                <p>
                  I reserve the right to modify these terms at any time. Your
                  continued use of the site will signify your acceptance of any
                  changes to these terms.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">6. Contact Me</h2>
                <p>
                  If you have any questions about these Terms and Conditions,
                  you can contact me at{" "}
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

export default LegalPage;
