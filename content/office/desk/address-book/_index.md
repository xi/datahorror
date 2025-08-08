---
paths:
  - label: 'Close the address book and go back to the desk'
    url: 'office/desk/'
  - label: "Take a look around Professor Hutseephluts' office"
    url: 'office/'
---

> | Name                   | Address                     | Phone Number    | Email Address             | IP Address  | Blood Type | Eye Colour | Age  | Height |
> |------------------------|-----------------------------|-----------------|---------------------------|-------------|------------|------------|------|--------|
> | Count Dracula          | 666 Transylvania Lane       | +1-800-666-6666 | dracula\@vampiremail.com  | 192.168.1.1 | AB-        | Red        | 400  | 180 cm |
> | Frankenstein's Monster | 13 Bolt Street              | +1-800-555-1234 | frankenstein\@monster.com | 192.168.1.2 | O+         | Green      | 200  | 210 cm |
> | The Mummy              | 7 Pyramid Way               | +1-800-777-8888 | mummy\@ancientmail.com    | 192.168.1.3 | A-         | Brown      | 3000 | 170 cm |
> | Werewolf               | 1 Full Moon Crescent        | +1-800-999-0000 | werewolf\@howlmail.com    | 192.168.1.4 | B+         | Yellow     | 150  | 190 cm |
> | Ghost                  | 4 Haunted House Road        | +1-800-111-2222 | ghost\@spookymail.com     | 192.168.1.5 | AB+        | Blue       | 100  | 160 cm |
> | Witch                  | 9 Broomstick Boulevard      | +1-800-333-4444 | witch\@cauldronmail.com   | 192.168.1.6 | A+         | Violet     | 250  | 165 cm |

<form novalidate>
  <p>Which of the data in the address book are personal data?</p>
  <fieldset>
    <label class="form-check"><input type="checkbox" required> Name</label>
    <label class="form-check"><input type="checkbox" required> Address</label>
    <label class="form-check"><input type="checkbox" required> Phone number</label>
    <label class="form-check"><input type="checkbox" required> Email address</label>
    <label class="form-check"><input type="checkbox" required> IP address</label>
    <label class="form-check"><input type="checkbox" required> Blood type</label>
    <label class="form-check"><input type="checkbox" required> Eye color</label>
    <label class="form-check"><input type="checkbox" required> Age</label>
    <label class="form-check"><input type="checkbox" required> Height</label>
  </fieldset>
  <p class="form-if-incorrect">Anything else?</p>
  <p class="form-if-correct">Well done! Any data collected from or about people are personal data.</p>
  <button>Check</button>
</form>

<form class="form-if-previous-correct" novalidate>
  <p>From the notes you understand that this data was collected in five different studies:</p>
  <ul>
    <li>study A collected participants’ age</li>
    <li>study B collected participants’ place of birth</li>
    <li>study C collected participants’ IP address</li>
    <li>study D collected participants’ eye colour</li>
    <li>study E collected participants’ blood type</li>
  </ul>
  <p>
    In each study, participants were assured that the raw data would be destroyed by a specific date.
    Some dates are noted in the margins, but it's unclear which date corresponds to which study.
    Fortunately, there are some clues:
  </p>
  <ul>
    <li>The second study did not collect IP addresses or blood types</li>
    <li>The largest study was the one collecting eye color</li>
    <li>The study collecting blood types was conducted before the study collecting IP addresses</li>
    <li>The study collecting places of birth was not the last study</li>
    <li>The study collecting ages was conducted after the one that collected IP addresses</li>
    <li>The largest study was conducted first</li>
  </ul>
  <label>
    What is the correct order of studies?
    <input required pattern="D-B-E-C-A" placeholder="A-B-C-D-E" maxlength="9">
  </label>
  <p class="form-if-incorrect">That's not it.</p>
  <p class="form-if-correct">Well done! A scrap of paper falls out of the address book, with the following word written on it: <strong>GOOD</strong>. Make a note of it!</p>
  <button>Check</button>
</form>
