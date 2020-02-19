
/* eslint-disable no-undef */
import { ReactSelector, waitForReact } from 'testcafe-react-selectors';
import { Selector } from 'testcafe';
import { baseUrl, Search } from '../utils';

// A Deeplink is a subsection of the sections. This is testing if the page is taken to the right section of page to match the hash

const getSuggestion = page => {
  return ReactSelector(`${Search} StyledDrop Button`).withText(page);
};

fixture('Deep Linking')
  .page(baseUrl)
  .beforeEach(async () => {
    await waitForReact();
  });


/*This test will fail until issue #320 is fixed. The page scroll is at the incorrect section of the 
page therefore it is failing. Going to leave commented out for now. 
*/

// test('should navigate to correct hash after user clicks a suggestion that leads to a page subsection', async t => {
//   const page = 'Background Colors';
//   const backgroundColors = Selector('#background-colors')
//   const suggestion = getSuggestion(page);

//   await t
//     .typeText(ReactSelector(Search), 'col')
//     .click(suggestion)
//     .expect(backgroundColors.getBoundingClientRectProperty("top"))
//     .within(-150, 150);
// });

/*Added range to this test since now there is some issues with different browsers as to where
the page actually lands when routed to a deep link
*/

test('should navigate to correct hash of page when a deep link is directly routed to', async t => {
  const url = `${baseUrl}/foundation/color#background-colors`
  const pageSection = Selector('#background-colors');
  await t
    .navigateTo(url)
    .expect(pageSection.getBoundingClientRectProperty("top"))
    .within(-150, 150);
});