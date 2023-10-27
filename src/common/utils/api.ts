export function getDocumentForRender(id: string) {
  return `${window.location.origin}/api/v1/Document/${id}/Render`;
}

export function getDocumentForDownload(id: string) {
  return `${window.location.origin}/api/v1/Document/${id}/Download`;
}
