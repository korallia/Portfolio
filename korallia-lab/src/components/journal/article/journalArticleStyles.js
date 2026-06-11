export const journalArticleStyles = `
  .journal-article-body {
    font-family: Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 1.125rem;
    line-height: 1.75;
    color: #E2D5C5; 
    letter-spacing: -0.005em;
  }

  @media (min-width: 768px) {
    .journal-article-body {
      font-size: 1.2rem;
      line-height: 1.8;
    }
  }

  .journal-article-body p {
    margin: 0 0 1.8rem;
    text-align: left;
  }

  .journal-article-body p:first-of-type {
    float: left;
    margin: 0 0.35rem 0 0;
    color: #F3EAE0;
  }

  .journal-article-body p:first-of-type::first-letter {
    display: inline-block;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 900;
    color: #F97316;
    font-size: 3.5rem;
    line-height: 1; 
    vertical-align: baseline; 
    margin-right: 0.25rem; 
    text-shadow: 2px 2px 0px rgba(245, 158, 11, 0.15);
  }

  .journal-article-body p:first-of-type + p {
    display: block;
    margin-bottom: 1.8rem;
  }

  .journal-article-body p:first-of-type + p + p {
    clear: both;
  }

  .journal-article-body h2 {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: #F8F8F8;
    margin: 4rem 0 1.5rem;
    text-align: left;
  }

  .journal-article-body h2::before {
    content: "// ";
    color: #F97316;
  }

  .journal-article-body h3 {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 900;
    text-transform: uppercase;
    color: #F59E0B;
    margin: 3rem 0 1.2rem;
    text-align: left;
  }

  .journal-article-body blockquote {
    margin: 3rem 0;
    padding: 0.5rem 1.5rem;
    border-left: 3px solid #F97316;
    font-style: italic;
    color: #F3EAE0;
    text-align: left;
  }

  .journal-article-body img {
    display: block;
    width: 100%;
    border: 2px solid #2A211C;
    background: #050607;
    padding: 0.5rem;
    box-shadow: 6px 6px 0 rgba(249, 115, 22, 0.12);
  }

  .journal-article-body figcaption {
    margin-top: 0.85rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8F7A68;
    text-align: center;
  }

  .journal-article-body a {
    color: #F97316;
    text-decoration: none;
    border-bottom: 1px dashed rgba(249, 115, 22, 0.5);
    transition: all 0.2s ease;
  }

  .journal-article-body a:hover {
    color: #F59E0B;
    border-bottom: 1px solid #F59E0B;
  }
`;