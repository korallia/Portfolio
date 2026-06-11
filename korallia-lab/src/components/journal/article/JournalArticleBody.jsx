import { memo, useMemo } from "react";
import DOMPurify from "dompurify";

import { journalArticleStyles } from "./journalArticleStyles";

function JournalArticleBody({ html }) {
  const cleanHtml = useMemo(() => DOMPurify.sanitize(html || ""), [html]);

  return (
    <div className="flex w-full flex-col items-center px-4 pt-12 pb-24 md:px-12">
      <div className="relative w-full max-w-3xl">
        <div className="journal-article-body">
          <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </div>
      </div>

      <style>{journalArticleStyles}</style>
    </div>
  );
}

export default memo(JournalArticleBody);