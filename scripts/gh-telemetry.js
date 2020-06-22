"use strict";
exports.__esModule = true;
exports.generateButtons = void 0;
function generateButtons(data) {
    var repoValues = data.repo.split("/");
    var html = '';
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
exports.generateButtons = generateButtons;
function generateStarHtml(repoValues) {
    return "<iframe src=\"https://ghbtns.com/github-btn.html?user=" + repoValues[0] + "&repo=" + repoValues[1] + "&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"150\" height=\"20\" title=\"GitHub\"></iframe>";
}
function generateWatchersHtml(repoValues) {
    return "<iframe src=\"https://ghbtns.com/github-btn.html?user=" + repoValues[0] + "&repo=" + repoValues[1] + "&type=watch&count=true&v=2\" frameborder=\"0\" scrolling=\"0\" width=\"150\" height=\"20\" title=\"GitHub\"></iframe>";
}
function generateForksHtml(repoValues) {
    return "<iframe src=\"https://ghbtns.com/github-btn.html?user=" + repoValues[0] + "&repo=" + repoValues[1] + "&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"150\" height=\"20\" title=\"GitHub\"></iframe>";
}
