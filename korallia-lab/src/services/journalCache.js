const archiveCache = {
  fr: null,
  en: null,
};

const articleCache = {
  fr: {},
  en: {},
};

function normalizeLang(lang) {
  return lang === "en" ? "en" : "fr";
}

function getOppositeLang(lang) {
  return lang === "en" ? "fr" : "en";
}

function getApiBaseUrl() {
  return import.meta.env.VITE_API_URL;
}

async function fetchJournalArticle(lang, slug) {
  const response = await fetch(
    `${getApiBaseUrl()}/api/journal/${encodeURIComponent(slug)}?lang=${lang}`
  );

  if (!response.ok) {
    throw new Error("Article introuvable.");
  }

  return response.json();
}

export async function getJournalArchive(lang) {
  const currentLang = normalizeLang(lang);

  if (archiveCache[currentLang]) {
    return archiveCache[currentLang];
  }

  const response = await fetch(
    `${getApiBaseUrl()}/api/journal/archive?lang=${currentLang}`
  );

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des archives.");
  }

  const data = await response.json();

  archiveCache[currentLang] = data;

  return data;
}

export async function getJournalArticle(lang, slug) {
  const currentLang = normalizeLang(lang);
  const safeSlug = String(slug || "").trim();

  if (!safeSlug) {
    throw new Error("Slug d'article manquant.");
  }

  if (articleCache[currentLang][safeSlug]) {
    return articleCache[currentLang][safeSlug];
  }

  const data = await fetchJournalArticle(currentLang, safeSlug);

  articleCache[currentLang][safeSlug] = data;

  return data;
}

export async function getJournalArticleForRoute(lang, slug) {
  const currentLang = normalizeLang(lang);
  const safeSlug = String(slug || "").trim();

  if (!safeSlug) {
    throw new Error("Slug d'article manquant.");
  }

  try {
    const article = await getJournalArticle(currentLang, safeSlug);

    return {
      article,
      resolvedSlug: safeSlug,
    };
  } catch {
    const oppositeLang = getOppositeLang(currentLang);

    const oppositeArchive = await getJournalArchive(oppositeLang);
    const currentArchive = await getJournalArchive(currentLang);

    const sourceEntry = oppositeArchive.find(
      (entry) => String(entry.slug) === safeSlug
    );

    if (!sourceEntry) {
      throw new Error("Article introuvable.");
    }

    const translatedEntry = currentArchive.find(
      (entry) => String(entry.number) === String(sourceEntry.number)
    );

    if (!translatedEntry?.slug) {
      throw new Error("Traduction introuvable.");
    }

    const article = await getJournalArticle(currentLang, translatedEntry.slug);

    return {
      article,
      resolvedSlug: translatedEntry.slug,
    };
  }
}

export function primeJournalArticleCache(lang, article) {
  const currentLang = normalizeLang(lang);

  if (!article?.slug) return;

  articleCache[currentLang][article.slug] = article;
}

export function clearJournalCache() {
  archiveCache.fr = null;
  archiveCache.en = null;

  articleCache.fr = {};
  articleCache.en = {};
}