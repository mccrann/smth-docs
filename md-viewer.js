const params = new URLSearchParams(window.location.search);
const mdFile = params.get('file') || 'index.md';
const contentEl = document.getElementById('markdown-content');
const titleEl = document.getElementById('page-title');
const navEl = document.getElementById('doc-nav');

function getTitleFromMarkdown(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled page';
}

function createNavLink(file, title, isActive) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = file === 'index.md' ? '/' : `/?file=${encodeURIComponent(file)}`;
  link.textContent = title;
  if (isActive) {
    link.classList.add('active');
  }
  li.appendChild(link);
  return li;
}

function buildSidebar(items) {
  navEl.innerHTML = '';
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    fragment.appendChild(createNavLink(item.file, item.title, item.file === mdFile));
  });

  navEl.appendChild(fragment);
}

fetch('/api/docs')
  .then(response => {
    if (!response.ok) {
      throw new Error('Unable to load docs index');
    }
    return response.json();
  })
  .then(items => {
    buildSidebar(items);
  })
  .catch(() => {
    buildSidebar([
      { file: 'index.md', title: 'smth-docs Help Center' },
      { file: 'getting-started.md', title: 'Getting Started' },
      { file: 'usage.md', title: 'Usage' },
      { file: 'faq.md', title: 'FAQ' },
      { file: 'sample-doc.md', title: 'Sample Markdown Page' }
    ]);
  });

const markdownPath = mdFile.startsWith('docs/') ? mdFile : `docs/${mdFile}`;

fetch(markdownPath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Unable to load ${mdFile}: ${response.statusText}`);
    }
    return response.text();
  })
  .then(markdown => {
    const html = marked.parse(markdown);
    contentEl.innerHTML = html;
    document.querySelectorAll('.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4').forEach(el => {
      el.classList.add('doc-heading');
    });

    const firstHeading = document.querySelector('.markdown-content h1');
    if (firstHeading) {
      titleEl.textContent = firstHeading.textContent;
    } else {
      titleEl.textContent = mdFile.replace(/^.*\//, '');
    }
  })
  .catch(error => {
    titleEl.textContent = 'Error loading markdown';
    contentEl.innerHTML = `<p>${error.message}</p>`;
  });
