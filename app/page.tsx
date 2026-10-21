import { PortfolioSite } from "@/components/portfolio-site";

export default function Page() {
  return (
    <>
      {/* Netlify form registration */}
      <form
        name="devlifefly-contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="devlifefly-contact" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" type="email" />
        <input name="business" />
        <input name="service" />
        <input name="budget" />
        <textarea name="description" />
      </form>

      <PortfolioSite />
    </>
  );
}