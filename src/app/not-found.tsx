import { Button, Title } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grow">
      <div className="container h-full">
        <div className="flex flex-col items-center pt-20 h-full justify-center">
          <Title tag="h1">Sorry</Title>
          <p className="mt-6">
            Could not find requested resource or it in development
          </p>
          <Button className="mt-6" link="/">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
