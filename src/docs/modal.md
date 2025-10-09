# 🧩 Modal Component — Learnings

## React Learnings

- `createPortal` from `'react-dom'`
- Syntax:
    ```tsx
    createPortal(content, domElement)

- event stop propagation
    ```js
    if(e.target === e.currentTarget) onClose();

## Typescript Learnings

- Function as prop
- Syntax:
    ```tsx
    interface ModalProps {
        onClose: () => void
    }

- Function takes a value and returns something
- Syntax:
    ```tsx
    interface ModalProps {
        onClose: (reason: string) => boolean;
    }

## CSS Learnings

- position: fixed
    positions an element relative to the viewport (the browser window), 
    not relative to any parent element.

- inset (shorthand for top, right, bottom, left)
    ```CSS
    inset: 10px;          /* top, right, bottom, left = 10px */
    inset: 10px 20px;     /* top/bottom = 10px, left/right = 20px *