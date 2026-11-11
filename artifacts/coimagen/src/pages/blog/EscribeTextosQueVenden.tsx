import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { salesCopyBlogContent } from "@/context/LanguageContext";

export default function EscribeTextosQueVenden() {
  return <BlogPostTemplate content={salesCopyBlogContent} />;
}
