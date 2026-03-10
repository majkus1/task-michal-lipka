# Task 1 TDD Changelog

## Green phases

- Green 1: added minimal table structure with headers (`Name`, `Age`, `Email`).
- Green 2: added rendering of people rows based on `people` prop data.
- Green 3: added empty state row with `No data` for an empty people list.
- Green 4: connected `TaskOneView` with API via `fetchPeople`, including loading and error flow.

## Refactor phase

- Refactor 1: updated `TaskOneView` async test flow to use `flushPromises` and `nextTick`.
