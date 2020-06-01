# https://www.ulrich-block.de

This is source for the Blog [www.ulrich-block.de](https://www.ulrich-block.de).
It is realized with the static page generator [Gatsby](https://www.gatsbyjs.org/) and based on the starters [Gatsby Starter Blog Typescript](https://github.com/gperl27/Gatsby-Starter-Blog-Typescript) and [Developer Diary](https://www.gatsbyjs.org/starters/willjw3/gatsby-starter-developer-diary/).

### TODOs

Before Release:
- any non image files to GitHub

After Release
- Improve types
  - abstract central and extend per file
  - Each component/function with typed in/out
  - Enforce with eslint
- For each page auto link to GitHub markdown or tsx file
- More labels
- Run deadlink test
- Improve search result and add some fuzziness
  - Whitespace at "Game Server" should hit "Gameserver"
  - Look at the page body for hits too.
