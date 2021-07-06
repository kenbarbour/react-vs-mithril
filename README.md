# React vs Mithril

Includes a couple of barebones starter apps to show differences between two good frontend javascript frameworks.  Both of the examples use webpack as a bundler, and include tailwind built into a separate CSS bundle.

Feel free to use these as a starter, although you may be better off using `create-react-app` or `create-mithril-app` to set up your starter application.

## Some Performance Benchmarks
| Benchmark  | React Skeleton | Mithril Skeleton |
| ---------  | -------------- | ---------------- |
| dev build time  | 2.40 seconds | 10.23 seconds |
| dev bundle | 2617 K | 237 K  |
| production build time | 5.24 seconds | 8.22 seconds |
| production bundle | 131 K | 30.0 K |
| production bundle (gzipped) | 42.7 K | 10.8 K |
