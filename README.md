# Tarkony React Frontend - 2025.08.01

## State:

The current focus of the project is to stabilize the core functionality: listing items on the main page and displaying detailed information in a single item view. The “Worth” and “Modding” pages are currently on hold but intended for future development. These sections will provide additional value and depth to the project once the core architecture is stabilized.

A separate backend will be developed to handle the external data source. Instead of fetching data on each render, the backend will retrieve and store the data in a local database. The frontend will then access the data via a dedicated REST API.

## Tasks

### Done:

- Refactored Tabs into separate components with encapsulated logic.
- Refactored Adapter: for complex data, mapped per-object using dedicated helper functions in adapters.ts.
- Prepared useSingleItemPricesQuery(itemId: string) for use in ItemSingle.
- Extended ItemList searching with RegExp support.
- Extended CategoryMenu with category selected initial prop -> 'items' or 'weapon-mod'.

### Next:

#### SearchBar:

- hooks/SearchBars Wrapper cache — fetch and use only one SearchBar
  ? prop drilling ? context

#### Item:

- Order by Price? Filter by Trader — click and select — opinion? — SAME AS MOD
- ItemBaseList length === 0 NullOverlay

#### Mod:

- Caliber sort manually
- Search and list everything? Order By?
- List categories within categories — Recursive?

#### Worth:

- Redesign Combination with value comparison — requires implementing bestPrices data fetching.
- In CountedItem, should we call the fetch?
- After fetching, select the best deal?
- In Combination, should we collect the aggregated price as a prop and pass its setter?
- CountedItem could get a wrapper component for cases when it’s not invoked from ItemList, so we can still pass the necessary deals as a parameter.

### Major

- Worth page (in progress).
- Modder compare Page
- ItemSingle as a pop-up separate window in ItemList → Barter / Craft deal able to pop-up with a button click.
- (Eventually) Whole UI refactor

### Still not figured out:

The Combination uses bestBuy and bestSell from itemBase.
However, when I open the page directly on itemSingle (not via redirect), these fields are missing.
To fix this properly, I would need to loop over useSingleItemPricesQuery(itemId: string) hook — but this would violate React hook rules.

## Overview

As a junior developer, I find it essential to maintain a **Junior Journal (JJ)** — a disciplined practice of detailed commenting, continuously updating the README, and logging any replaced methods or solutions. This helps track progress and decisions transparently.

---

## Project Description

**Tarkony** is a tool related to the online shooter game _Escape From Tarkov_. It provides:

- Real-time item prices from both the flea market and vendors
- Vendor availability
- Crafting cost analysis (comparing crafting cost versus purchase cost)
- Price-to-value rankings for armor and weapons
- A weapon permutation builder

Due to gaming culture sensitivities, access to the site is restricted behind a minimalist login system.

---

## API Source

