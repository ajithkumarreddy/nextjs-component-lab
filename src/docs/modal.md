# 🧩 Modal Component — Learnings

## 🧠 React Learnings

- **`createPortal` from `'react-dom'`**

  - Used to render children into a DOM node that exists outside the parent component hierarchy.
  - **Syntax:**
    ```tsx
    createPortal(content, domElement);
    ```
  - Example:
    ```tsx
    {
      showModal && createPortal(<ModalContent />, document.body);
    }
    ```

- **Event Stop Propagation (Backdrop Click Handling)**

  - Prevents clicks inside the modal from bubbling up to the backdrop.
  - **Syntax:**
    ```js
    if (e.target === e.currentTarget) onClose();
    ```
  - Ensures modal closes only when clicking outside the modal content.

- **Keyboard Event Handling (Escape Key Close)**

  - Enables keyboard accessibility to close modal via `ESC`.
  - **Syntax:**
    ```js
    if (event.key === "Escape") onClose();
    ```

- **`useLayoutEffect` vs `useEffect`**

  - `useLayoutEffect` runs **synchronously after DOM mutations**, before the browser repaints.
  - Used here to capture `document.activeElement` **before** the modal child mounts and focuses its input.
  - Ensures correct focus restoration after modal closes.

- **Focus Management**

  - `document.activeElement` helps identify which element was focused before modal opened.
  - Restoring focus:

    ```tsx
    previousActiveElementRef.current =
      document.activeElement as HTMLElement | null;

    return () => {
      previousActiveElementRef.current?.focus();
    };
    ```

  - Improves accessibility and user experience.

- **Portal Target Setup**

  - Usually a `<div id="modal-root"></div>` is placed at the end of `body`.
  - Fallback to `document.body` if `#modal-root` is missing.

- **Cleanup with Effects**
  - Always remove event listeners and reset refs in the cleanup function to prevent leaks.

---

## 🧩 TypeScript Learnings

- **Function as Prop**

  - Pass callback functions from parent to child components.
  - **Syntax:**
    ```tsx
    interface ModalProps {
      onClose: () => void;
    }
    ```

- **Function with Arguments and Return Type**

  - Define function props that accept parameters and return values.
  - **Syntax:**
    ```tsx
    interface ModalProps {
      onClose: (reason: string) => boolean;
    }
    ```

- **Type Casting Active Element**

  - Safely type the `document.activeElement` reference.
    ```tsx
    const element = document.activeElement as HTMLElement | null;
    ```

- **React.FC Type**
  - Using `React.FC<Props>` helps with children typing and consistent function component declarations.
    ```tsx
    const Modal: FC<ModalProps> = ({ onClose }) => { ... };
    ```

---

## 🎨 CSS / Tailwind Learnings

- **`position: fixed`**

  - Positions an element relative to the **viewport** (not its parent).
  - Keeps the modal centered even on scroll.
  - Example:
    ```css
    position: fixed;
    top: 0;
    left: 0;
    ```

- **`inset` Shorthand**

  - Shorthand for setting all four sides (`top`, `right`, `bottom`, `left`).
  - **Examples:**
    ```css
    inset: 10px; /* top, right, bottom, left = 10px */
    inset: 10px 20px; /* top/bottom = 10px, left/right = 20px */
    ```

- **Backdrop Styling**

  - Semi-transparent overlay behind modal content.
    ```css
    background-color: rgba(0, 0, 0, 0.5);
    ```

- **Centering Modal**

  - Using Flexbox utilities in Tailwind:
    ```html
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    ></div>
    ```

- **Focus Ring for Accessibility**

  - Tailwind focus utilities for visible focus:
    ```html
    className="focus:outline-none focus:ring-2 focus:ring-blue-400
    focus:ring-offset-2"
    ```

- **`z-index` for Layering**
  - Ensures modal is displayed above all other content.
    ```css
    z-index: 50;
    ```

---

## 🧩 Bonus Learnings (Optional Enhancements)

- **Prevent Page Scroll While Modal Open**
  ```tsx
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);
  ```
