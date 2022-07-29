The application has a back-end (java), an API and a front-end (react/typescript).
The general structure of the files is as follows:

```mermaid
graph TD
    A[Back-end] -->|Text| B(API)
    B -->|Items| A
    B -->|Text| A
    A -->|Items| B
    B -->|Text| C[Front-end]
    C -->|Items| B
    C -->|Text| B
    B -->|Items| C
```
There are several lines between the back- and front-end:
1) One passes a number which calls a specific bit of text. 
2) One passes a string which changes the status of 'heldStatus' and 'inPossession' of an item to true.
3) One passes a string which changes the status of 'heldStatus' of an item to true.
4) One passes a string which changes the status of 'inPossession' of an item to false.


The back-end looks like this:

```mermaid
graph TD

M[Playable]-->N[Implementation]
O[Player]-->N
P[Items]-->O
```
And the front-end looks like this: 

```mermaid
graph TD

  D[StartGame] --> E[Play]
  E --> F[Computer]
  E --> G[Elevator]
  G --> H[Escape]
  G --> I[Failed escape]
  F --> J[Computer2]
  J --> K[Shivtech]
  J --> L[Heroes]
```

