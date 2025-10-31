import { useRouter } from "next/router";
import { CONTENT_CONFIG } from "@/config/contentConfig";

export default function Custom404() {
  const router = useRouter();
  const content = CONTENT_CONFIG.NOT_FOUND_PAGE;

  return (
    <div className="notfound-root">
      <div className="notfound-container">
        <h1 className="notfound-title">{content.TITLE}</h1>
        <h2 className="notfound-subtitle">{content.SUB_TITLE}</h2>
        <p className="notfound-description">{content.DESCRIPTION}</p>

        <button
          onClick={() => router.push(content.REDIRECT_PATH)}
          className="notfound-button"
        >
          {content.BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}
