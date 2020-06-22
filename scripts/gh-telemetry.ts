export function generateButtons(data: any) {
  const repoValues = data.repo.split("/");
  let html: string = '';
  if (data.showStars) {
    html += generateStarHtml(repoValues);
  }
  if (data.showWatchers) {
    html += generateWatchersHtml(repoValues);
  }
  if (data.showForks) {
    html += generateForksHtml(repoValues);
  }
  return html;
}

function generateStarHtml(repoValues: string[]) {
  return `<iframe src="https://ghbtns.com/github-btn.html?user=${repoValues[0]}&repo=${repoValues[1]}&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>`;
}

function generateWatchersHtml(repoValues: string[]) {
  return `<iframe src="https://ghbtns.com/github-btn.html?user=${repoValues[0]}&repo=${repoValues[1]}&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>`;
}

function generateForksHtml(repoValues: string[]) {
  return `<iframe src="https://ghbtns.com/github-btn.html?user=${repoValues[0]}&repo=${repoValues[1]}&type=fork&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>`;
}
