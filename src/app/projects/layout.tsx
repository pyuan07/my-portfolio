import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Pin Yuan",
  description:
    "Explore my portfolio of web development and software engineering projects.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
