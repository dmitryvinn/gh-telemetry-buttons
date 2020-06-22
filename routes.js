const express = require('express');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const ghTelemetry = require("./scripts/gh-telemetry");

const router = express.Router();
const { check, validationResult, matchedData } = require('express-validator');


router.get('/', csrfProtection, (req, res) => {
  res.render('index', {
    data: {},
    errors: {},
    csrfToken: req.csrfToken()
  });
});

router.post('/', csrfProtection, [
  check('showStars'),
  check('showWatchers'),
  check('showForks'),
  check("repo")
  .contains('/')
  .withMessage("Repo should be in a format 'orgName/repoName'")
  .trim(),
], (req, res) => {
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("index", {
        data: req.body,
        errors: errors.mapped(),
        csrfToken: req.csrfToken()
      });
    }

    const data = matchedData(req);
    // Check that at least one button was selected
    if (!data.showStars 
      && !data.showWatchers 
      && !data.showForks) {
      return res.render("index", {
        data: "You need to choose at least one button to generate. Please try again.",
        errors: errors.mapped(),
        csrfToken: req.csrfToken()
      });
      }
      
    ghTelemetry.generateButtons(data);

    req.flash('success', ghTelemetry.generateButtons(data));
    res.redirect('/');
});

module.exports = router;
