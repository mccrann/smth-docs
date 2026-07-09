#!/usr/bin/env python3
import json
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
DOCS_DIR = ROOT / "docs"


class DocsHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, directory=str(ROOT), **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/docs":
            self.send_api_docs()
            return
        super().do_GET()

    def send_api_docs(self):
        items = []
        for path in sorted(DOCS_DIR.glob("*.md")):
            text = path.read_text(encoding="utf-8")
            title_match = re.match(r"^#\s+(.+)$", text, re.MULTILINE)
            title = title_match.group(1).strip() if title_match else path.stem.replace("-", " ").title()
            items.append({"file": path.name, "title": title})

        payload = json.dumps(items).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    with ThreadingHTTPServer(("0.0.0.0", port), DocsHandler) as httpd:
        print(f"Serving docs at http://localhost:{port}")
        httpd.serve_forever()
