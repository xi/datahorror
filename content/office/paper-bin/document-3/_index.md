---
banner: 'img/steve-johnson-Kr8Tc8Rugdk-unsplash.jpg'
bannerAttribution: 'Steve Johnson'
bannerAttributionLink: 'https://unsplash.com/photos/Kr8Tc8Rugdk'
paths:
  - label: 'Look again at the first hidden document'
    url: 'office/paper-bin/document-1/'
  - label: 'Look again at the second hidden document'
    url: 'office/paper-bin/document-2/'
  - label: "Take a look around Professor Hutseephluts' office"
    url: 'office/'
---

# Hidden document 3

You found a test! You better not disappoint Prof. Hutseephluts and answer all
the questions correctly or you may never see daylight again!

<form novalidate>
  <fieldset>
    <legend>What are reasons to archive your research data?</legend>
    <label class="form-check"><input type="checkbox" required> Long-term preservation</label>
    <label class="form-check"><input type="checkbox" required> Replication/reproducibility</label>
    <label class="form-check"><input type="checkbox" required> Longitudinal research</label>
    <label class="form-check"><input type="checkbox" required> The data are unique or new data collection is expensive</label>
    <label class="form-check"><input type="checkbox" required> Re-usability by your future-self or other researchers</label>
    <label class="form-check"><input type="checkbox" required> Acceleration of research inside or outside your own discipline</label>
    <label class="form-check"><input type="checkbox" required> Funders ask you to</label>
    <label class="form-check"><input type="checkbox" required> To protect it from zombies</label>
  </fieldset>

  <fieldset>
    <legend>Which of the following should data repositories minimally provide?</legend>
    <label class="form-check"><input type="checkbox" required> A persistent identifier (e.g. DOI, Handle), which provides a permanent link to the data, making your data findable and citable.</label>
    <label class="form-check"><input type="checkbox" required> A licence, providing clarity for the potential user of your data whether and how re-use of your data is permitted.</label>
    <label class="form-check"><input type="checkbox" required> A (basic) preservation and data availability statement.</label>
    <label class="form-check"><input type="checkbox" required> The requirement to add appropriate metadata to the data.</label>
  </fieldset>

  <fieldset>
    <legend>The website <a href="https://re3data.org">Re3data</a> can be used to find a suitable data repository for your discipline.<legend>
    <label class="form-check"><input name="re3" type="radio" required> True</label>
    <label class="form-check"><input name="re3" type="radio"> False</label>
  </fieldset>

  <fieldset>
    <legend><a href="https://github.com">GitHub</a> can be used as a publicly accessible platform with version control for research software/code.<legend>
    <label class="form-check"><input name="github" type="radio" required> True</label>
    <label class="form-check"><input name="github" type="radio"> False</label>
  </fieldset>

  <fieldset>
    <legend>You want to make your data publicly available. What are FAIR ways to do this?</legend>
    <label class="form-check"><input type="checkbox"> Have a pack of werewolves spread your data across the country.</label>
    <label class="form-check"><input type="checkbox"> Share a dropbox link to the data with anyone that requests access.</label>
    <label class="form-check"><input type="checkbox" required> Upload the data to a repository like DANS-EASY, DataVerseNL, or 4TU.ResearchData.</label>
    <label class="form-check"><input type="checkbox"> Email the data to your collegues and peers.</label>
    <label class="form-check"><input type="checkbox" required> Upload the data to the Open Science Framework (OSF).</label>
  </fieldset>

  <fieldset>
    <legend>If there is no licence, this means that anyone can do anything with the data.<legend>
    <label class="form-check"><input name="license" type="radio"> True</label>
    <label class="form-check"><input name="license" type="radio" required> False</label>
  </fieldset>

  <p class="form-if-incorrect">Something is not correct.</p>
  <p class="form-if-correct">Well done, you've passed the test! Prof. Hutseephluts marked the bottom of the bin with the word <strong>AVOID</strong>. Make a note of it!</p>
  <button>Check</button>
</form>
