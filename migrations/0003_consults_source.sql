-- 유입 경로: 폼의 '어디서 보셨나요'(선택)와 링크의 utm_source (2026-10-26, 전자책 경유 신청 집계용)
ALTER TABLE consults ADD COLUMN source TEXT;
ALTER TABLE consults ADD COLUMN utm_source TEXT;