Data is fetched from a GraphQL API:  
[https://tarkov.dev/api/](https://tarkov.dev/api/)

---

## Project Structure

```bash
Tarkony
├── public/
├── src/
│   ├── api/
│   │   ├── adapters/
│   │   │   ├── adapters.ts
│   │   │   ├── itemsAdapter.ts
│   │   │   ├── ItemSingleAdapter.ts
│   │   │   └── worthAdapter.ts
│   │   ├── hooks/
│   │   │   └── APICalls.ts
│   │   ├── old/
│   │   ├── queries/
│   │   │   ├── itemSingleQuery.ts
│   │   │   ├── itemsQuery.ts
│   │   │   └── worthQuery.ts
│   │   ├── types/
│   │   │   ├── ItemSingle/
│   │   │   │   ├── queryTyoe.ts
│   │   │   │   └── responseType.ts
│   │   │   ├── items/
│   │   │   │   ├── queryTyoe.ts
│   │   │   │   └── responseType.ts
│   │   │   └── worth/
│   │   │       ├── queryTyoe.ts
│   │   │       └── responseType.ts
│   │   └── apiClient.ts
│   ├── components/
│   │   ├── Items/
│   │   │   ├── categoryLogic.ts
│   │   │   ├── CategoryMenu.tsx
│   │   │   ├── ItemDetails.tsx
│   │   │   ├── ItemList.tsx
│   │   │   └── Tabs.tsx
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── skeletons
│   │       │   ├── skeleton.css
│   │       │   └── Skeleton.tsx
│   │       ├── Combination.tsx
│   │       ├── CountedItem.tsx
│   │       ├── MUIHover.tsx
│   │       ├── Tabs.tsx
│   │       ├── Status.tsx
│   │       └── SearchBar.tsx
│   ├── pages/
│   │   ├── Items.tsx
│   │   └── ItemSingle.tsx
│   ├── main.tsx
│   └── App.tsx
├── index.html
└── README.md
```

## More Detailed Explanations from a UX Perspective

There are (and will be) a lot of features intentionally accessible in multiple ways throughout the site. This is not the result of a flawed UI/UX design concept, but rather a deliberate decision for practice purposes. The goal is to experiment with different display approaches—how to create them, how to manage them.
For example, this includes both a single-page application (SPA) structure and in-page popup components that can be closed or moved around by clicking and dragging.

## Key Modules

## Routing

'/' -> Items.tsx
'/item/normalizedName' -> ItemSingle.tsx

## Fetching

### `graphQLClient.ts` + `itemSingleQuery.ts` + `itemsQuery.ts`

This module manages GraphQL request logic using Axios, integrating with useQuery to fetch pre-defined queries via custom hooks.
In progress: developing a standalone asynchronous fetch function (fetchQuery), not tied to React hooks.

Alternative for next big refactor: Every price should be shown in x.xxx.xxx format, easily done with .toLocaleString().
Currently, I call them like this, but next time I would structure it as:
`price:{
    value:price,
    valueString:price.toLocaleString(),
}`
This way, it won’t be necessary to repeatedly call a function just to display a properly formatted price.

I’m fully aware that GraphQL is not the most commonly used API handling method in all contexts, but the current API data source I’m working with uses it. I also plan to create an alternative REST API query, purely as a mockup—it won’t actually function.

### `APICalls.ts`

For direct usage, parameterized custom hooks from graphQLClient.ts are available as single query hook functions. In the comments, there is a pattern used to perform type checking in cases when a queryFetch is executed via the wrappers.

### `_Query.ts`

Contains the GraphQL Query for the given page.
The name is used as the cache key, and the key is the object name from which the direct response is extracted in `useFetchIntoCache` so the result is always a single array. The Query itself is also stored here.

Every query, query type, adapter, and response type is separated either by name or by folder, depending on which page it is used in.

### `queryType.ts`

GraphQL API raw data type

### `_Adapter.ts`

Contains functions used during fetch that transform types from `queryType.ts` to `responseType.ts`.

### `responseType.ts`

Target type structures after adapter processing of GraphQL API call.

## Components

### `CategoryMenu.tsx` + `categoryLogic.ts`

This component handles category selection, allowing the user to browse items by category.
It uses an intermediate parallel category processing, which collects the names of all child categories at every level under the selected category, and based on this, displays all related items across all levels of the selected category.

### `SearchBar.tsx`

As part of the search functionality, a SearchBar component was created.
It receives a delayed setter function from ItemList, which updates a keyword used for filtering the item list.

### `ItemList.tsx`

This displays items from the selected category. Data is retrieved from QueryData.
The query format is intentionally concise to avoid overloading the system, as there are 4000+ items, each with extensive associated data.
The list includes several MUI components, most notably:

Paginator many details per item are displayed in collapsible panels, keeping the UI clean

ItemDetails (see below)

SearchBar (see below)

Accordion mostly displays simple text, so I had to override its parent component to improve layout.

### `ItemDetail.tsx`

Part of ItemList. This simple component receives an item ID and fetches its remaining data.
Currently, it renders a box-based layout to verify data integrity. Uses tabs to show what options are available for the item.

### `CountedItem.tsx`

Display the input / output items under each other with icon and name

### `Combination.tsx`

Display the Whole combination Input -> With -> Output. Makes the code and array clean

### `Tabs.tsx`

Handle the Tabs component in `ItemDetails.tsx`

### `Status.tsx`

Handle an overlay in Error cases

### `MUIHover.tsx` - removed

I don't want to overload the detail view with too much information. I'd like to keep it simple yet effective. The idea is to display short tags per data group — for example, the number of barter-related items.
On hover, it will show the icons of those related items. For instance, the "Bottle of Water" item on the first page.
This logic will be generalized across other detailed data groups. The goal is to simplify rendering while improving clarity.

I removed this module since I switched to a clearer tab view, but I kept it because it worked quite well and was visually impressive.

---

## Junior Journal

Right from the start, I want to emphasize an important experience. As a junior, I considered it important to thoroughly understand how LLM works. At first, I used ChatGPT to get familiar and experiment with how I can use it as an aid. However, it has been a major hindrance so far. Gradually, I reduced its usage and only wanted to use it as guidance. Often, I deliberately did not set it aside, but I encountered many problems and lost a lot of time because of it. I did gain experience though, and the final result was always the same: among its suggestions were some functions that were indeed good to see, but when I wrote them myself, the code was much shorter and worked more efficiently - the best example: Category (see below: Categorical problems).

### S.O.L.I.D. refactor

Started with ItemDetails where the Tabs handling, the craft, barter, tasks sorting logic was in there. Szem előtt tartva hogy minden komponenesnek csak egy célzott logikája legyen.

### Reflections on fetching implementation

To retrieve the data, I approached the problem from multiple angles, aiming to design a dynamic, easily callable yet flexible system. While in this phase of the project a few direct fetch calls and local state would have sufficed, I deliberately built a more generalized solution that is maintainable, reusable, and scalable in the long term.

Since distinct use cases arose, I created a custom hook to accommodate them:

```typescript
useFetchIntoCache<QueryType[], AdapterType[]>(Query, QueryAdapter);
```

This custom hook performs a GraphQL query (currently via Axios.post), forwarding the query.query object. It then extracts the relevant branch from the data.data object in the response and, optionally, transforms the structure using an adapter function tailored to the consumption context.

The hook is integrated with React Query, thus it:

- Caches the response data using query.name as the cache key
- Retains data across navigation events
- Refreshes data on a weekly basis via the staleTime setting

Rather than returning the fetched data directly, the hook writes it into the React Query cache. The data can later be accessed using queryClient.getQueryData(...), even across multiple components.
For improved clarity and cleaner parameter handling, created Wrapped single versions. These are easier to call and reason about, without side effects or unnecessary parameter pollution.

Fetching roadmap:

- Basic local query execution with direct call and local state storage
- Introduction of a dynamic query object
- Addition of an adapter to handle varying data structures
- Transition to cache-based data storage and access
- Wrapped single versions

Later: At ItemDetails, I considered creating a regular fetch function (not a hook).
I ran into problems with fetchQuery, and I still don't fully understand the issue.
While ItemDetails may be more efficient as a hook, I still plan to implement the plain function version, just to learn from the process and understand how not to approach it.

### GraphQL Query

There is no official API data source yet; this is one of the reasons (among many) why the site will not be published, just a closed reference site. Also, I was warned that it is not the best. There is an issue, for example, that one Barter appears twice in the data, with the same data but two different IDs, and nothing within the game justifies this duplication.

### Categorical problems

Initially, I built the category selection as a simple select to make it work.
Once I got past that, I discovered the Chip element in MUI, which seemed perfect for category listing and selection.
Organizing categories posed a separate problem. With ChatGPT’s help, I considered working with a tree model and wanted it to question and discuss my approach and queries; it strongly recommended the tree approach.
After putting it aside for a while and completing another module, I approached the problem with a fresh mind and solved it with my own method. The code became much shorter, clearer, and easier to handle.
Thus, I retained a basic "flattened tree" structure that lists the branch and leaves for each selection and passes all the leaves under the branch to the listing as well - `useSelectedBulkCategoryLogic` works on a sort of recursive traversal level, which is displayed in ItemList.

Possibly to be expanded long-term: when the user clicks on the selected category, it could go back to its parent level, enabling stepping back up to the root level.

### `before-solid` Structure

Based on the resources I have studied — including the official React documentation - it is clear that React primarily favors a functional and declarative approach. Accordingly, the older class-based component model has been gradually replaced by hook-based logic. However, throughout various development expectations and industry practices, I have frequently encountered a demand for object-oriented (OOP) design principles. I have decided to refactor the project into an OOP-based structure, with particular attention to adhering to the SOLID principles. The functional version will be preserved in a separate branch in a stable state. I store it in `before-solid' brench.
