// 로컬 개발용 정적 파일 서버 (외부 패키지 없이 Node.js 내장 모듈만 사용)
// 실행: npm start  →  http://localhost:3000
// 배포(Vercel)에는 사용되지 않으며, Vercel은 public/ 폴더를 그대로 정적 호스팅합니다.

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  res.end(body);
}

function resolvePath(urlPath) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(urlPath, 'http://localhost').pathname);
  } catch {
    return null;
  }
  const filePath = path.join(PUBLIC_DIR, path.normalize(pathname));
  // public/ 바깥의 파일에는 접근하지 못하도록 차단
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) return null;
  return filePath;
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, 'Method Not Allowed', { Allow: 'GET, HEAD' });
  }

  let filePath = resolvePath(req.url);
  if (!filePath) return send(res, 400, 'Bad Request');

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        const status = readErr.code === 'ENOENT' || readErr.code === 'EISDIR' ? 404 : 500;
        console.log(`${status} ${req.method} ${req.url}`);
        return send(res, status, status === 404 ? '404 Not Found' : '500 Internal Server Error');
      }

      const type = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': type,
        'Content-Length': data.length,
        'Cache-Control': 'no-cache', // 개발 중 수정 사항이 바로 반영되도록
      });
      res.end(req.method === 'HEAD' ? undefined : data);
      console.log(`200 ${req.method} ${req.url}`);
    });
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`포트 ${PORT}이(가) 이미 사용 중입니다. 다른 포트로 실행하세요: PORT=3001 npm start`);
  } else {
    console.error(err);
  }
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`로컬 서버 실행 중: http://${HOST}:${PORT}`);
  console.log('종료하려면 Ctrl + C 를 누르세요.');
});
