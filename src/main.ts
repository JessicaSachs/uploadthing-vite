import "./style.css";
import { syntaxHighlight } from "./utils.ts";

const findUploadThingKeys = ([key]: [key: string, value: string]) => key.startsWith("UPLOAD_THING_");

const allEnvVars = Object.entries(import.meta.env);
const anyUploadThingVar = allEnvVars.filter(findUploadThingKeys);
const inProduction = import.meta.env.MODE.toLocaleLowerCase() === "production";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Upload Thing Vite Environment Variable Tester</h1>
    <h4>
      You in prod?
      ${
        inProduction
          ? '<span style="color: deeppink;">Yea we\'re in prod</span>'
          : "Nah, we're in " + import.meta.env.MODE
      }
    </h4>
    <p>
      <strong>Static: Using the key directly in source</strong><br/>
      This is when I'm typing <code>import<wpb/>.meta.env.UPLOAD_THING_BASE_URL</code> in the source code
      <br/>
      See? It resolves like the Vite docs say it should. <code lang="json">${syntaxHighlight(
        import.meta.env.UPLOAD_THING_BASE_URL
      )}</code>
    </p>
    <hr/>
    <p>
      <strong>Dynamic: Iterating over keys dynamically</strong>
      <br/>
      This is when I'm iterating over the keys that we've added dynamically using the client-side source below
      <br/>
      <strong>Source</strong><br/>
      <pre>
const findUploadThingKeys = ([key]: [key: string, value: string]) =>
    key.startsWith("UPLOAD_THING_");
const allEnvVars = Object.entries(import.meta.env);
const anyUploadThingVar = allEnvVars.filter(findUploadThingKeys);</pre>
      <strong>Result</strong><br/>
      <pre lang="json">${syntaxHighlight(anyUploadThingVar)}</pre>
    </p>
    <hr/>
    <strong>All Environment Variables</strong><br/>
    <pre lang="json" style="display: block;">${syntaxHighlight(import.meta.env)}</pre>
  </div>
`;
