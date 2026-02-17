import React from "react";
import { render } from "@react-email/render";
import fs from "fs";
import path from "path";
import { glob } from "glob";

async function buildEmails() {
  const dist = path.join(process.cwd(), "dist");
  if (!fs.existsSync(dist)) fs.mkdirSync(dist, { recursive: true });

  // Discover all .tsx email files
  const emailFiles = glob.sync("src/emails/*.tsx");
  const emails = [];

  for (const filePath of emailFiles) {
    const componentName = path.basename(filePath, ".tsx");
    const fullPath = path.resolve(filePath);

    try {
      const module = await import(fullPath);
      const component = module.default;

      if (component) {
        emails.push({ component, name: componentName });
      }
    } catch (error) {
      console.error(`Error importing ${componentName}:`, error);
    }
  }

  for (const { component: EmailComponent, name } of emails) {
    try {
      const html = await render(<EmailComponent />);
      const outputPath = path.join(dist, `${name}.html`);
      fs.writeFileSync(outputPath, html, "utf8");
      console.log(`Wrote dist/${name}.html`);
    } catch (error) {
      console.error(`Error building ${name}:`, error);
    }
  }
}

buildEmails().catch(console.error);
