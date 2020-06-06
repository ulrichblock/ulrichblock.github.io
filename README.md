# https://www.ulrich-block.de

![Gatsby Publish](https://github.com/ulrichblock/www.ulrich-block.de/workflows/Gatsby%20Publish/badge.svg?branch=master)

This is source for the Blog [www.ulrich-block.de](https://www.ulrich-block.de).
It is realized with the static page generator [Gatsby](https://www.gatsbyjs.org/) and based on the starters [Gatsby Starter Blog Typescript](https://github.com/gperl27/Gatsby-Starter-Blog-Typescript) and [Developer Diary](https://www.gatsbyjs.org/starters/willjw3/gatsby-starter-developer-diary/).

### TODOs

After Release
- Improve types
  - abstract central and extend per file
  - use post-list.tsx as example and replace IProps
  - Each component/function with typed in/out
  - Enforce with eslint
- For each page auto link to GitHub markdown or tsx file
- Run deadlink test
- Improve search result and add some fuzziness
  - Whitespace at "Game Server" should hit "Gameserver"
  - Look at the page body for hits too.
